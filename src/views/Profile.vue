<template v-if="currentUser">
  <div>
    <h1>Profile</h1>
    <p>{{currentUser.email}}</p>
    <template v-if="currentUser.displayName">
      <p>{{currentUser.displayName}}</p>
    </template>
    <template v-else>
      <p>New User</p>
    </template>
    <template v-if="currentUser.photoURL">
      <img :src="currentUser.photoURL" alt="avatar" style="width: 50px; height: 50px; border-radius: 50%;">
    </template>
    <template v-else>
      <img src="../assets/cutmypic.png" alt="avatar" style="width: 50px; height: 50px; border-radius: 50%;">
    </template>
  </div>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    currentUser () {
      //console.log(this.$store.state.currentUser)
      return this.$store.state.currentUser
    }
  }
}
</script>
