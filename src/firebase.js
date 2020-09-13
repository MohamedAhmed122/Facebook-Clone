import firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyA52DiP1OZ_TF2m5WZhnSvMkwxk9I0V9zk",
    authDomain: "facebook-clone-490bc.firebaseapp.com",
    databaseURL: "https://facebook-clone-490bc.firebaseio.com",
    projectId: "facebook-clone-490bc",
    storageBucket: "facebook-clone-490bc.appspot.com",
    messagingSenderId: "950215716290",
    appId: "1:950215716290:web:d257bd6ba91a874280ba5b",
    measurementId: "G-WT89DL1ZVJ"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db =firebaseApp.firestore()

export default firebase;
