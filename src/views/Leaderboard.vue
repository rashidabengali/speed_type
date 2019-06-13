<template>
  <div class="board">
    <h1>LEADER BOARD</h1>
    <router-link :to="{ path: 'game' }"><b-button class="animated infinite pulse delay-2s, v-step-5" variant="primary">Play to make it to the Top</b-button></router-link>
    <!-- <div>
    <b-table striped hover class="table" :items="scores"></b-table>
    </div> -->
  <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Player Name</th>
          <th>Highest Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(score, i) in scores" :key="i">
          <td><img :src="score.image" alt="avatar" style="width: 70px; height: 70px; border-radius: 50%;"/></td>
          <td>{{ score.playerName }}</td>
          <!-- <td>{{ score.userId }}</td> | -->
           <td>{{ score.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import database from '@/services/database'
var _ = require('lodash');

export default {
  name: 'leaderboard',
  computed: {
    currentUser () {
      //console.log(this.$store.state.currentUser)
      return this.$store.state.currentUser
    }
  },
  data() {
    return {
      scores: []
    }
  },
  // Vue Lifecycle: like componentDidMount in React
  async mounted() {
    console.log('SCORES 1', this.scores)
      this.scores = await database.getScores();
      console.log('SCORES 2', this.scores)
      this.scores= _.orderBy(this.scores, ['score'], ['desc']);
    }
  }

</script>

<style scoped>
  img {
    object-position: 50% 50%;
  }

  h1 {
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 6px;
  }
  button {
    margin: 10px;
    padding: 10px;
    font-size: 20px;
  }
  tr, td, th {
    margin: 10px;
    padding: 10px;
    text-align: center;
    color: pink;
    width: 100px;
    border: 0
  }

  .table {
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  }

  .table td {
    vertical-align: middle;
  }

  tr:hover {
    background-color: grey;
  }

  th {
    background-color: silver;
    color: #0069D8;
    font-weight: bold;
    font-size: 20px;
  }

</style>
