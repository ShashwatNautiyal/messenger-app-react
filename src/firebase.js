import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDiWt371nsx8Un8cqXQ68GjkfSq6TuNx3c',
	authDomain: 'messenger-app-54d7e.firebaseapp.com',
	projectId: 'messenger-app-54d7e',
	storageBucket: 'messenger-app-54d7e.appspot.com',
	messagingSenderId: '793184567625',
	appId: '1:793184567625:web:893f956002d30ca5ca1a98',
	measurementId: 'G-6QZDQX258F',
});

const db = firebaseApp.firestore();

export default db;
