var firebaseConfig = {
    apiKey: "AIzaSyCFbmb2hqPYwstrQbIaJiX4ZOAbNgoDOqM",
    authDomain: "smdmsdb.firebaseapp.com",
    databaseURL: "https://smdmsdb-default-rtdb.firebaseio.com",
    projectId: "smdmsdb",
    storageBucket: "smdmsdb.appspot.com",
    messagingSenderId: "1077975093406",
    appId: "1:1077975093406:web:bc4853a1fa5e092877ab8f",
    measurementId: "G-XE74T36VGR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//sign out
const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().signOut().then(()=>{
    window.alert("Hope to see you soon!!");
    window.location='about.html';
  });
  
});