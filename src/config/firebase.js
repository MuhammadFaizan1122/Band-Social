import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'


var firebaseConfig = {
       apiKey: "AIzaSyCMN5SVMNleo1koC-McS-HmR22fpTh7IfQ",
       authDomain: "bandsocial-36e72.firebaseapp.com",
       projectId: "bandsocial-36e72",
       storageBucket: "bandsocial-36e72.appspot.com",
       messagingSenderId: "723979010932",
       appId: "1:723979010932:web:0de3f8c4ebfc07d5e56221",
       measurementId: "G-S3B48GYFFV"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
