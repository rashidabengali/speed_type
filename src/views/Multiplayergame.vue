<template v-if="currentUser">
  <div class="game">
    <h1>Speed Type</h1>
    <h3 class="preventcopy" ref="heading">{{phrase}}</h3>
    <input placeholder="start typing" v-model="test" v-on:keyup="timer" v-on:keyup.enter="displayScore" :disabled="isDisabled">
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
    <ul> Percentage Completed:
      <li v-for="p in players">
        {{p.id}} {{p.percentage || 0}}%
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
      test: null,
      phrase: '',
      players: [],
      isDisabled: false,
      isPlaying: false,
      t: null,
      p: null,
      uid: '',
      stopwatch: 0,
      percentage: []
    }
  },

  methods: {
    addScore() {
      const createdAt = new Date();
      database.addScore(this.uid, this.speed, this.percentage, createdAt, this.raceId);
    },

    displayScore() {
      sw.stop();
      this.stopwatch = this.getElapsedTime();
      this.uid = this.currentUser.uid;

      if(this.$refs.heading.innerText === this.test) {
        this.message = 'Correct';
        //this.score = this.stopwatch;
        this.speed = ((this.test.length / 5) / (this.stopwatch / 60)).toFixed(2);
      } else {
        this.message = 'Incorrect';
        //this.score = 0;
        this.speed = 0;
      }

      this.addScore();
      clearInterval(this.t);
      this.isDisabled = true;
    },

    timer() {
      if (this.isPlaying) {
        return;
      }
      this.isPlaying = true;
      sw.start();

      this.t = setInterval(() => {
        this.stopwatch = this.getElapsedTime()
      }, 300)

      this.p = setInterval(() => {
        this.percentage = ((this.test.length/this.phrase.length) * 100).toFixed(2);

        database.updatePlayerPercentage(this.raceId, this.uid, this.percentage)
      }, 1000)
    },

    getElapsedTime() {
      let elapsedTime = Number((sw.time() / 1000).toFixed(2));
      return elapsedTime;
    }
  },

  async mounted() {
    this.raceId = this.$route.params.id;
    this.uid = this.currentUser.uid;

    const raceDetailsDoc = await database.getRaceDetailsDoc(this.raceId);

    raceDetailsDoc.onSnapshot((doc) => {
      const raceDetails = doc.data();
      //console.log('Race details 1', raceDetails);

      this.phrase = raceDetails.phrase;
      this.players = raceDetails.players;

      //const index = this.players.findIndex(p => p.id === this.uid)
      //this.players[index].id = "You";

      //console.log('Race details 2', raceDetails);
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
</style>
