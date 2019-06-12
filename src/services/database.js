import store from '@/store'
import firebase from 'firebase'
import '@firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDr32zYXkyHwdWDnMentnq2fmd9ZZghM_c",
  authDomain: "speedtype-e51a8.firebaseapp.com",
  databaseURL: "https://speedtype-e51a8.firebaseio.com",
  projectId: "speedtype-e51a8",
  storageBucket: "speedtype-e51a8.appspot.com",
  messagingSenderId: "771149971829",
  appId: "1:771149971829:web:acb3739a88d46dc5"
};

const database = firebase.initializeApp(firebaseConfig)
const db = database.firestore();

database.signUp = async (email, password, name, image) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      console.log('IMAGE', image)
      //console.log('Sign up user', firebase.auth().currentUser)
      return firebase.auth().currentUser.updateProfile({displayName: name, photoURL: image})
      .catch((error) => {
        return error
        //console.log('ERRORRRR', error)})
      })
      .catch(function(error) {
        return error
        //console.log('ERROR in signUp', error);
      })
    })
    store.commit('setCurrentUser', firebase.auth().currentUser)
    return true
  } catch (error) {
    return error
  }
}

database.signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    store.commit('setCurrentUser', firebase.auth().currentUser)
    //console.log('SIGNIN CURR USR', firebase.auth().currentUser)
    return true
  } catch (error) {
    return error
  }
}

database.signOut = async () => {
  try {
    await firebase.auth().signOut()

    store.commit('setCurrentUser', null)
    return true
  } catch (error) {
    return error
  }
}

database.addScore = async (playerName, userId, score, image, percentage, raceId) => {
   try {
    //const doc_ref = await
    const scoreDetails =  await db.collection('scores').add({image, playerName, score, userId})
    .then(function() {
      //debugger;
      // console.log('SCORE DETAILS in DB', scoreDetails)
      // console.log('raceId', raceId);
      if (raceId) {
        const raceDetails = db.collection('races').doc(raceId).get();
        //console.log('RACE DETAILS in DB', raceDetails)
        let players = [];
        players = raceDetails.data().players;
        const index = players.findIndex(p => p.id === userId)
        players[index].score = score;
        players[index].percentage = percentage;
        //console.log('player score', players[index].score);
        db.collection('races').doc(raceId).update({players})
      }
     })
    //console.log(doc_ref.id)
   } catch (error) {
    //  console.log('ERROR in addScore', error);
    return error
   }
}

database.getScores = async () => {
  try {
    let leaderboard = [];
    const scores = await db.collection('scores').get();
    scores.docs.forEach((doc) => {
      //console.log('SCORES', doc.data());
      //return scores;
      leaderboard.push(doc.data())
    })
    //console.log(leaderboard);
    return leaderboard;
  } catch (error) {
    //  console.log('ERROR in addScore', error);
    return error
  }
}

database.createRace = async (token, userId, phrase, name) => {
  try {
    //const doc_ref = await

    let playersObject = {
      name: name,
      id: userId,
      score: 0
    };

    let players = [];

    players.push(playersObject);

    const doc_ref = await db.collection('races').add({token, players, phrase})
    //console.log(doc_ref.id)
    const raceId = doc_ref.id;
    return raceId;
  } catch (error) {
    // console.log('ERROR in addScore', error);
    return error
  }
}

database.joinRace = async (joinToken, userId, name) => {
  try {
    let raceId = null;
    const races = await db.collection('races').get();
    races.docs.forEach((doc) => {
      if(doc.data().token === joinToken) {
        let players = doc.data().players;
        if (!players.includes(userId)) {
          let playersObject = {
            name: name,
            id: userId,
            score: null
          };
          players.push(playersObject);
          //players.push( userId );
          db.collection('races').doc(doc.id).update({players})
        }
        //console.log('DOC ID', doc.id)
        raceId = doc.id;
      }
    });

    return raceId;
  } catch (error) {
     console.log('ERROR in joinrace', error);
    return error
  }
}

database.getRaceDetailsDoc = async (raceId) => {
  try {
    // const raceDetails = await db.collection('races').doc(raceId).get();
    // //console.log('RACE DETAILS in DB', raceDetails)
    // return raceDetails.data();

    let doc = await db.collection('races').doc(raceId);
    return doc;
  } catch (error) {
    //console.log('ERROR in getRaceDetails', error);
    return error
  }
}

database.updatePlayerPercentage = async (raceId, userId, percentage) => {
  const raceDetails = await db.collection('races').doc(raceId).get();

  let players = [];
  players = raceDetails.data().players;
  const index = players.findIndex(p => p.id === userId)
  players[index].percentage = percentage;
  db.collection('races').doc(raceId).update({players})
}

export default database
