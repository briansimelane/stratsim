import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQPx5eDHCqWVPoAye_kp_OzopE8LdgEg",
  authDomain: "stratsim-b44b2.firebaseapp.com",
  projectId: "stratsim-b44b2",
  storageBucket: "stratsim-b44b2.appspot.com",
  messagingSenderId: "460468012242",
  appId: "1:460468012242:web:b4302530b9c4d107df990b",
  measurementId: "G-3ZWYY3QD4G"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firebase services
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }