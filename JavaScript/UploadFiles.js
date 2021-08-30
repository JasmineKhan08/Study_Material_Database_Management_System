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

  function handleFileSelect(evt) {
     // evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];

      var metadata = {
          'contentType': file.type
      };

      // Push to child path.
      // [START oncomplete]
      storageRef.child('SMDBMS/5Uploaded_Files/' + file.name).put(file, metadata).then(function (snapshot) {
          console.log('Uploaded', snapshot.totalBytes, 'bytes.');
          console.log('File metadata:', snapshot.metadata);
          // Let's get a download URL for the file.
          snapshot.ref.getDownloadURL().then(function (url) {
              window.alert('File available at ' + url);
              // [START_EXCLUDE]
              document.getElementById('linkbox').innerHTML = '<a href="' + url + '">' + url + '</a>';
              // [END_EXCLUDE]
          });
      }).catch(function (error) {
          // [START onfailure]
          console.error('Upload failed:', error);
          // [END onfailure]
      });
      // [END oncomplete]
  }

  window.onload = function () {
      document.getElementById('file').addEventListener('change', handleFileSelect, false);
      document.getElementById('file');

      /*auth.onAuthStateChanged(function (user) {
          if (user) {
              console.log('Anonymous user signed-in.', user);
              document.getElementById('file').disabled = false;
          } else {
              console.log('There was no anonymous session. Creating a new anonymous user.');
              // Sign the user in anonymously since accessing Storage requires the user to be authorized.
              auth.signInAnonymously().catch(function (error) {
                  if (error.code === 'auth/operation-not-allowed') {
                      window.alert('Anonymous Sign-in failed. Please make sure that you have enabled anonymous ' +
                              'sign-in on your Firebase project.');
                  }
              });
          }
      });
  }*/
}