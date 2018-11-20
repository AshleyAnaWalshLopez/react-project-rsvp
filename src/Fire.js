import firebase from 'firebase'
// Initialize Firebase
var config = {
   apiKey: "AIzaSyCrUSd0rVbEGBr5IKDSI1FczFyy9M2lnaY",
   authDomain: "wedding-guest-list-a916c.firebaseapp.com",
   databaseURL: "https://wedding-guest-list-a916c.firebaseio.com",
   projectId: "wedding-guest-list-a916c",
   storageBucket: "",
   messagingSenderId: "1078915009916"
 };
var fire = firebase.initializeApp(config);
export default fire;
