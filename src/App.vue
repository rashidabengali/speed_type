<template>
  <div id="app">
    <audio controls id="myVideo" autoplay loop  hidden>
    <source src="src/assets/Vanguard Bouncy (loop).mp3" type="audio/wav">
    </audio>
    <!-- <audio src="Vanguard Bouncy (loop).mp3" type="audio/mpeg" autoplay loop>
    </audio> -->
    <div id="nav">
      <template v-if="currentUser">
        <ul>
          <li><router-link to="/">Home</router-link> |</li>
          <li><router-link :to="{ path: 'game' }">Play Game</router-link> |</li>
          <li><span> Welcome {{currentUser.displayName}} </span>
          <a href="#" @click="signOut">Sign Out</a> |</li>
        </ul>
        <!-- <router-link to="/profile">Profile</router-link> | -->
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
import database from '@/services/database'
require('howler');
export default {

  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },

  methods: {
    async signOut () {
      await database.signOut()
      this.$router.push('/')
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].classList.add('container')
    var sound = new Howl({
      src: 'assets/Vanguard Bouncy (loop).mp3',
      autoplay: true,
      loop: true
    });
      console.log('sound')
      sound.play();
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');

.container {
  background:
  radial-gradient(black 15%, transparent 16%) 0 0,
  radial-gradient(black 15%, transparent 16%) 8px 8px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
  background-color:#282828;
  background-size:16px 16px;
  color: #EC7063;
  font-family: 'Quantico', sans-serif;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  background-color: rgba(33,47,60,0.2);
  border-radius: 20px;
}

#nav li {
  text-align: right;
  list-style: none;
}

#nav li a:hover {
  text-decoration: none;
}
</style>
