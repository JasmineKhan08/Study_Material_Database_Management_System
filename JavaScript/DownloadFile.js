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

var auth = firebase.auth();
            var storageRef = firebase.storage().ref();
            
            function generateDownloadLink() {
                var fileName = document.getElementById("name").value;
                storageRef.child("SMDBMS/Semester-II IT/" + fileName).getDownloadURL().then(function (url) {
                    console.log("file availaible at",url);
                    document.getElementById('linkbox').innerHTML = '<a href="' + url + '">' + url + '</a>';
                }).catch(function (error) {
                    console.log(error);
                    document.getElementById('linkbox').innerHTML = error.code;
                });
            }
            