import firebase from 'firebase'
import { smithedEmail, smithedPassword } from './config';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDX-vLCBhO8StKAxnpvQ2EW8lz3kzYn4Qk",
	authDomain: "mc-smithed.firebaseapp.com",
	projectId: "mc-smithed",
	storageBucket: "mc-smithed.appspot.com",
	messagingSenderId: "574184244682",
	appId: "1:574184244682:web:498d168c09b39e4f0d7b33",
	measurementId: "G-40SRKC35Z0"
})

firebaseApp.auth().signInWithEmailAndPassword(smithedEmail, smithedPassword).then( () => {
    console.log('Signed into database')
})
export const database = firebaseApp.database() 
