// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDRrPG6jMG6-J7s16UUyFFZ7AaKFOWqwrc",
	authDomain: "docs-clone-5b59d.firebaseapp.com",
	projectId: "docs-clone-5b59d",
	storageBucket: "docs-clone-5b59d.appspot.com",
	messagingSenderId: "771850719314",
	appId: "1:771850719314:web:36fe1e46a4829905fa4f8b",
};

// Initialize Firebase
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export { db };
