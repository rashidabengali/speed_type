<template>
  <div class="board">
    <h1>Leader Board</h1>
    <table class="board">
      <thead>
        <tr>
          <th>Players</th>
          <th>Highest Speed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(score, i) in scores" :key="i">
          <td>{{ score.userId }}</td> |
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
      this.scores = await database.getScores();
      this.scores= _.orderBy(this.scores, ['score'], ['desc']);
    }
  }

</script>

<style>
  .board {
    text-align: center;
  }
</style>
