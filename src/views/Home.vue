<template>
  <div class="home">
    <h1>SPEED TYPE</h1>
      <br>
      <img src="../assets/giphy.gif" alt="gif" />
      <div class="homeButtons">
      <b-row>
        <b-col lg="6" class="pb-2">
          <b-button href="/leaderboard" variant="light">Leader Board</b-button>
          <br>
          <br>
          <p>Make it to the top of the Leader Board.
          <br>
          Speed Up!
          </p>
        </b-col>

        <b-col lg="6" class="pb-2">
          <b-button href="/signup" variant="light">Sign Up</b-button>
          <br>
          <br>
          <p>Already a Member? <span><a href="/signin">Sign In</a></span></p>
        </b-col>
      </b-row>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>

//import { npm } from '../helpers/helpers';
//var randomSentence = require('random-sentence');
// export const npm = {
//   getRand: randomSentence()
// };
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // }

  data() {

    return {

    }

  },

  methods: {

  }
}
</script>

<style scoped>
  .home {
    
  }
  h1 {
    margin: 20px 10px 10px 10px;
    padding: 10px;
    font-size: 60px;
    letter-spacing: 6px;
    animation: text 3s 1;
  }

  @keyframes text {
    0%{
      margin-bottom: -40px;
    }
    30%{
      letter-spacing: 25px;
      margin-bottom: -40px;
    }
    85%{
      letter-spacing: 8px;
      margin-bottom: -40px;
    }
  }

  .homeButtons {
    margin: 20px 10px 10px 10px;
    padding: 10px;
  }

  p {
    font-size: 20px;
  }

  span a {
    color: silver;
  }

  span a:hover {
    text-decoration: none;
  }

  img {
    border-radius: 40px;
  }
</style>
