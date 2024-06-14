/**
 * Configures the Firebase SDK with the necessary credentials and settings.
 * This configuration object is used to initialize the Firebase app and connect
 * to the appropriate Firebase project.
 *
 * @type {Object}
 * @property {string} apiKey - The API key for the Firebase project.
 * @property {string} authDomain - The authentication domain for the Firebase project.
 * @property {string} projectId - The project ID of the Firebase project.
 * @property {string} storageBucket - The storage bucket for the Firebase project.
 * @property {string} messagingSenderId - The messaging sender ID for the Firebase project.
 * @property {string} appId - The app ID for the Firebase project.
 */
const firebaseConfig = {
	// config-data goes here
};

/**
 * Initializes the Firebase app with the provided configuration.
 * This function must be called before any other Firebase SDK methods can be used.
 */
firebase.initializeApp(firebaseConfig);

/**
 * Gets a reference to the Firestore database instance.
 * @returns {firebase.firestore.Firestore} A reference to the Firestore database instance.
 */
const db = firebase.firestore();

/**
 * Exports a reference to the Firestore database instance.
 * This reference can be used to interact with the Firestore database, such as
 * reading and writing data.
 */
export { db };
