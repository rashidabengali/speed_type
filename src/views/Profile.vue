<template v-if="currentUser">
  <div>
    <h1>PROFILE</h1>
    <p>{{currentUser.email}}</p>
    <template v-if="currentUser.displayName">
      <p>{{currentUser.displayName}}</p>
    </template>
    <template v-else>
      <p>New User</p>
    </template>
    <template v-if="currentUser.photoURL">
      <img :src="currentUser.photoURL" alt="avatar" style="width: 70px; height: 70px; border-radius: 50%;">
    </template>
    <template v-else>
      <img src="https://i.imgur.com/5vJnYMc.png" alt="avatar" style="width: 70px; height: 70px; border-radius: 50%;">
    </template>
    <br>
    <!-- <b-button variant="success" v-on:click="sendVerification">Verify Email</b-button> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import '@firebase/firestore'
import database from '@/services/database'
export default {
  name: 'profile',
  computed: {
    currentUser () {
      //console.log(this.$store.state.currentUser)
      return this.$store.state.currentUser
    }
  },
  async mounted() {
    database.emailVerify()
  }
}
</script>

<style scoped>
  img {
    object-position: 50% 50%;
  }
</style>
