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
          ref="name"
          type="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email Address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="email"
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

      <b-form-group id="input-group-4" label="Your Image:" label-for="input-4">
        <input
        type="file" id="fileInput" accept="image/*" class="input"
        />
        <b-button v-on:click="uploadImg">Upload Image</b-button>
      </b-form-group>

      <b-button v-on:click="createAccount" variant="dark">Sign Up</b-button>
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
      <!--<form enctype="multipart/form-data" >
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
          <input type="file" id="fileInput" ref="imgupload" accept="image/*" class="input" />
          <button v-on:click="uploadImg" class="button is-primary">Upload Image</button>
           <button @click.native="selectFile">Upload Image</button>
        </div>-->

        <!-- <img v-if="uploadEnd" :src="uploadedImage" /> -->

        <!--<button v-on:click="createAccount" class="button is-primary">Sign Up</button>
      </form>-->
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

    // selectFile() {
    //   this.$refs.image.click()
    // },
    //
    // detectFiles(e) {
    //   let fileList = e.target.files || e.dataTransfer.files
    //   Array.from(Array(fileList.length).keys()).map(x => {
    //     console.log('FILE LIST', fileList[x]);
    //     this.upload(fileList[x])
    //   })
    // },
    //
    // upload(file) {
    //   this.fileName = file.name
    //   var storageRef = firebase.storage().ref();
    //   // Create a reference to 'mountains.jpg'
    //   var imagesRef = storageRef.child(this.filename);
    //   // Create a reference to 'images/mountains.jpg'
    //   var profileImagesRef = storageRef.child(`images/${this.fileName}`);
    //
    //   this.uploadTask = storageRef.ref('images/' + this.filename).put(file)
    // },

    // watch: {
    //   uploadTask: function() {
    //     this.uploadTask.snapshot.ref.getDownloadURL().then(uploadedImage => {
    //       this.uploadEnd = true
    //       this.uploadedImage = uploadedImage
    //       this.$emit('uploadedImage', uploadedImage)
    //     })
    //   }
    // },

    uploadImg() {

      //let imageValue = document.getElementById("fileInput").files[0].value;
      //let imageName = document.getElementById("fileInput").files[0].name;
      // this.image = imageValue
      //console.log('THIS IMAGE 1', document.getElementById("fileInput").files)
      const storageService = firebase.storage();
      const storageRef = storageService.ref();

      const selectedFile = document.getElementById("fileInput").files[0];

      //console.log('SELECTED FILE', selectedFile)
      // // Create a reference to 'mountains.jpg'
      //var imagesRef = storageRef.child(imageName);
      // // Create a reference to 'images/mountains.jpg'

      // console.log('SELECTED FILE NAME', selectedFile.name)
      // const name = selectedFile.name
      // const fileName = `images\\${name}`

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
        console.log("success");
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          console.log('CONSOLE THIS>IMAGE', this)
          this.image = downloadURL
          console.log('CONSOLE THIS>IMAGE', this.image)
         });
      }
    );



      // const imageRef = storageRef.child(fileName)
      // imageRef.put(selectedFile).then(function(snapshot) {
      //   console.log('Uploaded a blob or file!');
      // }).catch((error) => { console.log('ERRORRR', error)});
      // //return imagesRef
      //console.log('UPLOAD TASK', uploadTask)

      //const url = uploadTask.getDownloadURL()
      //console.log('THE DAMN URL', url)
      // uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
      // .then((url) => {
      //     console.log('the damn URL', url);
      //     //document.querySelector('#someImageTagID').src = url;
      // })
      // .catch((error) => {
      //   console.log('ERROR FROM uploadTask', error)
      // });

      //console.log('AFTER uploadTask')
      // const fr = new FileReader();
      //   fr.readAsDataURL(imageValue);
      //   fr.addEventListener("load", () => {
      //     this.image = fr.result;
      //     //console.log("imageUrl");
      //     this.uploadedImage = imageValue;
    //
    //   uploadTask.then((snapshot) => {
    //     console.log('UPLOAD DONE?', snapshot.downloadURL)
    //   }, (error) => {
    //       console.log(error)
    //   }, () => {
    //     console.log('UPLOAD DONE?', snapshot)
    //   })
    // }

      // uploadTask.on('state_changed', (snapshot) => {
      //   console.log('Bytes transferred', snapshot.bytesTransferred)
      //   console.log('Total bytes', snapshot.totalBytes)
      //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   console.log('Upload is ' + progress + '% done');
      //   console.log('UPLOAD DONE?', snapshot.downloadURL)
      // }, (error) => {
      //     console.log('Error', error)
      // }, () => {
      //   console.log('UPLOAD DONE? ANY')
      // })
    },

    async createAccount() {
          this.name = this.$refs.name.value
          console.log('THIS IMAGE IS', this.image)
          // this.image = this.uploadImg()
          if(this.password === this.confirmPassword || this.name === '') {
            console.log('THIS IMAGE', this.image)
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
