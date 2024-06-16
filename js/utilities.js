const FPS = 60;
let isGameOverScreen = false;
let isWinningScreen = false;

/**
 * Checks for collision between two objects.
 * @param {Object} object1 - The first object to check for collision.
 * @param {Object} object1.position - The position of the first object.
 * @param {number} object1.position.x - The x-coordinate of the first object's position.
 * @param {number} object1.position.y - The y-coordinate of the first object's position.
 * @param {number} object1.width - The width of the first object.
 * @param {number} object1.height - The height of the first object.
 * @param {Object} object2 - The second object to check for collision.
 * @param {Object} object2.position - The position of the second object.
 * @param {number} object2.position.x - The x-coordinate of the second object's position.
 * @param {number} object2.position.y - The y-coordinate of the second object's position.
 * @param {number} object2.width - The width of the second object.
 * @param {number} object2.height - The height of the second object.
 * @returns {boolean} - True if the two objects are colliding, false otherwise.
 */
function collision({ object1, object2 }) {
	return (
		object1.position.y + object1.height >= object2.position.y &&
		object1.position.y <= object2.position.y + object2.height &&
		object1.position.x <= object2.position.x + object2.width &&
		object1.position.x + object1.width >= object2.position.x
	);
}

/**
 * Calculates the score for the player's collected blue gems, with a multiplier based on the number of collected red gems.
 * @returns {number} The calculated blue gem score.
 */
function calculateBlueGemScore() {
	const baseScore = player.collectedBlueGems;
	const multiplier = Math.max(player.collectedRedGems * 1.333, 1);
	return Math.floor(baseScore * multiplier);
}

/**
 * Scales the HUD (Heads-Up Display) wrapper element to fit the current screen width.
 * This function is called on page load and window resize events to ensure the HUD
 * remains properly scaled as the browser window size changes.
 */
function scaleHUD() {
	const HUDwrap = document.getElementById('HUD-wrapper');
	const screenWidth = window.innerWidth;
	const scale = Math.min(screenWidth / 1024, 1);

	HUDwrap.style.transform = `scale(${scale})`;
}

/**
 * Scales the size of the pause, winning, and game-over modals to fit the current window width.
 * This function is called on the 'load' and 'resize' events of the window to ensure the modals
 * are properly scaled as the window size changes.
 */
function scaleModals() {
	const pauseModal = document.getElementById('pause-screen');
	const winModal = document.getElementById('winning-screen');
	const gameOverModal = document.getElementById('game-over-screen');
	const screenWidth = window.innerWidth;
	const scale = Math.min(screenWidth / 1024, 1);

	pauseModal.style.transform = `scale(${scale})`;
	winModal.style.transform = `scale(${scale})`;
	gameOverModal.style.transform = `scale(${scale})`;
}

window.addEventListener('load', scaleHUD);
window.addEventListener('resize', scaleHUD);
window.addEventListener('load', scaleModals);
window.addEventListener('resize', scaleModals);

/**
 * Preloads a set of image URLs by creating new Image objects and setting their `src` property.
 * This ensures the images are cached and ready for use when needed.
 *
 * @param {string[]} urls - An array of image URLs to preload.
 */
function preloadImages(urls) {
	urls.forEach(function (url) {
		const img = new Image();
		img.src = url;
	});
}

/**
 * An array of file paths for various sprite images used in the game, including wizard animations,
 * plant enemies, collectables, and background elements.
 */
const spriteImages = [
	'img/wizard/magic-spell-left.png',
	'img/wizard/magic-spell-right.png',
	'img/wizard/Wizard-Fall-Left.png',
	'img/wizard/Wizard-Fall-Right.png',
	'img/wizard/wizard-hit-left.png',
	'img/wizard/wizard-hit-right.png',
	'img/wizard/Wizard-Idle-Left.png',
	'img/wizard/Wizard-Idle-Right.png',
	'img/wizard/Wizard-Jump-Left.png',
	'img/wizard/Wizard-Jump-Right.png',
	'img/wizard/Wizard-Walk-Left.png',
	'img/wizard/Wizard-Walk-Right.png',
	'img/wizard/wizard-dash-left.png',
	'img/wizard/wizard-dash-right.png',
	'img/plants/JumpPlant-frames.png',
	'img/plants/poison-plant.png',
	'img/plants/windy-plant.png',
	'img/plants/BluePlant.png',
	'img/enemies/SlimeBasic.png',
	'img/enemies/SlimeOrange.png',
	'img/collectables/Armor.png',
	'img/collectables/GemBlue.png',
	'img/collectables/GemRed.png',
	'img/collectables/blue-gem.png',
	'img/collectables/red-gem.png',
	'img/collectables/PotionBlue.png',
	'img/collectables/PotionGreen.png',
	'img/collectables/PotionRed.png',
	'img/collectables/PotionYellow.png',
	'img/collectables/Scroll.png',
	'img/collectables/TomeBlue.png',
	'img/collectables/TomeGreen.png',
	'img/collectables/TomeRed.png',
	'img/collectables/TomeYellow.png',
	'img/bg-map.jpg',
	'img/fg-map.png',
];

/**
 * Shows the start screen and hides the game panel.
 * Mutes all sounds, disables game controls, and disables the ESC event.
 * Resets the game state by setting `isGameOverSoundPlayed` to `false` and `isDead` to `false`.
 */
function showStartScreen() {
	const startScreen = document.getElementById('start-screen');
	const gamePanel = document.getElementById('game-panel');
	gamePanel.classList.replace('d-flex', 'd-none');
	startScreen.style.display = 'flex';
	isGameOverSoundPlayed = false;
	isDead = false;
	muteAllSounds();
	disableGameControls();
	disableESCevent();
	resetGame();
}

/**
 * Hides the start screen and shows the game panel, unmuteS all sounds, enables game controls
 * and ESC event, and plays the cavern background sound.
 */
function hideStartScreen() {
	const startScreen = document.getElementById('start-screen');
	const gamePanel = document.getElementById('game-panel');
	const manualBtn = document.getElementById('manual-btn');
	const storyBtn = document.getElementById('story-btn');

	gamePanel.classList.replace('d-none', 'd-flex');
	startScreen.style.display = 'none';
	isGameOverSoundPlayed = false;
	isDead = false;
	unmuteAllSounds();
	enableGameControls();
	enableESCevent();
	playCavernBG();
	if (manualBtn.classList.contains('active')) {
		toggleManualChapter();
	}
	if (storyBtn.classList.contains('active')) {
		toggleStoryChapter();
	}
}

/**
 * Displays the game-over screen, mutes all sounds, disables game controls and the ESC event,
 * and plays the game-over sound and carry on sound after a delay.
 */
function showGameOverScreen() {
	const gameOverScreen = document.getElementById('game-over-screen');
	const canvas = document.getElementById('canvas');
	isGameOverScreen = true;
	muteAllSounds();
	disableGameControls();
	disableESCevent();
	setTimeout(() => {
		canvas.classList.add('filtered');
		gameOverScreen.classList.replace('d-none', 'd-flex');
		gameOverScreen.classList.replace('fade-out', 'fade-in');
		playGameOverSound();
	}, 1000);
	setTimeout(() => {
		setTimeout(() => {
			playCarryOn();
		}, 3000);
	}, 2000);
}

/**
 * Hides the game-over screen and resets related state.
 * This function is called when the game-over screen needs to be hidden, such as
 * when the player starts a new game.
 * It removes the 'filtered' class from the canvas, hides the game-over screen,
 * stops the 'carry on' sound, and resets flags for game-over and 'carry on' sound playback.
 * It also re-enables the ESC event listener.
 */
function hideGameOverScreen() {
	const gameOverScreen = document.getElementById('game-over-screen');
	const canvas = document.getElementById('canvas');
	canvas.classList.remove('filtered');
	gameOverScreen.classList.replace('fade-in', 'fade-out');
	setTimeout(() => {
		gameOverScreen.classList.replace('d-flex', 'd-none');
	}, 200);
	stopCarryOn();
	isGameOverSoundPlayed = false;
	isCarryOnPlayed = false;
	enableESCevent();
}

/**
 * Displays the winning screen and performs related actions.
 * This function is called when the player fullfills all winning conditions.
 */
function showWinningScreen() {
	const winningScreen = document.getElementById('winning-screen');
	const canvas = document.getElementById('canvas');
	canvas.classList.add('filtered');
	winningScreen.classList.replace('d-none', 'd-flex');
	winningScreen.classList.replace('fade-out', 'fade-in');
	isWinningScreen = true;
	muteAllSounds();
	disableGameControls();
	disableESCevent();
	playQuestCompleted();
	setTimeout(() => {
		playWellDone();
	}, 3000);
}

/**
 * Hides the winning screen and resets related state.
 *
 * This function is responsible for hiding the winning screen, removing the
 * 'filtered' class from the canvas, and resetting the state of the 'wellDone'
 * and 'questCompleted' audio events. It also re-enables the ESC event.
 */
function hideWinningScreen() {
	const winningScreen = document.getElementById('winning-screen');
	const canvas = document.getElementById('canvas');
	canvas.classList.remove('filtered');
	winningScreen.classList.replace('fade-in', 'fade-out');
	setTimeout(() => {
		winningScreen.classList.replace('d-flex', 'd-none');
	}, 200);
	stopWellDone();
	isWellDonePlayed = false;
	isQuestCompletedPlayed = false;
	enableESCevent();
}

/**
 * Displays the pause screen and applies a filter to the canvas.
 */
function showPauseScreen() {
	const pauseScreen = document.getElementById('pause-screen');
	const canvas = document.getElementById('canvas');
	canvas.classList.add('filtered');
	pauseScreen.classList.replace('d-none', 'd-flex');
	pauseScreen.classList.replace('fade-out', 'fade-in');
}

/**
 * Hides the pause screen and removes the filtered effect from the canvas.
 */
function hidePauseScreen() {
	const pauseScreen = document.getElementById('pause-screen');
	const canvas = document.getElementById('canvas');
	canvas.classList.remove('filtered');
	pauseScreen.classList.replace('fade-in', 'fade-out');
	setTimeout(() => {
		pauseScreen.classList.replace('d-flex', 'd-none');
	}, 200);
}

/**
 * Toggles the visibility of the story chapter and updates the state of the story and manual buttons.
 * When the story chapter is visible, the story button is active and the manual button is inactive.
 * When the story chapter is hidden, the story button is inactive and the manual button can be active.
 * This function also toggles the visibility of the quick start section.
 */
function toggleStoryChapter() {
	const storyChapter = document.getElementById('story');
	const storyBtn = document.getElementById('story-btn');
	const manualBtn = document.getElementById('manual-btn');
	const leaderboard = document.getElementById('leaderboard');

	if (manualBtn.classList.contains('active')) {
		toggleManualChapter();
	}
	if (storyChapter.classList.contains('fade-in')) {
		storyBtn.classList.replace('active', 'inactive');
		storyChapter.classList.replace('fade-in', 'fade-out');
		setTimeout(() => {
			storyChapter.classList.replace('d-flex', 'd-none');
		}, 200);
		leaderboard.classList.toggle('d-none');
	} else {
		storyBtn.classList.replace('inactive', 'active');
		storyChapter.classList.replace('fade-out', 'fade-in');
		setTimeout(() => {
			storyChapter.classList.replace('d-none', 'd-flex');
		}, 0);
		leaderboard.classList.toggle('d-none');
	}
	toggleQuickStart();
}

/**
 * Toggles the visibility of the manual chapter and updates the state of the story and manual buttons.
 * When the manual chapter is visible, the manual button is active and the manual button is inactive.
 * When the manual chapter is hidden, the manual button is inactive and the manual button can be active.
 * This function also toggles the visibility of the quick start section.
 */
function toggleManualChapter() {
	const manualChapter = document.getElementById('manual');
	const manualBtn = document.getElementById('manual-btn');
	const storyBtn = document.getElementById('story-btn');
	const leaderboard = document.getElementById('leaderboard');

	if (storyBtn.classList.contains('active')) {
		toggleStoryChapter();
	}
	if (manualChapter.classList.contains('fade-in')) {
		manualBtn.classList.replace('active', 'inactive');
		manualChapter.classList.replace('fade-in', 'fade-out');
		setTimeout(() => {
			manualChapter.classList.replace('d-flex', 'd-none');
		}, 200);
		leaderboard.classList.toggle('d-none');
	} else {
		manualBtn.classList.replace('inactive', 'active');
		manualChapter.classList.replace('fade-out', 'fade-in');
		setTimeout(() => {
			manualChapter.classList.replace('d-none', 'd-flex');
		}, 0);
		leaderboard.classList.toggle('d-none');
	}
	toggleQuickStart();
}

/**
 * Toggles the visibility of the quick start note based on the state of the manual and story buttons.
 * When the manual or story button is active, the quick start section is hidden.
 * When both the manual and story buttons are inactive, the quick start section is shown.
 */
function toggleQuickStart() {
	const quickStart = document.getElementById('quick-start');
	const manualBtn = document.getElementById('manual-btn');
	const storyBtn = document.getElementById('story-btn');
	if (
		manualBtn.classList.contains('active') ||
		storyBtn.classList.contains('active')
	) {
		setTimeout(() => {
			quickStart.classList.replace('d-block', 'd-none');
		}, 200);
	} else {
		setTimeout(() => {
			quickStart.classList.replace('d-none', 'd-block');
		}, 200);
	}
}
