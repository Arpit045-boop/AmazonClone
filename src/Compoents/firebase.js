// import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdKfWdyL2w18a5O8TihmepCLNkFde9P_U",
  authDomain: "clone-65f15.firebaseapp.com",
  projectId: "clone-65f15",
  storageBucket: "clone-65f15.appspot.com",
  messagingSenderId: "567829968692",
  appId: "1:567829968692:web:b38a420c7d16bfe5089761",
  measurementId: "G-JW5W645DKM",
});

// const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };






// npm install - g firebase - tools