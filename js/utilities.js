const FPS = 60;

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
	const multiplier = player.collectedRedGems * 1.333;
	return Math.floor(baseScore * multiplier);
}

function scaleHUD() {
	const HUDwrap = document.getElementById('HUD-wrapper');
	const HUD = document.getElementById('HUD');
	const screenWidth = window.innerWidth;
	const scale = Math.min(screenWidth / 1024, 1);

	HUDwrap.style.transform = `scale(${scale})`;
}

window.addEventListener('load', scaleHUD);
window.addEventListener('resize', scaleHUD);

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

function showGameOverScreen() {
	const gameOverScreen = document.getElementById('game-over-screen');
	gameOverScreen.style.display = 'flex';
}

function hideGameOverScreen() {
	const gameOverScreen = document.getElementById('game-over-screen');
	gameOverScreen.style.display = 'none';
}

function hideStartScreen() {
	const startScreen = document.getElementById('start-screen');
	startScreen.style.display = 'none';
}
