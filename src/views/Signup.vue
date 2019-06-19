<template>
  <div class="signup">
    <b-card class="mt-3" header="SIGN UP">
      <b-form enctype="multipart/form-data">
        <b-form-group
        id="input-group-1"
        label="Your Name:"
        label-for="input-1"
        >
        <b-form-input
        id="input-1"
        v-model="name"
        type="name"
        required
        placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email Address:" label-for="input-2">
        <b-form-input
        id="input-2"
        v-model="email"
        type="email"
        required
        placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
        <b-form-input
        id="input-3"
        v-model="password"
        type="password"
        required
        placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Confirm Password:" label-for="input-4">
        <b-form-input
        id="input-4"
        v-model="confirmPassword"
        type="password"
        required
        placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Your Image:" label-for="input-5">
        <input
        type="file" id="fileInput" accept="image/*" class="input"/>
        <b-button v-on:click="uploadImg">Upload Image</b-button>
      </b-form-group>

      <b-button v-on:click="createAccount" variant="dark">Sign Up</b-button>
    </b-form>

  </b-card>

  <br>
  <div class="message is-danger" v-if="error">
    <div class="message-body">{{error}}</div>
  </div>
  <img src="https://i.imgur.com/C2cXrol.jpg" alt="keyboard" />
</div>
</template>

<script>
//import {firestorage} from '@/firebase/firestorage'
import firebase from 'firebase'
import '@firebase/firestore'
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
      error: '',
      uploadEnd: false,
      uploadedImage: '',
      uploadTask: '',
      fileName: ''
    }
  },
  methods: {

    uploadImg() {

      const storageService = firebase.storage();
      const storageRef = storageService.ref();

      const selectedFile = document.getElementById("fileInput").files[0];

      const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory

      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          // Handle unsuccessful uploads
          console.log('ERROR', error);
        },
        snapshot => {
          // Do something once upload is complete
          //console.log("success");
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // console.log("File available at", downloadURL);
            // console.log('CONSOLE THIS>IMAGE', this)
            this.image = downloadURL
            //console.log('CONSOLE THIS>IMAGE', this.image)
          });
        }
      );
    },

    async createAccount() {
      // this.name = this.$refs.name.value
      //console.log('MY NAME', this.name)
      // console.log('THIS IMAGE IS', this.image)
      // this.image = this.uploadImg()
      if(this.password === this.confirmPassword || this.name === '') {
        //console.log('THIS IMAGE', this.image)
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

<style scoped>
.signup {
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
