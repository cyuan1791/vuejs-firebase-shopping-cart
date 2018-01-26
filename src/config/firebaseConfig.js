import firebase from 'firebase'


const config = {
	// apiKey: "AIzaSyAvE8yZMbjt6Y799fAHFOOJ-WhjdwGfK6A",
	// authDomain: "vuejs-shopping-cart.firebaseapp.com",
	// databaseURL: "https://vuejs-shopping-cart.firebaseio.com/",
  apiKey: "AIzaSyCmN4hwCfPjjQ2spsO1UxH1aOfvmkq2yR8",
  authDomain: "auth-test-c7cdb.firebaseapp.com",
  databaseURL: "https://auth-test-c7cdb.firebaseio.com",
  projectId: "auth-test-c7cdb",
  storageBucket: "auth-test-c7cdb.appspot.com",
  messagingSenderId: "958475560180"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	  	console.log("User log in success", user);
	    func(true, user)
	  } else {
	  	console.log("User log in failed", user);
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	});
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;