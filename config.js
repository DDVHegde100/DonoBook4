import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyB32Fxu_x1wn2nUjbajod0_YHqetbTlZps",
  authDomain: "donobook-a5cb1.firebaseapp.com",
  projectId: "donobook-a5cb1",
  storageBucket: "donobook-a5cb1.appspot.com",
  messagingSenderId: "55434695957",
  appId: "1:55434695957:web:8113df71ee71cf6c27051c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
