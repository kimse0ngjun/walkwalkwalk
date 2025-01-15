import firebase from 'firebase/app';
import 'firebase/auth';

const googleProvider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(googleProvider).then(result => {
    const idToken = result.user.getIdToken();  // Firebase ID 토큰
}).catch(error => {
    console.error(error);
});
