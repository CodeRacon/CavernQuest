let isMuted = false;
let mainStory;
let lastPlayerPoisenedSound = 0;
let isGameOverSoundPlayed = false;
let isHovering = false;
let isDashing = false;
let allTomesFound = false;
let isAllTomesFoundPlayed = false;
let isVictory = false;
let isDead = false;

function muteAllSounds() {
	isMuted = true;
}

function unmuteAllSounds() {
	isMuted = false;
}

function playIntro() {
	const playIntroBtn = document.getElementById('play-intro-btn');

	if (!mainStory) {
		mainStory = new Audio('./audio/main-story.mp3');
		mainStory.volume = 0.65;
	}

	if (mainStory.paused) {
		mainStory.play();
		playIntroBtn.classList.add('outlined');
	} else {
		mainStory.pause();
		playIntroBtn.classList.remove('outlined');
	}
}

function playPotionFound() {
	const potionFoundAudio = new Audio('./audio/bottle.wav');
	potionFoundAudio.volume = isMuted ? 0 : 0.2;
	potionFoundAudio.play();
}

function playPotionUse() {
	const potionUseAudio = new Audio('./audio/use-potion.mp3');
	potionUseAudio.volume = isMuted ? 0 : 0.45;
	potionUseAudio.play();
}

function playMagicTomeFound() {
	const tomeFoundAudio = new Audio('./audio/quest-item.mp3');
	tomeFoundAudio.volume = isMuted ? 0 : 0.45;
	tomeFoundAudio.play();
}

function playGemCollected() {
	const gemCollectedAudio = new Audio('./audio/gem-collected.mp3');
	gemCollectedAudio.volume = isMuted ? 0 : 0.25;
	gemCollectedAudio.play();
}

function playBounceSound() {
	const bouncePlantAudio = new Audio('./audio/bounce.mp3');
	bouncePlantAudio.volume = isMuted ? 0 : 0.175;
	bouncePlantAudio.play();
}

function playPlayerHurt() {
	const playerHurtAudio = new Audio('./audio/player-hurt01.mp3');
	playerHurtAudio.volume = isMuted ? 0 : 0.175;
	playerHurtAudio.play();
}

function playPlayerHurtAlt() {
	const playerHurtAltAudio = new Audio('./audio/player-hurt02.mp3');
	playerHurtAltAudio.volume = isMuted ? 0 : 0.175;
	playerHurtAltAudio.play();
}

function playPlayerPoisened() {
	const timeStamp = Date.now();
	const playerPoisonedAudio = new Audio('./audio/got-poisoned.mp3');

	if (timeStamp - lastPlayerPoisenedSound > 4000) {
		playerPoisonedAudio.volume = isMuted ? 0 : 0.2;
		playerPoisonedAudio.play();
		lastPlayerPoisenedSound = timeStamp;
	}
}

function playSpellcast() {
	const playerSpellcastAudio = new Audio('./audio/spell-cast.mp3');
	playerSpellcastAudio.volume = isMuted ? 0 : 0.25;
	playerSpellcastAudio.play();
}

function playBlobFall() {
	const blobFallAudio = new Audio('./audio/sleepy-blob.wav');
	blobFallAudio.volume = isMuted ? 0 : 0.45;
	blobFallAudio.play();
}

function playMovingBlob01() {
	const movingBlob01Audio = new Audio('./audio/moving-blob01.mp3');
	movingBlob01Audio.volume = isMuted ? 0 : 0.35;
	setTimeout(() => {
		movingBlob01Audio.play();
	}, 750);
}

function playMovingBlob02() {
	const movingBlob02Audio = new Audio('./audio/moving-blob02.mp3');
	movingBlob02Audio.volume = isMuted ? 0 : 0.35;
	setTimeout(() => {
		movingBlob02Audio.play();
	}, 750);
}

function playMovingBlob03() {
	const movingBlob03Audio = new Audio('./audio/moving-blob03.mp3');
	movingBlob03Audio.volume = isMuted ? 0 : 0.35;
	setTimeout(() => {
		movingBlob03Audio.play();
	}, 750);
}

function playJump() {
	const jumpAudio = new Audio('./audio/jump.mp3');
	jumpAudio.volume = isMuted ? 0 : 0.35;
	jumpAudio.play();
}

function playHover() {
	if (!isHovering) {
		const hoverAudio = new Audio('./audio/hover.mp3');
		hoverAudio.volume = isMuted ? 0 : 0.15;
		hoverAudio.play();
		isHovering = true;
	}
}

function playDash() {
	if (!isDashing) {
		const dashAudio = new Audio('./audio/dash.mp3');
		dashAudio.volume = isMuted ? 0 : 0.15;
		dashAudio.play();
		isDashing = true;
	}
}

function playScrollFound() {
	const scrollFoundAudio = new Audio('./audio/scroll-found.mp3');
	scrollFoundAudio.volume = isMuted ? 0 : 0.35;
	scrollFoundAudio.play();
}

function playAllTomesFound() {
	if (!isAllTomesFoundPlayed) {
		const allTomesAudio = new Audio('./audio/all-tomes.mp3');
		allTomesAudio.volume = isMuted ? 0 : 0.35;
		allTomesAudio.play();
		isAllTomesFoundPlayed = true;
	}
}

function playQuestCompleted() {
	const questCompletedAudio = new Audio('./audio/quest-completed.mp3');
	questCompletedAudio.volume = isMuted ? 0 : 0.35;
	questCompletedAudio.play();
}

function playWellDone() {
	if (!isVictory) {
		const wellDoneAudio = new Audio('./audio/well-done.mp3');
		wellDoneAudio.volume = 0.65;
		wellDoneAudio.play();
		isVictory = true;
	}
}

function playGameOverSound() {
	const gameOverAudio = new Audio('./audio/game-over.mp3');
	gameOverAudio.volume = 0.15;
	if (!isGameOverSoundPlayed) {
		gameOverAudio.play();
		isGameOverSoundPlayed = true;
	}
}

let isCarryOnPlayed = false;

function playCarryOn() {
	if (!isCarryOnPlayed && isDead) {
		const carryOnAudio = new Audio('./audio/carry-on.mp3');
		isCarryOnPlayed = true;
		carryOnAudio.volume = 0.65;
		carryOnAudio.play();
	}
}

let heartbeatAudio;

function playHeartBeat() {
	if (!heartbeatAudio) {
		heartbeatAudio = new Audio('./audio/heartbeat.mp3');
		heartbeatAudio.volume = isMuted ? 0 : 0.75;
		heartbeatAudio.loop = true;
	}
	if (heartbeatAudio.paused) {
		heartbeatAudio.play();
	}
}

function stopHeartBeat() {
	if (heartbeatAudio && !heartbeatAudio.paused) {
		heartbeatAudio.pause();
		heartbeatAudio.currentTime = 0;
	}
}
