<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <h1>Play with your Foes</h1>
      <form @submit.prevent="createRace">
        <input v-model="createToken" type="text" />
        <b-button variant="warning">Create Race</b-button>
      </form>
      <br>
      <!--{{raceId}}-->
      <form @submit.prevent="joinRace">
        <input v-model="joinToken" type="text" />
        <b-button variant="warning" class="button is-primary">Join Race</b-button>
      </form>
      <br>
      <div class="message is-danger" v-if="error">
        <div class="message-body">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
var txtgen = require('txtgen');

import database from '@/services/database'
export default {
  name: 'race',

  computed: {
    currentUser () {
      return this.$store.state.currentUser
    },

    raceId () {
      return this.database.createRace
    }
  },

  data () {
    return {
      createToken: null,
      error: '',
      joinToken: null,
      phrase: '',
      uid: ''
    }
  },
  methods: {
    async createRace() {
      //const createdAt = new Date()
      this.uid = this.currentUser.uid;
      this.name = this.currentUser.displayName;
      this.phrase = txtgen.sentence();
      const raceId = await database.createRace(this.createToken, this.uid, this.phrase, this.name)
      if(raceId.message) {
        this.error = raceId.message
      } else {
        this.$router.push(`/multiplayergame/${raceId}`)
      }
    },
    async joinRace() {
      this.uid = this.currentUser.uid;
      this.name = this.currentUser.displayName
      const raceId = await database.joinRace(this.joinToken, this.uid, this.name)
      //console.log('RACEEEEEE ID', raceId);
      if(raceId.message) {
        this.error = raceId.message
      } else {
        this.$router.push(`/multiplayergame/${raceId}`)
      }

    }
    // send the token created by player 1 to player 2 (hard code)  and then player 2 when joins room, looks for the same token in the collwction .get()

    //if found then check if player 2 id already exits in  that room or not.
    // if not then add player 2 id needs to be added to that room
  }
}
</script>

<style scoped>
form, input, button {
  margin: 10px;
  padding: 10px;
}
</style>
