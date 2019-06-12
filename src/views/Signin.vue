<template>
  <div class="signin">
    <b-card class="mt-3" header="SIGN IN">
      <b-form @submit.prevent="signIn">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group> -->

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="dark">Sign In</b-button>
    </b-form>

      <!-- <form @submit.prevent="signIn">
        <div class="field">
          <input type="email" v-model="email" placeholder="Email" class="input">
        </div>

        <div class="field">
          <input type="password" v-model="password" placeholder="Password" class="input">
        </div>

        <button class="button is-primary">Sign In</button>
      </form> -->
    </b-card>
    <br>
    <div class="message is-danger" v-if="error">
      <div class="message-body">{{error}}</div>
    </div>
    <img src="https://i.imgur.com/C2cXrol.jpg" alt="keyboard" />
  </div>
</template>

<script>
import database from '@/services/database'
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },

  methods: {
    async signIn () {
      let result = await database.signIn(this.email, this.password)
      if(result.message) {
        this.error = result.message
      } else {
        //console.log('user logged in')
        this.$router.push('/game')
      }
    }
  }
}
</script>

<style scoped>
.signin {
  margin-top: 40px;
}
.mt-3 {
  margin: 10px 10px 10px 10px;
  padding: 10px;
  font-size: 20px;
  border-radius: 20px;
  box-shadow:10px 10px 10px rgba(236,112,99,.5);
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
