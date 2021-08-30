function Toggle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
  }
  
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
    const loginBtn = document.querySelector('#login-btn');
      loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          window.alert("sign in successfull");
          window.location = 'Admin.html';
    
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password'){
            alert('Get the password right');
          } else {
            alert(errorMessage);
          }
        });
      }
      );
      
  