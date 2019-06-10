<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <h1>Sign Up</h1>
      <form @submit.prevent="createAccount" >
        <div class="field">
          <input type="name" ref="name" placeholder="Name" class="input">
        </div>
        <div class="field">
          <input type="email" v-model="email" placeholder="Email" class="input">
        </div>

        <div class="field">
          <input type="password" v-model="password" placeholder="Password" class="input">
        </div>

        <div class="field">
          <input type="password" v-model="confirmPassword" placeholder="Confirm Password" class="input">
        </div>

        <div class="field">
          <input type="text" ref="image" placeholder="image URL" class="input">
        </div>

        <button v-on:click="createAccount" class="button is-primary">Sign Up</button>
      </form>
      <br>
      <div class="message is-danger" v-if="error">
        <div class="message-body">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import database from '@/services/database'
export default {
  name: 'signup',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: '',
      error: ''
    }
  },
  methods: {
    /*fileUpload() {
      this.$refs.image.click()
    },

    fileUploaded(e) {
      const files = e.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.') <= 0) {
        this.error = 'Please upload a valid image'
      }
      const fileReader = new FileReader()
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },*/

    async createAccount() {
        this.name = this.$refs.name.value
        this.image = this.$refs.image.value

        if(this.password === this.confirmPassword || this.name === '') {
          let result = await database.signUp(this.email, this.password, this.name, this.image)
          if(result.message) {
            this.error = result.message
          } else {
            //console.log('user created')
            this.$router.push('/profile')
          }
        } else {
          this.error = "Either Passwords do not match or name is blank"
        }

      }
  }
}
</script>
