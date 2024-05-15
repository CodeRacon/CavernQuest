let isMuted = false;
let mainStory;
let lastPlayerPoisenedSound = 0;

let isGameOverSoundPlayed = false;
let isCarryOnPlayed = false;

let isQuestCompletedPlayed = false;
let isWellDonePlayed = false;

let isHovering = false;
let isDashing = false;
let allTomesFound = false;
let isAllTomesFoundPlayed = false;

let isQuestCompleted = false;
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

function playCavernBG() {
	if (!isMuted) {
		const cavernBGAudio = new Audio('./audio/cavern-bg-sound.mp3');
		cavernBGAudio.volume = 0.075;
		cavernBGAudio.play();
		cavernBGAudio.loop = true;
	}
}

function playPotionFound() {
	if (!isMuted) {
		const potionFoundAudio = new Audio('./audio/bottle.wav');
		potionFoundAudio.volume = 0.2;
		potionFoundAudio.play();
	}
}

function playPotionUse() {
	if (!isMuted) {
		const potionUseAudio = new Audio('./audio/use-potion.mp3');
		potionUseAudio.volume = 0.35;
		potionUseAudio.play();
	}
}

function playMagicTomeFound() {
	if (!isMuted) {
		const tomeFoundAudio = new Audio('./audio/quest-item.mp3');
		tomeFoundAudio.volume = 0.45;
		tomeFoundAudio.play();
	}
}

function playGemCollected() {
	if (!isMuted) {
		const gemCollectedAudio = new Audio('./audio/gem-collected.mp3');
		gemCollectedAudio.volume = 0.25;
		gemCollectedAudio.play();
	}
}

function playBounceSound() {
	if (!isMuted) {
		const bouncePlantAudio = new Audio('./audio/bounce.mp3');
		bouncePlantAudio.volume = 0.175;
		bouncePlantAudio.play();
	}
}

function playPlayerHurt() {
	if (!isMuted) {
		const playerHurtAudio = new Audio('./audio/player-hurt01.mp3');
		playerHurtAudio.volume = 0.175;
		playerHurtAudio.play();
	}
}

function playPlayerHurtAlt() {
	if (!isMuted) {
		const playerHurtAltAudio = new Audio('./audio/player-hurt02.mp3');
		playerHurtAltAudio.volume = 0.175;
		playerHurtAltAudio.play();
	}
}

function playPlayerPoisened() {
	if (!isMuted) {
		const timeStamp = Date.now();
		const playerPoisonedAudio = new Audio('./audio/got-poisoned.mp3');

		if (timeStamp - lastPlayerPoisenedSound > 4000) {
			playerPoisonedAudio.volume = 0.2;
			playerPoisonedAudio.play();
			lastPlayerPoisenedSound = timeStamp;
		}
	}
}

function playSpellcast() {
	if (!isMuted) {
		const playerSpellcastAudio = new Audio('./audio/spell-cast.mp3');
		playerSpellcastAudio.volume = 0.25;
		playerSpellcastAudio.play();
	}
}

function playBlobFall() {
	if (!isMuted) {
		const blobFallAudio = new Audio('./audio/sleepy-blob.wav');
		blobFallAudio.volume = 0.25;
		blobFallAudio.play();
	}
}

function playMovingBlob01() {
	if (!isMuted) {
		const movingBlob01Audio = new Audio('./audio/moving-blob01.mp3');
		movingBlob01Audio.volume = 0.35;
		setTimeout(() => {
			movingBlob01Audio.play();
		}, 750);
	}
}

function playMovingBlob02() {
	if (!isMuted) {
		const movingBlob02Audio = new Audio('./audio/moving-blob02.mp3');
		movingBlob02Audio.volume = 0.35;
		setTimeout(() => {
			movingBlob02Audio.play();
		}, 750);
	}
}

function playMovingBlob03() {
	if (!isMuted) {
		const movingBlob03Audio = new Audio('./audio/moving-blob03.mp3');
		movingBlob03Audio.volume = 0.35;
		setTimeout(() => {
			movingBlob03Audio.play();
		}, 750);
	}
}

function playJump() {
	if (!isMuted) {
		const jumpAudio = new Audio('./audio/jump.mp3');
		jumpAudio.volume = 0.35;
		jumpAudio.play();
	}
}

function playHover() {
	if (!isMuted) {
		if (!isHovering) {
			const hoverAudio = new Audio('./audio/hover.mp3');
			hoverAudio.volume = 0.15;
			hoverAudio.play();
			isHovering = true;
		}
	}
}

function playDash() {
	if (!isMuted) {
		if (!isDashing) {
			const dashAudio = new Audio('./audio/dash.mp3');
			dashAudio.volume = 0.15;
			dashAudio.play();
			isDashing = true;
		}
	}
}

function playScrollFound() {
	if (!isMuted) {
		const scrollFoundAudio = new Audio('./audio/scroll-found.mp3');
		scrollFoundAudio.volume = 0.35;
		scrollFoundAudio.play();
	}
}

function playAllTomesFound() {
	if (!isMuted) {
		if (!isAllTomesFoundPlayed) {
			const allTomesAudio = new Audio('./audio/all-tomes.mp3');
			allTomesAudio.volume = 0.35;
			allTomesAudio.play();
			isAllTomesFoundPlayed = true;
		}
	}
}

function playQuestCompleted() {
	const questCompletedAudio = new Audio('./audio/winning.mp3');
	questCompletedAudio.volume = 0.35;
	if (isQuestCompleted && !isQuestCompletedPlayed) {
		questCompletedAudio.play();
		isQuestCompletedPlayed = true;
	}
}

let wellDoneAudio;

function playWellDone() {
	if (!wellDoneAudio) {
		wellDoneAudio = new Audio('./audio/well-done.mp3');
		wellDoneAudio.volume = 0.55;
	}
	if (!isWellDonePlayed && isQuestCompletedPlayed) {
		wellDoneAudio.play();
		isWellDonePlayed = true;
	}
}

function stopWellDone() {
	if (wellDoneAudio) {
		wellDoneAudio.pause();
		wellDoneAudio.currentTime = 0;
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

let carryOnAudio;

function playCarryOn() {
	if (!carryOnAudio) {
		carryOnAudio = new Audio('./audio/carry-on.mp3');
		carryOnAudio.volume = 0.65;
	}
	if (!isCarryOnPlayed && isGameOverSoundPlayed) {
		carryOnAudio.play();
		isCarryOnPlayed = true;
	}
}

function stopCarryOn() {
	if (carryOnAudio) {
		carryOnAudio.pause();
		carryOnAudio.currentTime = 0;
	}
}

let heartbeatAudio;

function playHeartBeat() {
	if (!isMuted) {
		if (!heartbeatAudio) {
			heartbeatAudio = new Audio('./audio/heartbeat.mp3');
			heartbeatAudio.volume = 0.75;
			heartbeatAudio.loop = true;
		}
		if (heartbeatAudio.paused) {
			heartbeatAudio.play();
		}
	}
}

function stopHeartBeat() {
	if (heartbeatAudio && !heartbeatAudio.paused) {
		heartbeatAudio.pause();
		heartbeatAudio.currentTime = 0;
	}
}
