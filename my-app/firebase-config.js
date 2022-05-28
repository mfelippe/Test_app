// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2RcTZDEf9yk6r7MbQlHxlmOWjl6TRA-A",
  authDomain: "ysp-interview.firebaseapp.com",
  projectId: "ysp-interview",
  storageBucket: "ysp-interview.appspot.com",
  messagingSenderId: "580185867210",
  appId: "1:580185867210:web:0a8b8626f34d4bf04fc533",
  measurementId: "G-Y12QZNDB4N",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
