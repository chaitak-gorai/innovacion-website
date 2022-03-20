// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBKuX5mWSFzKvwwNz5xJC8C5shYc2UbRXw',
  authDomain: 'tesjdfk.firebaseapp.com',
  projectId: 'tesjdfk',
  storageBucket: 'tesjdfk.appspot.com',
  messagingSenderId: '100394341478',
  appId: '1:100394341478:web:3fd4843d5ebd8ff04409a7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

//signup function
async function signUp() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var name = document.getElementById('name');
  var year = document.getElementById('year');
  var institute = document.getElementById('institute');

  try {
    const result = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    console.log(result);

    // Add a new document in collection "cities"
    alert('SignUp Successfully');
    await db.collection('user').doc(name.value).set({
      email: email.value,
      password: password.value,
      name: name.value,
      institute: institute.value,
      year: year.value,
    });

    console.log('doc');
  } catch (err) {
    console.log(err);
  }
}

//signIN function
// function signIn() {
//   var remail = document.getElementById('username');
//   var rpassword = document.getElementById('passwords');
//   console.log(remail.value);

//   const promise = auth.signInWithEmailAndPassword(
//     remail.value,
//     rpassword.value
//   );
//   console.log(promise);
// }
function signIn() {
  var email = document.getElementById('username');
  var password = document.getElementById('passwords');
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  alert('Logged in successfully, Welcome :' + email.value);
  promise.catch((e) => alert(e.message));
}
//signOut

function signOut() {
  auth.signOut();
  alert('SignOut Successfully from System');
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    alert('Active user ' + email);
  } else {
    alert('No Active user Found');
  }
});
