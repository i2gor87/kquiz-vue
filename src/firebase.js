// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDsHv5nlWU2rnNl29HLVL6rVmrVUwbYIgo",
//     authDomain: "kquiz-bee75.firebaseapp.com",
//     projectId: "kquiz-bee75",
//     storageBucket: "kquiz-bee75.appspot.com",
//     messagingSenderId: "899017681308",
//     appId: "1:899017681308:web:123d878e99f2e772578059",
//     measurementId: "G-M59WF0GVNG"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyDsHv5nlWU2rnNl29HLVL6rVmrVUwbYIgo',
  authDomain: 'kquiz-bee75.firebaseapp.com',
  databaseURL: 'https://kquiz-bee75-default-rtdb.firebaseio.com/',
  projectId: 'kquiz-bee75',
  storageBucket: 'kquiz-bee75.appspot.com',
  messagingSenderId: '899017681308',
  appId: '1:899017681308:web:123d878e99f2e772578059',
  measurementId: 'G-M59WF0GVNG'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const testsCollection = db.collection('tests')
const paymentsCollection = db.collection('payments')
// const recordsCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  testsCollection,
  paymentsCollection
}