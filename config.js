import firebase from 'firebase';
require('@firebase/firestore')
//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
  //   https://firebase.google.com/docs/web/setup#available-libraries -->

//<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDzZDT1G7KZoGY1X_ZnzpGb00DMGVBUdYY",
    authDomain: "book-santa-app-59cd2.firebaseapp.com",
    projectId: "book-santa-app-59cd2",
    storageBucket: "book-santa-app-59cd2.appspot.com",
    messagingSenderId: "922622393530",
    appId: "1:922622393530:web:fd8e5b895799615701d683"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//</script>
/*var firebaseConfig = {
    apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
    authDomain: "book-santa-app.firebaseapp.com",
    databaseURL: "https://book-santa-app.firebaseio.com",
    projectId: "book-santa-app",
    storageBucket: "book-santa-app.appspot.com",
    messagingSenderId: "69634746716",
    appId: "1:69634746716:web:6fbbfc110fb4475365f999",
    measurementId: "G-DLB7XC0JPL"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/

export default firebase.firestore();









