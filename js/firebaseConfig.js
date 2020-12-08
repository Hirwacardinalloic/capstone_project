 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDwlNtfOWclDNGrI6frzHXKPiipcAxaQWs",
    authDomain: "capstone-de6be.firebaseapp.com",
    databaseURL: "https://capstone-de6be.firebaseio.com",
    projectId: "capstone-de6be",
    storageBucket: "capstone-de6be.appspot.com",
    messagingSenderId: "806697156125",
    appId: "1:806697156125:web:d089c08590d38b63cf50f4",
    measurementId: "G-RV43JP4SCG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });