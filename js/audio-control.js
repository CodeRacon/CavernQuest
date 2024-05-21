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

/**
 * Mutes all sounds in the application.
 */
function muteAllSounds() {
	isMuted = true;
}

/**
 * Sets the `isMuted` flag to `false`, effectively unmuting all sounds.
 */
function unmuteAllSounds() {
	isMuted = false;
}

/**
 * Plays or pauses the main story audio track.
 * If the main story audio is not yet loaded, it is initialized with the appropriate volume.
 * If the main story audio is currently paused, it is played. Otherwise, it is paused.
 * The 'play-intro-btn' element is updated to reflect the current state of the audio playback.
 */
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

/**
 * Plays the background audio for the cavern environment.
 * The audio file is looped continuously until muted or stopped.
 */
function playCavernBG() {
	if (!isMuted) {
		const cavernBGAudio = new Audio('./audio/cavern-bg-sound.mp3');
		cavernBGAudio.volume = 0.075;
		cavernBGAudio.play();
		cavernBGAudio.loop = true;
	}
}

/**
 * Plays a sound effect when a potion is found in the game.
 * The sound effect is played at a reduced volume to avoid being too loud.
 */
function playPotionFound() {
	if (!isMuted) {
		const potionFoundAudio = new Audio('./audio/bottle.wav');
		potionFoundAudio.volume = 0.2;
		potionFoundAudio.play();
	}
}

/**
 * Plays the potion use audio effect if the game audio is not muted.
 */
function playPotionUse() {
	if (!isMuted) {
		const potionUseAudio = new Audio('./audio/use-potion.mp3');
		potionUseAudio.volume = 0.35;
		potionUseAudio.play();
	}
}

/**
 * Plays a sound effect when a magic tome is found.
 * This function checks if the audio is not muted, and if so, plays a quest item sound effect
 * at a reduced volume.
 */
function playMagicTomeFound() {
	if (!isMuted) {
		const tomeFoundAudio = new Audio('./audio/quest-item.mp3');
		tomeFoundAudio.volume = 0.45;
		tomeFoundAudio.play();
	}
}

/**
 * Plays the gem collected audio effect if the audio is not muted.
 */
function playGemCollected() {
	if (!isMuted) {
		const gemCollectedAudio = new Audio('./audio/gem-collected.mp3');
		gemCollectedAudio.volume = 0.25;
		gemCollectedAudio.play();
	}
}

/**
 * Plays the bounce sound effect when jumping on a BouncePlant if the audio is not muted.
 */
function playBounceSound() {
	if (!isMuted) {
		const bouncePlantAudio = new Audio('./audio/bounce.mp3');
		bouncePlantAudio.volume = 0.175;
		bouncePlantAudio.play();
	}
}

/**
 * Plays the player hurt audio effect if the game is not muted.
 * The audio file is played at a reduced volume of 0.175.
 */
function playPlayerHurt() {
	if (!isMuted) {
		const playerHurtAudio = new Audio('./audio/player-hurt01.mp3');
		playerHurtAudio.volume = 0.175;
		playerHurtAudio.play();
	}
}

/**
 * Plays an alternative audio clip for when the player is hurt.
 * This audio clip is played if the game is not muted.
 */
function playPlayerHurtAlt() {
	if (!isMuted) {
		const playerHurtAltAudio = new Audio('./audio/player-hurt02.mp3');
		playerHurtAltAudio.volume = 0.175;
		playerHurtAltAudio.play();
	}
}

/**
 * Plays a sound effect when the player is poisoned.
 * The sound effect is played at a reduced volume and is rate-limited to play no more than once every 4 seconds.
 */
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

/**
 * Plays the spell cast audio effect if the audio is not muted.
 */
function playSpellcast() {
	if (!isMuted) {
		const playerSpellcastAudio = new Audio('./audio/spell-cast.mp3');
		playerSpellcastAudio.volume = 0.25;
		playerSpellcastAudio.play();
	}
}

/**
 * Plays a sound effect for when a blob falls.
 * The sound effect is played at a reduced volume.
 * The sound effect will only play if the audio is not muted.
 */
function playBlobFall() {
	if (!isMuted) {
		const blobFallAudio = new Audio('./audio/sleepy-blob.wav');
		blobFallAudio.volume = 0.25;
		blobFallAudio.play();
	}
}

/**
 * Plays a moving blob audio effect.
 * This function is called when a moving blob animation is triggered, to play a corresponding audio effect.
 * The audio is played with a 750ms delay and a volume of 0.35.
 */
function playMovingBlob01() {
	if (!isMuted) {
		const movingBlob01Audio = new Audio('./audio/moving-blob01.mp3');
		movingBlob01Audio.volume = 0.35;
		setTimeout(() => {
			movingBlob01Audio.play();
		}, 750);
	}
}

/**
 * Plays a moving blob sound effect after a 750ms delay.
 * The sound effect is played at a volume of 0.35.
 * The sound effect will only play if the audio is not muted.
 */
function playMovingBlob02() {
	if (!isMuted) {
		const movingBlob02Audio = new Audio('./audio/moving-blob02.mp3');
		movingBlob02Audio.volume = 0.35;
		setTimeout(() => {
			movingBlob02Audio.play();
		}, 750);
	}
}

/**
 * Plays a moving blob audio effect after a 750ms delay, if the audio is not muted.
 */
function playMovingBlob03() {
	if (!isMuted) {
		const movingBlob03Audio = new Audio('./audio/moving-blob03.mp3');
		movingBlob03Audio.volume = 0.35;
		setTimeout(() => {
			movingBlob03Audio.play();
		}, 750);
	}
}

/**
 * Plays the jump sound effect if the audio is not muted.
 */
function playJump() {
	if (!isMuted) {
		const jumpAudio = new Audio('./audio/jump.mp3');
		jumpAudio.volume = 0.35;
		jumpAudio.play();
	}
}

/**
 * Plays a hover audio effect if the user is not muted and is not currently hovering.
 * The hover audio is played at a volume of 0.15.
 */
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

/**
 * Plays the dash audio effect if the player is not muted and not currently dashing.
 */
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

/**
 * Plays the "scroll found" audio effect if the audio is not muted.
 */
function playScrollFound() {
	if (!isMuted) {
		const scrollFoundAudio = new Audio('./audio/scroll-found.mp3');
		scrollFoundAudio.volume = 0.35;
		scrollFoundAudio.play();
	}
}

/**
 * Plays an audio clip indicating that all tomes have been found, if the audio is not muted
 * and the clip has not already been played.
 */
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

/**
 * Plays a sound effect when a quest is completed.
 * This function checks if a quest has been completed and if the sound effect has not already been played.
 * If both conditions are true, it plays the "winning.mp3" audio file at a volume of 0.35.
 */
function playQuestCompleted() {
	const questCompletedAudio = new Audio('./audio/winning.mp3');
	questCompletedAudio.volume = 0.35;
	if (isQuestCompleted && !isQuestCompletedPlayed) {
		questCompletedAudio.play();
		isQuestCompletedPlayed = true;
	}
}

let wellDoneAudio;

/**
 * Plays the "well done" audio clip when a quest is completed.
 * The audio clip is only played once per quest completion.
 */
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

/**
 * Stops the "well done" audio if it is currently playing.
 */
function stopWellDone() {
	if (wellDoneAudio) {
		wellDoneAudio.pause();
		wellDoneAudio.currentTime = 0;
	}
}

/**
 * Plays the game over sound effect.
 * The sound is played at a reduced volume of 0.15 to avoid being too loud.
 * The sound is only played once per game-over event to avoid repetition.
 */
function playGameOverSound() {
	const gameOverAudio = new Audio('./audio/game-over.mp3');
	gameOverAudio.volume = 0.15;
	if (!isGameOverSoundPlayed) {
		gameOverAudio.play();
		isGameOverSoundPlayed = true;
	}
}

let carryOnAudio;

/**
 * Plays the "carry on" audio clip if the game is over and the "carry on" audio has not been played yet.
 */
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

/**
 * Stops the "carry on" audio if it is currently playing.
 */
function stopCarryOn() {
	if (carryOnAudio) {
		carryOnAudio.pause();
		carryOnAudio.currentTime = 0;
	}
}

let heartbeatAudio;

/**
 * Plays a looping heartbeat audio effect if the audio is not muted.
 * If the heartbeat audio has not been initialized, it is created and configured with a volume of 0.75 and set to loop.
 * If the heartbeat audio is paused, it is resumed.
 */
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

/**
 * Stops the heartbeat audio if it is currently playing.
 */
function stopHeartBeat() {
	if (heartbeatAudio && !heartbeatAudio.paused) {
		heartbeatAudio.pause();
		heartbeatAudio.currentTime = 0;
	}
}
