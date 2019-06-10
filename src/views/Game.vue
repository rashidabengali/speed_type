<template v-if="currentUser">
  <div class="game">
    <h1 id="v-step-0">Speed Type</h1>
    <h3 class="v-step-1" id="preventcopy" ref="heading"></h3>
    <textarea class="inputText" placeholder="start typing" v-model="test" v-on:keyup="timer" onpaste="return false" :disabled="isDisabled" />
    <p>{{message}}</p>
    <p class="v-step-2">Timer: {{stopwatch}} seconds</p>
    <!--<p>Percentage Completed: {{percentage}}</p>-->
    <!--<p>Score: {{score}}</p>-->
    <!-- <template v-if="this.speed===0">
      <p>Gotta work on your accuracy, Mate!</p>
    </template> -->
    <!-- <template v-else> -->
    <p class="v-step-3">Speed (WPM): {{speed}} </p>
    <!-- </template> -->
    <button data-v-step="6" v-on:click="restart">Restart</button>
    <p>
      <a class="v-step-4" href="/leaderboard">Leader Board</a>
      <a class="v-step-5" href="/race">Play with your Friends</a>
    </p>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
require('vue-tour/dist/vue-tour.css');
const Stopwatch = require('statman-stopwatch');
const sw = new Stopwatch();

import database from '@/services/database'
//import { npm } from '../helpers/helpers';
//var randomSentence = require('random-sentence');
var txtgen = require('txtgen');
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
      steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            content: `Take a tour for <strong>Game Instructions</strong>!`
          },
          {
            target: '.v-step-1',
            content: 'Type this sentence accurately below'
          },
          {
            target: '.v-step-2',
            content: 'As soon as you start typing, the timer will begin'
          },
          {
            target: '.v-step-3',
            content: `Your typing speed will be displayed here as you keep typing`
          },
          {
            target: '.v-step-4',
            content: `The higher your speed, the higher you score<br>Speed up to make it to the top ranks of the <strong>Leader Board</strong>`
          },
          {
            target: '.v-step-5',
            content: `Don\'t want to play alone?<br>No worries! Click here and create or join a race.`
          },
          {
            target: '[data-v-step="6"]',
            content: `Play the Game, you\'ll love it!<br>Click the <strong>Restart</strong> button to score higher.`,
            params: {
              placement: 'top'
            }
          }
        ],
      message: '',
      test: null,
      speed: 0,
      isDisabled: false,
      isPlaying: false,
      t: null,
      p: null,
      uid: '',
      stopwatch: 0,
    }
  },

  methods: {
    addScore () {
      const createdAt = new Date();
      database.addScore(this.uid, this.speed, createdAt);
    },

    displayScore() {
      if(this.$refs.heading.innerText === this.test) {
        sw.stop();
        this.stopwatch = this.getElapsedTime();
        this.uid = this.currentUser.uid;
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

      // this.p = setInterval(() => {
      //   this. percentage = ((this.test.length/this.$refs.heading.innerText.length) * 100).toFixed(2);
      // }, 1000)
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

      /*calculatePercentage() {
      if (this.isPlaying) {
      return;
    }
    this.isPlaying = true;
    this.p = setInterval(() => {
    this. percentage = ((this.$refs.heading.innerText.length - this.test.length)/this.$refs.heading.innerText.length) * 100;
    }, 1000)

    },*/

    getElapsedTime() {
      let elapsedTime = Number((sw.time() / 1000).toFixed(1))
      if (!elapsedTime) return 0
      return elapsedTime
    },

    restart() {
      this.stopwatch = 0
      this.speed = null
      this.message = ''
      this.test = ''
      this.isPlaying = false
      this.isDisabled = false
      this.t = null
      this.p = null
      this.$refs.heading.innerText = txtgen.sentence()
      sw.reset()
    }
  },

  mounted() {
    this.$refs.heading.innerText = txtgen.sentence();
    this.$tours['myTour'].start()
  }
}
</script>

<style>
  #preventcopy {
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
