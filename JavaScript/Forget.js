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
  //jquery
    $("#btn-resetPassword").click(function()
    {
    var auth = firebase.auth();
    var email = $("#email").val();
    if(email != "")
    {
    auth.sendPasswordResetEmail(email).then(function(){
    window.alert("Reset Password link has been sent to your email address ,please verify");
    window.location = 'Login.html';
    })
    .catch(function(error)
    {
    var errorCode = error.code;
    var errorMessage =error.message;
  
    console.log(errorCode);
    console.log(errorMessage);
  
    window.alert("Message :" + errorMessage);
    });
    }
    else{
    window.alert("please write your email id");
    }
    });
    