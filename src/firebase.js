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
const firebaseApp=  firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore()
// const auth = firebase.auth()

  export const socialLogin = async(selectedProvider)=>{
    let provider;
    const auth = firebase.auth();
    if(selectedProvider === 'facebook'){
        provider = new firebase.auth.FacebookAuthProvider();
    }
    if (selectedProvider === 'google'){
        provider = new firebase.auth.GoogleAuthProvider();
    }
    try {
        const result = await auth.signInWithPopup(provider);
        console.log(result);
        // if(result.additionalUserInfo.isNewUser){
        //     await setUserProfile(result.user)
        // }
    } catch (error) {
   
        console.log(error)
    }
}