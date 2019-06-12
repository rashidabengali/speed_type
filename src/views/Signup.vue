<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <h1>Sign Up</h1>
      <form enctype="multipart/form-data" >
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
          <input type="file" id="fileInput" ref="image" accept="image/*" class="input"/>

          <!-- <button @click.native="selectFile">Upload Image</button> -->
        </div>

        <!-- <img v-if="uploadEnd" :src="uploadedImage" /> -->

        <button v-on:click="uploadImg" class="button is-primary">Sign Up</button>
      </form>
      <br>
      <div class="message is-danger" v-if="error">
        <div class="message-body">{{error}}</div>
      </div>
    </div>
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

      var firebaseConfig = {
        apiKey: "AIzaSyDr32zYXkyHwdWDnMentnq2fmd9ZZghM_c",
        authDomain: "speedtype-e51a8.firebaseapp.com",
        databaseURL: "https://speedtype-e51a8.firebaseio.com",
        projectId: "speedtype-e51a8",
        storageBucket: "speedtype-e51a8.appspot.com",
        messagingSenderId: "771149971829",
        appId: "1:771149971829:web:acb3739a88d46dc5"
      };

      firebase.initializeApp(firebaseConfig)

      const selectedFile = document.getElementById("fileInput").files[0];
      //let imageValue = document.getElementById("fileInput").files[0].value;
      //let imageName = document.getElementById("fileInput").files[0].name;
      // this.image = imageValue
      //console.log('THIS IMAGE 1', document.getElementById("fileInput").files)
      const storageService = firebase.storage();
      const storageRef = storageService.ref();

      console.log('SELECTED FILE', selectedFile)
      // // Create a reference to 'mountains.jpg'
      //var imagesRef = storageRef.child(imageName);
      // // Create a reference to 'images/mountains.jpg'

      console.log('SELECTED FILE NAME', selectedFile.name)
      const name = selectedFile.name
      const fileName = `images\\${name}`

      const imageRef = storageRef.child(fileName)
      imageRef.put(selectedFile).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      }).catch((error) => { console.log('ERRORRR', error)});
      //return imagesRef
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

      console.log('AFTER uploadTask')
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
    }

  /*  async createAccount() {
        this.name = this.$refs.name.value
        console.log('THIS NAME', this.name)
        this.image = this.uploadImg()

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

      }*/
  }
}
</script>
