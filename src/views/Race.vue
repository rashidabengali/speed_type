<template>
  <div class="race">
    <h1>PLAY WITH YOUR MATES</h1>
    <b-row>
      <b-col lg="6" class="pb-2">
        <input v-model="createToken" type="text" />
        <b-button v-on:click="createRace" variant="warning">Create Race</b-button>
      </b-col>

      <b-col lg="6" class="pb-2">
        <input v-model="joinToken" type="text" />
        <b-button v-on:click="joinRace" variant="warning">Join Race</b-button>
      </b-col>
    </b-row>
    <br>
    <div class="message is-danger" v-if="error">
      <div class="message-body">{{error}}</div>
    </div>
    <img src="https://i.imgur.com/C2cXrol.jpg" alt="keyboard" />
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
input, button {
  margin: 10px;
  padding: 10px;
  font-size: 20px;
}

h1 {
  padding: 10px;
  margin: 20px 10px;
  letter-spacing: 6px;
}

.pb-2 {
  padding: 20px;
  border: 6px solid pink;
  border-style: inset;
}

img {
  max-width: 400px;
  max-height: 300px;
  box-shadow:10px 10px 10px rgba(0,0,0,.7);
  animation:
  pulse 3s ease infinite alternate,
  nudge 5s linear infinite alternate;
  border-radius: 10%;
}

@keyframes pulse {
  0%, 100% {
    background-color: red;
  }
  50% {
    background-color: orange;
  }
}

@keyframes nudge {
  0%, 100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(150px, 0);
  }

  80% {
    transform: translate(-150px, 0);
  }
}
</style>
