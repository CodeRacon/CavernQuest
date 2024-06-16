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
 * Loads the leaderboard data from Firestore and populates the leaderboard table in the DOM.
 * The leaderboard is ordered by the player's score in descending order, and the top 10 players are displayed.
 * Each player's name, score, blue gems, red gems, and the date they were added to the leaderboard are displayed.
 * The top 3 players are highlighted with a special CSS class.
 */
function loadLeaderboard() {
	const leaderboardBody = document.getElementById('leaderboard-body');
	leaderboardBody.innerHTML = '';

	if (leaderboardBody) {
		db.collection('leaderboard')
			.orderBy('score', 'desc')
			.limit(10)
			.get()
			.then((querySnapshot) => {
				let rank = 1;
				querySnapshot.forEach((doc) => {
					const data = doc.data();

					const row = document.createElement('tr');
					const medalImgSrc = getMedallImage(rank);
					row.innerHTML = /*html*/ `						
                        <td ${setLeaderStyle(rank)} >${
						medalImgSrc ? `<img src="${medalImgSrc}" alt="Medallion">` : ''
					} <span>${data.name} </span></td>

            <td ${setLeaderStyle(rank)} >${data.score}</td>
            <td>${data.blueGems}</td>
            <td>${data.redGems}</td>
            <td>${data.date}</td>
          `;

					leaderboardBody.appendChild(row);
					rank++;
				});
			});
	}
}

/**
 * Sets a CSS class on a table row based on the player's rank in the leaderboard.
 * If the player's rank is 1, 2, or 3, the row will have the "highlight" class applied.
 * This is used to visually distinguish the top 3 players on the leaderboard.
 *
 * @param {number} rank - The player's rank in the leaderboard, from 1 to 10.
 * @returns {string} The CSS class to apply to the table row, or an empty string if the rank is 4 or higher.
 */
function setLeaderStyle(rank) {
	if (rank < 4) {
		return 'class="highlight"';
	}
}

/**
 * Gets the appropriate medal image source based on the player's rank in the leaderboard.
 *
 * @param {number} rank - The player's rank in the leaderboard, from 1 to 10.
 * @returns {string} The file path to the medal image, or an empty string if the rank is 4 or higher.
 */
function getMedallImage(rank) {
	let medallImgSrc;
	switch (rank) {
		case 1:
			medallImgSrc = 'img/intro/gold-medal.png';
			break;
		case 2:
			medallImgSrc = 'img/intro/silver-medal.png';
			break;
		case 3:
			medallImgSrc = 'img/intro/bronze-medal.png';
			break;
		default:
			medallImgSrc = '';
	}
	return medallImgSrc;
}

/**
 * Adds the current player's information to the leaderboard in the database.
 * This function retrieves the player's name, total score, blue gem amount, and red gem amount
 * from the DOM, creates a new leaderboard entry in the database with this information,
 * and then calls the `loadLeaderboard()` function to update the leaderboard display.
 */
function claimLeaderBoardSpot() {
	const playerName = document.getElementById('name-input').value.trim();
	const totalScore = document.getElementById('total-score').textContent;
	const blueGemAmount = document.getElementById('blue-gem-amount').textContent;
	const redGemAmount = document.getElementById('red-gem-amount').textContent;
	const date = new Date();

	db.collection('leaderboard')
		.add({
			name: playerName,
			score: +totalScore,
			blueGems: blueGemAmount,
			redGems: redGemAmount,
			date: date.toLocaleDateString(),
		})
		.then((docRef) => {
			console.log('Document written with ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error adding document: ', error);
		});

	loadLeaderboard();
}

export { loadLeaderboard, claimLeaderBoardSpot };
