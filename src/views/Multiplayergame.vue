<template v-if="currentUser">
  <div class="game">
    <h1>SPEED TYPE</h1>
    <div class="multi">
    <p>Players in the Race</p>
    <ul>
      <template v-if="this.uid===currentUser.uid">
        <li v-for="p in players">
        {{p.name}} <span class="snapscore">{{p.score}}</span> WPM<span><b-progress height="2rem" :value="p.percentage"  show-progress animated></b-progress></span>
        </li>
      </template>
    </ul>
  </div>
    <h3 class="preventcopy" ref="heading"></h3>
    <textarea class="inputText" placeholder="start typing" v-model="test" v-on:keyup="timer" onpaste="return false" :disabled="isDisabled" />
    <p class="message">{{message}}</p>
    <b-row>
      <b-col lg="6" class="pb-2">
        <p>Timer (Seconds): <span class="score">{{stopwatch}}</span></p>
      </b-col>

      <b-col lg="6" class="pb-2">
        <p>Speed (WPM): <span class="score">{{speed}}</span></p>
      </b-col>
    </b-row>
    <!-- <p>Timer (Seconds): <span class="score">{{stopwatch}}</span></p> -->
    <!--<p>Percentage Completed: {{percentage}} %</p>-->
    <!--<p>Score: {{score}}</p>-->
    <!-- <p>Speed (WPM): <span class="score">{{speed}}</span></p> -->
    <!-- <ul>
    <li v-for="player in players">
    {{player}}
  </li>
</ul> -->
<b-button v-on:click="backToRace" size="lg" variant="success">Play Again</b-button>
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
      image: '',
      speed: 0,
      message: '',
      test: '',
      players: [],
      isDisabled: false,
      isPlaying: false,
      t: null,
      uid: '',
      name: '',
      stopwatch: 0,
      percentage: 0
    }
  },

  methods: {

    backToRace() {
      this.$router.push('/race')
    },

    addScore() {
      //const createdAt = new Date();
      database.addScore(this.name, this.uid, Number(this.speed), this.image, Number(this.percentage), this.raceId);
    },

    displayScore() {
      if(this.$refs.heading.innerText === this.test) {
        sw.stop();
        this.stopwatch = this.getElapsedTime();
        this.uid = this.currentUser.uid;
        this.name = this.currentUser.displayName;
        if (this.currentUser.photoURL) {
          this.image = this.currentUser.photoURL;
        } else {
          this.image = 'https://i.imgur.com/5vJnYMc.png';
        }
        this.message = 'CORRECT!';
        this.speed = this.getWPM()
        this.addScore();
        clearInterval(this.t);
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
        this.calculatePercentage()
        this.displayScore()
        return;
      }
      this.isPlaying = true;
      sw.start();

      this.t = setInterval(() => {
        this.stopwatch = this.getElapsedTime()
      }, 300)
    },

    calculatePercentage() {

      this.percentage = ((this.test.length/this.$refs.heading.innerText.length) * 100).toFixed()

      database.updatePlayerPercentage(this.raceId, this.uid, Number(this.percentage), Number(this.speed))
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

      const index = this.players.findIndex(p => p.id === this.uid)
      console.log('Player', this.players[index]);
      this.players[index].name = "You";
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

  h1 {
    margin: 10px 10px 10px 10px;
    padding: 10px;
    font-size: 60px;
    letter-spacing: 6px;
  }

  h3 {
    margin: 10px;
    font-size: 30px;
    padding: 10px;
    color: pink;
  }

  .score {
    color: pink;
    border: 1px solid silver;
    padding: 10px;
  }

  .snapscore {
    color: pink;
  }

  p, button{
    font-size: 20px;
    margin: 10px;
    padding: 10px;
  }

  li {
    list-style: none;
  }

  .multi p {
    font-size: 30px;
    color: pink;
    text-decoration: underline;
    font-weight: bold;
    text-decoration-style: double;
  }

  .message {
    color: green;
    font-weight: bold;
  }

</style>
