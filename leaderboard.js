/**
 * Imports the Firebase Firestore database instance from the './firebase.js' module.
 * This database instance is used to interact with the 'leaderboard' collection in Firestore.
 */
import { db } from './firebaseConfig.js';

/**
 * Retrieves all documents from the 'leaderboard' collection in Firestore and logs their data to the console.
 */
db.collection('leaderboard')
	.get()
	.then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
		});
	});

/**
 * Adds a new document to the 'leaderboard' collection in Firestore with the provided name and score.
 *
 * @param {string} name - The name of the player to add to the leaderboard.
 * @param {number} score - The score of the player to add to the leaderboard.
 * @returns {Promise<DocumentReference>} - A Promise that resolves to the DocumentReference of the newly added document.
 */
db.collection('leaderboard')
	.add({
		name: 'Micha',
		score: 1000,
	})
	.then((docRef) => {
		console.log('Document written with ID: ', docRef.id);
	})
	.catch((error) => {
		console.error('Error adding document: ', error);
	});
