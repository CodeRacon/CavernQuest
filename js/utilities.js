const FPS = 60;
let isGameOverScreen = false;

function collision({ object1, object2 }) {
	return (
		object1.position.y + object1.height >= object2.position.y &&
		object1.position.y <= object2.position.y + object2.height &&
		object1.position.x <= object2.position.x + object2.width &&
		object1.position.x + object1.width >= object2.position.x
	);
}

function calculateBlueGemScore() {
	const baseScore = player.collectedBlueGems;
	const multiplier = Math.max(player.collectedRedGems * 1.333, 1);
	return Math.floor(baseScore * multiplier);
}

function scaleHUD() {
	const HUDwrap = document.getElementById('HUD-wrapper');
	const screenWidth = window.innerWidth;
	const scale = Math.min(screenWidth / 1024, 1);

	HUDwrap.style.transform = `scale(${scale})`;
}

window.addEventListener('load', scaleHUD);
window.addEventListener('resize', scaleHUD);

function preloadImages(urls) {
	urls.forEach(function (url) {
		const img = new Image();
		img.src = url;
	});
}

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

function showStartScreen() {
	const startScreen = document.getElementById('start-screen');
	const gamePanel = document.getElementById('game-panel');
	gamePanel.classList.replace('d-flex', 'd-none');
	startScreen.style.display = 'flex';
	isGameOverSoundPlayed = false;
	isDead = false;
	muteAllSounds();
	disableGameControls();
}

function hideStartScreen() {
	const startScreen = document.getElementById('start-screen');
	const gamePanel = document.getElementById('game-panel');
	gamePanel.classList.replace('d-none', 'd-flex');
	startScreen.style.display = 'none';
	isGameOverSoundPlayed = false;
	isDead = false;
	unmuteAllSounds();
	enableGameControls();
	playCavernBG();
}

function showGameOverScreen() {
	console.log('is called!');
	isGameOverScreen = true;

	const gameOverScreen = document.getElementById('game-over-screen');
	const canvas = document.getElementById('canvas');
	muteAllSounds();
	disableGameControls();
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

function hideGameOverScreen() {
	console.log('is called!');
	isGameOverScreen = false;
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
}

function showWinningScreen() {
	const winningScreen = document.getElementById('winning-screen');
	const canvas = document.getElementById('canvas');
	canvas.classList.add('filtered');
	winningScreen.classList.replace('d-none', 'flex');
	winningScreen.classList.replace('fade-out', 'fade-in');
	muteAllSounds();
	playQuestCompleted();
	setTimeout(() => {
		playWellDone();
	}, 3000);
	disableGameControls();
}

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
}

function toggleStoryChapter() {
	const storyChapter = document.getElementById('story');
	const storyBtn = document.getElementById('story-btn');
	const manualBtn = document.getElementById('manual-btn');

	if (manualBtn.classList.contains('active')) {
		toggleManualChapter();
	}
	if (storyChapter.classList.contains('fade-in')) {
		storyBtn.classList.replace('active', 'inactive');
		storyChapter.classList.replace('fade-in', 'fade-out');
		setTimeout(() => {
			storyChapter.classList.replace('d-flex', 'd-none');
		}, 200);
	} else {
		storyBtn.classList.replace('inactive', 'active');
		storyChapter.classList.replace('fade-out', 'fade-in');
		setTimeout(() => {
			storyChapter.classList.replace('d-none', 'd-flex');
		}, 0);
	}
	toggleQuickStart();
}

function toggleManualChapter() {
	const manualChapter = document.getElementById('manual');
	const manualBtn = document.getElementById('manual-btn');
	const storyBtn = document.getElementById('story-btn');

	if (storyBtn.classList.contains('active')) {
		toggleStoryChapter();
	}
	if (manualChapter.classList.contains('fade-in')) {
		manualBtn.classList.replace('active', 'inactive');
		manualChapter.classList.replace('fade-in', 'fade-out');
		setTimeout(() => {
			manualChapter.classList.replace('d-flex', 'd-none');
		}, 200);
	} else {
		manualBtn.classList.replace('inactive', 'active');
		manualChapter.classList.replace('fade-out', 'fade-in');
		setTimeout(() => {
			manualChapter.classList.replace('d-none', 'd-flex');
		}, 0);
	}
	toggleQuickStart();
}

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
