// Change the type of input to password or text
function Toggle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
  }

  // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    //Reference for form collection(3)
let formMessage = firebase.database().ref('register');



//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let college_ID = document.querySelector('#college_ID').value;

  //send message values
  sendMessage(name, email,college_ID);
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.alert("REGISTERED SUCCESSULLY!!");
      window.location = 'AdminLogin.html'; //After successful login, user will be redirected to home.html
    }
  });
}

//Send Message to Firebase(4)

function sendMessage(name, email, college_ID) {
  firebase.database().ref('Teacher Details/'+college_ID).set({
    name: name,
    email: email,
    college_ID: college_ID
  });
}