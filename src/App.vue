<template>
  <div id="app">
    <!--<div id="nav">
      <template v-if="currentUser">
        <router-link to="/game">Play Game</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <span> Welcome {{currentUser.email}} </span>
        <a href="#" @click="signOut">Sign Out</a>
      </template>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
import database from '@/services/database'
export default {

  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },

  methods: {
    async signOut () {
      await database.signOut()
      this.$router.push('/signin')
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].classList.add('container')
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');
/*@import '~bulma/css/bulma.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
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
  background-color: rgba(33,47,60,0.2);
  border-radius: 20px;
}
</style>
