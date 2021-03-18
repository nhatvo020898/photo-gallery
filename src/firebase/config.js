import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSy-xoxk7XwcthskIoE-vM7FUPLnUjA2U",
    authDomain: "nhat-firegram.firebaseapp.com",
    projectId: "nhat-firegram",
    storageBucket: "nhat-firegram.appspot.com",
    messagingSenderId: "231416890327",
    appId: "1:231416890327:web:9c847c765a0626dc7d8192"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }