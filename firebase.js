import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0F5DwkL7-6lXbNnZEacjJn0K6gPj7FYs",
  authDomain: "signal-clone-yt-build-85681.firebaseapp.com",
  projectId: "signal-clone-yt-build-85681",
  storageBucket: "signal-clone-yt-build-85681.appspot.com",
  messagingSenderId: "289309199187",
  appId: "1:289309199187:web:d39430f1e6dc06077fafa6"
};



let app;

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
};

const db = app.firestore();
const auth = firebase.auth();

export { db, auth};