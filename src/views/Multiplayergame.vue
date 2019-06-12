<template v-if="currentUser">
  <div class="game">
    <h1>Speed Type</h1>
    <h3 class="preventcopy" ref="heading"></h3>
    <textarea class="inputText" placeholder="start typing" v-model="test" v-on:keyup="timer" :disabled="isDisabled" />
    <p>{{message}}</p>
    <p>Timer: {{stopwatch}} seconds</p>
    <!--<p>Percentage Completed: {{percentage}} %</p>-->
    <!--<p>Score: {{score}}</p>-->
    <template v-if="this.speed===0">
      <p>Gotta work on your accuracy, Mate!</p>
    </template>
    <template v-else>
      <p>Speed (WPM): {{speed}} </p>
    </template>
    <ul> Accuracy Percentage:
      <li v-for="p in players">
        {{p.name}} {{p.percentage || 0}}%
        <div>
        <b-progress :value="p.percentage"  show-progress animated></b-progress>
        </div>
      </li>
    </ul>
    <!-- <ul>
    <li v-for="player in players">
    {{player}}
  </li>
</ul> -->
<p>
  <a href="/race">Play Again</a>
</p>
<!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
</div>
</template>

<script>

const Stopwatch = require('statman-stopwatch');
const sw = new Stopwatch();

import database from '@/services/database'
//import { npm } from '../helpers/helpers';
//var randomSentence = require('random-sentence');
//var txtgen = require('txtgen');
// export const npm = {
//   getRand: randomSentence()
// };
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'game',
  // components: {
  //   HelloWorld
  // }
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },

  data() {

    return {
      raceId: null,
      speed: null,
      message: '',
      test: '',
      players: [],
      isDisabled: false,
      isPlaying: false,
      t: null,
      p: null,
      uid: '',
      name: '',
      stopwatch: 0,
      percentage: 0
    }
  },

  methods: {
    addScore() {
      //const createdAt = new Date();
      database.addScore(this.name, this.uid, Number(this.speed), Number(this.percentage), this.raceId);
    },

    displayScore() {
      if(this.$refs.heading.innerText === this.test) {
        sw.stop();
        this.stopwatch = this.getElapsedTime();
        this.uid = this.currentUser.uid;
        this.name = this.currentUser.displayName;
        this.message = 'Correct';
        this.speed = this.getWPM()
        this.addScore();
        clearInterval(this.t);
        clearInterval(this.p);
        this.isDisabled = true;
      }
    },

    getWPM() {
      return ((this.test.length / 5) / (this.stopwatch / 60)).toFixed()
    },

    timer() {
      if (this.isPlaying) {
        this.$refs.heading.innerHTML = this.getPhraseHtml()
        this.speed = this.getWPM()
        this.displayScore()
        return;
      }
      this.isPlaying = true;
      sw.start();

      this.t = setInterval(() => {
        this.stopwatch = this.getElapsedTime()
      }, 300)

      this.p = setInterval(() => {
        this.percentage = ((this.test.length/this.$refs.heading.innerText.length) * 100).toFixed(2);

        database.updatePlayerPercentage(this.raceId, this.uid, Number(this.percentage))
      }, 1000)
    },

    getPhraseHtml() {
      let sentence = this.$refs.heading.innerText
      let typedText = this.test

      if (!typedText) {
        return sentence
      }

      let correctTyped = ''
      let i = 0

      for (; i<typedText.length; i++) {
        if (typedText[i] === sentence[i]) {
          correctTyped += sentence[i]
        } else {
          break
        }
      }

      let remainingText = sentence.substring(i)
      let remainingTextHtml = ''
      if (remainingText) {
        remainingTextHtml = `<span>${remainingText}</span>`
      }

      return `<span style="color: green">${correctTyped}</span>${remainingTextHtml}`
    },

    getElapsedTime() {
      let elapsedTime = Number((sw.time() / 1000).toFixed(2));
      return elapsedTime;
    }
  },

  async mounted() {
    this.raceId = this.$route.params.id;
    this.uid = this.currentUser.uid;
    this.name = this.currentUser.displayName;

    const raceDetailsDoc = await database.getRaceDetailsDoc(this.raceId);

    const doc = await raceDetailsDoc.get();
    this.$refs.heading.innerText = doc.data().phrase;

    raceDetailsDoc.onSnapshot((doc) => {
      const raceDetails = doc.data();
      this.players = raceDetails.players;
    });

    // this.phrase = raceDetails.phrase;
    // this.uid = this.currentUser.uid;
    //console.log('UID', this.uid)
    //this.players = raceDetails.players;
    // raceDetails.players.forEach((p) => {
    //   //console.log('SCORES', doc.data());
    //   //return scores;
    //   this.players.push(p.id)
    //   this.percentage.push(p.percentage)
    //   console.log('PERCENT', this.percentage)
    // })
    // this.players = raceDetails.players;
    // const index = raceDetails.players.findIndex(p => p.id === this.uid)
    // this.players.splice(index, 1, 'you')

    // const index = this.players.findIndex(p => p.id === this.uid)
    // this.players[index].id = "You";

    //this.players.splice(index, 1, 'you')


    //console.log('players array', this.players)
    /*raceDetails.players.forEach((player) => {
    //console.log('player', player)
    if(!player === this.uid) {
    this.players.push('you');
  }
  //console.log('players array', this.players)
});*/
//console.log('RACE DETAILS', raceDetails);

  }
}
</script>

<style>
  .preventcopy {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .inputText {
    height: 80px;
    width: 70%
  }
</style>
