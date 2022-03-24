import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKzQQRGmZXuyd7gKnugfiXCs7B3gokq-Y",
    authDomain: "clone-c01ec.firebaseapp.com",
    projectId: "clone-c01ec",
    storageBucket: "clone-c01ec.appspot.com",
    messagingSenderId: "300506115986",
    appId: "1:300506115986:web:59fc0fe11a7e066d845b4b"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);


// Use these for db & auth
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }