import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYG6Mi5wTVsmuxX9M-e01bKGWwEDuGOFU",
    authDomain: "mymoney-bbe30.firebaseapp.com",
    projectId: "mymoney-bbe30",
    storageBucket: "mymoney-bbe30.appspot.com",
    messagingSenderId: "293269206695",
    appId: "1:293269206695:web:b2b1c202fc31fdfb244d82"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init service

  const projectFirestore= firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore , projectAuth , timestamp }