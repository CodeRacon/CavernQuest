const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 512;

const gravity = 1.75;

const keys = {
	d: { pressed: false },
	a: { pressed: false },
	e: { pressed: false },
	q: { pressed: false },
	p: { pressed: false },
};

let y = 100;

const background = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	imgSrc: 'img/bg-map.jpg',
});

const foreground = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	imgSrc: 'img/fg-map.png',
});

let camera = {
	position: {
		x: 0,
		y: 0,
	},
};

let isPaused = false;

/**
 * Updates the static collision elements in the game world, including collision blocks, hazards, and fence poles.
 * This function is called each frame to update the state of these static elements and handle any collisions with the player.
 */
function updateStaticCollision() {
	collisionBlocks.forEach((collisionBlock) => {
		collisionBlock.update();
	});

	hazards.forEach((hazard) => {
		hazard.update(player);
	});

	fencePoles.forEach((fencePole) => {
		fencePole.update();
	});
}

/**
 * Updates the state of all enemies in the game.
 *
 * This function iterates through the `movingBlobs`, `hangingBlobs`, and `poisonPlants` arrays,
 * and calls the appropriate update methods on each enemy type.
 * It also checks for collisions between the player and the poison plants.
 * It sets the initial amount of hits needed to finish a MovingBlob, which decreases with each SpellScroll found.
 */
function updateEnemies() {
	movingBlobs.forEach((movingBlob) => {
		movingBlob.requiredHits = 3 - player.collectedScrolls;
		movingBlob.update(player);
	});

	hangingBlobs.forEach((hangingBlob) => {
		hangingBlob.update(player);
	});

	poisonPlants.forEach((poisonPlant) => {
		poisonPlant.update();
		poisonPlant.checkCollision(player);
	});
}

/**
 * Updates the world elements, including bouncing plants and windy plants.
 */
function updateWorldElements() {
	bouncePlants.forEach((bouncePlant) => {
		bouncePlant.update();
	});

	windyPlants.forEach((windyPlant) => {
		windyPlant.update();
	});
}

/**
 * Updates and checks for collisions with various collectables in the game.
 * This function iterates through arrays of different collectable objects, calls their
 * `update()` and `checkCollision(player)` methods, allowing the collectables to
 * update their state and check for collisions with the player.
 */
function updateCollectables() {
	blueGems.forEach((blueGem) => {
		blueGem.update();
		blueGem.checkCollision(player);
	});

	redGems.forEach((redGem) => {
		redGem.update();
		redGem.checkCollision(player);
	});

	fullHPs.forEach((fullHP) => {
		fullHP.update();
		fullHP.checkCollision(player);
	});

	halfHPs.forEach((halfHP) => {
		halfHP.update();
		halfHP.checkCollision(player);
	});

	fullSPs.forEach((fullSP) => {
		fullSP.update();
		fullSP.checkCollision(player);
	});

	immunityPotions.forEach((immunityPotion) => {
		immunityPotion.update();
		immunityPotion.checkCollision(player);
	});

	goldenBooks.forEach((goldenBook) => {
		goldenBook.update();
		goldenBook.checkCollision(player);
	});

	redBooks.forEach((redBook) => {
		redBook.update();
		redBook.checkCollision(player);
	});

	blueBooks.forEach((blueBook) => {
		blueBook.update();
		blueBook.checkCollision(player);
	});

	greenBooks.forEach((greenBook) => {
		greenBook.update();
		greenBook.checkCollision(player);
	});

	spellScrolls.forEach((spellScroll) => {
		spellScroll.update();
		spellScroll.checkCollision(player);
	});
}

/**
 * Updates the health bar HUD element to reflect the current player health.
 * The health bar wrapper element is resized to match the player's current health percentage,
 * and the health bar text is updated to display the current health value.
 */
function updateHealthBar() {
	const healthBarWrapper = document.getElementById('health-bar-wrapper');
	const healthPercentage = (player.health / 100) * 100;
	healthBarWrapper.style.width = `${healthPercentage}%`;

	const healthBarText = document.getElementById('health-bar-text');
	healthBarText.textContent = `${player.health} HP`;
}

/**
 * Updates the visual representation of the player's spell power.
 * The spell power bar wrapper is resized to reflect the current spell power percentage,
 * and the text content of the spell power bar is updated to display the current spell power value.
 */
function updateSpellPowerBar() {
	const spellpowerBarWrapper = document.getElementById(
		'spellpower-bar-wrapper'
	);
	const spellpowerPercentage = (player.spellPower / 100) * 100;
	spellpowerBarWrapper.style.width = `${spellpowerPercentage}%`;

	const spellpowerBarText = document.getElementById('spellpower-bar-text');
	spellpowerBarText.textContent = `${Math.round(player.spellPower)} SP`;
}

/**
 * Updates the on-screen counters for the player's collected potions.
 * Retrieves the current potion counts from the `player.collectedPotions` object
 * and updates the corresponding HTML elements with the new values.
 */
function updatePotionCounter() {
	const halfHPCount = document.getElementById('halfHP-count');
	halfHPCount.textContent = player.collectedPotions.halfHP;

	const fullHPCount = document.getElementById('fullHP-count');
	fullHPCount.textContent = player.collectedPotions.fullHP;

	const fullSPCount = document.getElementById('fullSP-count');
	fullSPCount.textContent = player.collectedPotions.fullSP;

	const immunityCount = document.getElementById('immunity-count');
	immunityCount.textContent = player.collectedPotions.immunity;
}

/**
 * Updates the displayed count of spell scrolls collected by the player.
 */
function updateSpellScrollCounter() {
	const spellScrollCount = document.getElementById('spell-scroll-count');
	spellScrollCount.textContent = player.collectedScrolls;
}

/**
 * Updates the visual representation of the collected books in the game.
 * Checks the player's collected books status and updates the corresponding book images to indicate which books
 * have been collected (others are greyed out).
 * Also sets a flag `allTomesFound` to true if all books have been collected, and plays a special sound effect in that case.
 */
function updateBookCounter() {
	const goldenBookImage = document.getElementById('goldenBook');
	const greenBookImage = document.getElementById('greenBook');
	const blueBookImage = document.getElementById('blueBook');
	const redBookImage = document.getElementById('redBook');

	if (player.collectedBooks.yellowBook) {
		goldenBookImage.classList.add('collected');
	}
	if (player.collectedBooks.greenBook) {
		greenBookImage.classList.add('collected');
	}
	if (player.collectedBooks.blueBook) {
		blueBookImage.classList.add('collected');
	}
	if (player.collectedBooks.redBook) {
		redBookImage.classList.add('collected');
	}

	if (
		player.collectedBooks.yellowBook &&
		player.collectedBooks.greenBook &&
		player.collectedBooks.blueBook &&
		player.collectedBooks.redBook
	) {
		allTomesFound = true;
		playAllTomesFound();
	} else {
		allTomesFound = false;
	}
}

/**
 * Updates the displayed counts of blue and red gems collected by the player, as well as the total score calculated with multipliers.
 */
function updateGemsAndScore() {
	const blueGemCount = document.getElementById('blue-gem-count');
	blueGemCount.textContent = player.collectedBlueGems;

	const redGemCount = document.getElementById('red-gem-count');
	redGemCount.textContent = player.collectedRedGems;

	const blueGemScore = document.getElementById('total-gem-score');
	blueGemScore.textContent = calculateBlueGemScore();
}

/**
 * Updates the winning screen with the player's collected blue and red gems, as well as the total score.
 */
function updateWinningScreen() {
	const blueGemAmount = document.getElementById('blue-gem-amount');
	blueGemAmount.textContent = player.collectedBlueGems;

	const redGemAmount = document.getElementById('red-gem-amount');
	redGemAmount.textContent = player.collectedRedGems;

	const totalScore = document.getElementById('total-score');
	totalScore.textContent = calculateBlueGemScore();
}

/**
 * Updates the pause screen with the current number of tomes found and enemies defeated.
 * The number of tomes found is based on the player's collected books.
 * The number of enemies defeated is calculated by subtracting the number of remaining moving blobs from the total of 27.
 */
function updatePauseScreen() {
	const foundTomesAmount = document.getElementById('current-tomes-amount');
	const enemiesDefeated = document.getElementById('enemies-defeated');
	let currentTomesFound = 0;
	if (player.collectedBooks.yellowBook) {
		currentTomesFound += 1;
	}
	if (player.collectedBooks.greenBook) {
		currentTomesFound += 1;
	}
	if (player.collectedBooks.blueBook) {
		currentTomesFound += 1;
	}
	if (player.collectedBooks.redBook) {
		currentTomesFound += 1;
	}
	foundTomesAmount.textContent = currentTomesFound;
	enemiesDefeated.textContent = 27 - movingBlobs.length;
}

/**
 * Updates the game assets, including static collision, enemies, world elements, and collectables.
 */
function updateGameAssets() {
	updateStaticCollision();
	updateEnemies();
	updateWorldElements();
	updateCollectables();
}

/**
 * Updates the various UI & HUD elements on the status bar, including the health bar, spell power bar, potion counter,
 * spell scroll counter, book counter, gems and score, winning screen, and pause screen.
 */
function updateStatusBar() {
	updateHealthBar();
	updateSpellPowerBar();
	updatePotionCounter();
	updateSpellScrollCounter();
	updateBookCounter();
	updateGemsAndScore();
	updateWinningScreen();
	updatePauseScreen();
}

// ########### PLAYER FUNCTIONS ###########

/**
 * Updates the player's state and performs various actions related to the player.
 * This function is called regularly to update the player's position, handle input,
 * update the player's spell, and update the player's animation.
 */
function updatePlayer() {
	player.update(bouncePlants);

	checkPlayerState();
	updatePlayerSpell();
	handlePlayerInput();
	updatePlayerAnimation();
}

/**
 * Checks the state of the player and performs actions based on their health and death status.
 * If the player's health is below 15, it plays a heart-beat 'low-on-health' sound.
 * If the player is dead, it decrements the dead animation duration and shows the game over screen if the animation has finished.
 */
function checkPlayerState() {
	if (player.health <= 15) {
		playHeartBeat();
	} else {
		stopHeartBeat();
	}
	if (player.isDead) {
		player.deadAnimationDuration--;
		if (player.deadAnimationDuration <= 0) {
			isDead = true;
			stopHeartBeat();
			if (isDead && !isGameOverScreen) {
				showGameOverScreen();
			}
			return;
		}
	}
}

/**
 * Checks the current state of the quest-items and shows the winning screen in case all tomes have been found and there are no moving blobs left.
 */
function checkQuestState() {
	if (allTomesFound && movingBlobs.length === 0) {
		isQuestCompleted = true;
		showWinningScreen();
		return;
	}
}

/**
 * Updates the player's current spell, if any, by calling its `update` method with the `movingBlobs` - array as an argument.
 */
function updatePlayerSpell() {
	if (player.currentSpell) {
		player.currentSpell.update(movingBlobs);
	}
}

/**
 * Handles the player's input, updating the player's velocity and calling main input handling functions.
 */
function handlePlayerInput() {
	player.velocity.x = 0;

	handleWalkInput();
	handleDashInput();
	handleHoverInput();
	handleJumpAndFallInput();
}

/**
 * Handles the player's walking input, updating their sprite and velocity based on the pressed keys.
 * If the 'd' key is pressed and the player is not hit, the player's sprite is set to 'WalkRight',
 * their velocity is set to 28 in the x-axis, their last direction is set to 'right', and the camera followa as it pans to the left border.
 * If the 'a' key is pressed and the player is not hit, the player's sprite is set to 'WalkLeft',
 * their velocity is set to -28 in the x-axis, their last direction is set to 'left', and the camera followa as it pans to the right border.
 */
function handleWalkInput() {
	if (keys.d.pressed && !player.isHit) {
		player.switchToSprite('WalkRight');
		player.velocity.x = 28;
		player.lastDirection = 'right';
		player.leftBorderCamPanning({ canvas, camera });
	} else if (keys.a.pressed && !player.isHit) {
		player.switchToSprite('WalkLeft');
		player.velocity.x = -28;
		player.lastDirection = 'left';
		player.rightBorderCamPanning({ canvas, camera });
	}
}

/**
 * Handles the player's dash input, updating their sprite, velocity, and spell power usage.
 * If the 'e' key is pressed and the player has enough spell power, the player will dash to the right.
 * If the 'q' key is pressed and the player has enough spell power, the player will dash to the left.
 * The player's last direction is also updated to reflect the direction of the dash.
 * The camera panning is also handled, depending on the direction of the dash.
 */
function handleDashInput() {
	if (keys.e.pressed && !player.isHit && player.spellPower >= 12 / 60) {
		player.switchToSprite('DashRight');
		player.velocity.x = 64;
		player.lastDirection = 'right';
		player.useSpellPower(12 / 60);
		player.leftBorderCamPanning({ canvas, camera });
	} else if (keys.q.pressed && !player.isHit && player.spellPower >= 12 / 60) {
		player.switchToSprite('DashLeft');
		player.velocity.x = -64;
		player.lastDirection = 'left';
		player.useSpellPower(12 / 60);
		player.rightBorderCamPanning({ canvas, camera });
	}
}

/**
 * Handles the player's hover input, which allows the player to hover / float upwards.
 *
 * If the 'p' key is pressed, the player is not currently hit, and the player has enough spell power (SP), this function will:
 * - Set the player's vertical velocity to -26, causing them to jump upwards
 * - Consume 12 points of the player's SP per second
 * - Trigger bottom border camera panning for the player's camera
 */
function handleHoverInput() {
	if (keys.p.pressed && !player.isHit && player.spellPower >= 12 / 60) {
		player.velocity.y = -26;
		player.useSpellPower(12 / 60);
		player.bottomBorderCamPanning({ camera, canvas });
	}
}

/**
 * Handles the camera panning behavior based on the player's vertical velocity.
 * If the player is moving upwards and not hit, the camera pans towards the upper border.
 * If the player is moving downwards and not hit, the camera pans towards the lower border.
 */
function handleJumpAndFallInput() {
	if (player.velocity.y < 0 && !player.isHit) {
		player.bottomBorderCamPanning({ camera, canvas });
	} else if (player.velocity.y > 0 && !player.isHit) {
		player.upperBorderCamPanning({ camera, canvas });
	}
}

/**
 * Updates the player's animation based on their current velocity and direction.
 * If the player is not being hit, this function will switch the player's sprite to
 * the appropriate idle, jump, or fall animation based on the player's velocity and
 * last direction faced.
 */
function updatePlayerAnimation() {
	if (player.velocity.y === 0 && !player.isHit) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('IdleRight');
		} else {
			player.switchToSprite('IdleLeft');
		}
	}

	if (player.velocity.y < 0 && !player.isHit) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('JumpRight');
		} else {
			player.switchToSprite('JumpLeft');
		}
	} else if (player.velocity.y > 0 && !player.isHit) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('FallRight');
		} else {
			player.switchToSprite('FallLeft');
		}
	}
}

let currentAnimationLoop;

/**
 * Animates the game scene by updating the background, game assets, player, foreground,
 * and rendering the updated scene to the canvas.
 * This function is called repeatedly by the browser's requestAnimationFrame method to create a
 * continuous animation loop.
 * The animation is paused when the `isPaused` flag is true.
 */
function animate() {
	if (!isPaused) {
		currentAnimationLoop = window.requestAnimationFrame(animate);

		c.fillStyle = 'black';
		c.fillRect(0, 0, canvas.width, canvas.height);

		c.save();
		c.scale(0.125, 0.125);
		c.translate(camera.position.x, camera.position.y);

		background.update();

		updateGameAssets();
		updateStatusBar();
		updatePlayer();
		checkQuestState();
		foreground.update();

		c.restore();
	}
}

/**
 * Initializes the game by setting up various game elements and starting the animation loop.
 */
function initGame() {
	console.log('init game');
	initStaticCollision();
	initWorldElements();
	initCollectables();
	initEnemies();
	initPlayer();

	animate();
}

/**
 * Resets the game state to its initial conditions.
 * This function is called when the game needs to be restarted, such as after the player has won or lost.
 * It cancels the current animation loop, resets the camera position, initializes the player, and hides any gameover or winning screens.
 */
function resetGame() {
	cancelAnimationFrame(currentAnimationLoop);
	camera = {
		position: {
			x: 0,
			y: 0,
		},
	};

	player.initialValues();

	initGame();

	hideGameOverScreen();
	hideWinningScreen();

	isDead = false;
}

/**
 * Toggles the pause state of the game.
 * When the game is paused, the game controls are disabled, the animation loop is cancelled, and the pause screen is shown.
 * When the game is unpaused, the game controls are enabled, the animation loop is resumed, and the pause screen is hidden.
 */
function togglePause() {
	isPaused = !isPaused;
	if (isPaused) {
		disableGameControls();
		cancelAnimationFrame(currentAnimationLoop);
		showPauseScreen();
	} else {
		hidePauseScreen();
		enableGameControls();
		animate();
	}
}

/**
 * Handles keyboard input events for the game.
 * This function is called whenever a key is pressed down.
 * It performs various actions based on the key that was pressed, such as jumping, hovering, dashing, and casting spells.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
function handleKeyDown(event) {
	switch (event.key) {
		case 'w':
			if (player.isGrounded) {
				playJump();
				player.velocity.y = -48;
				player.isGrounded = false;
			}
			break;
		case 'p':
			keys.p.pressed = true;
			playHover();
			isHovering = true;
			break;
		case 'd':
			keys.d.pressed = true;
			break;
		case 'a':
			keys.a.pressed = true;
			break;
		case 'e':
			keys.e.pressed = true;
			playDash();
			isDashing = true;
			break;
		case 'q':
			keys.q.pressed = true;
			playDash();
			isDashing = true;
			break;
		case ' ':
			player.castSpell();
			break;
		case '1':
			player.useHalfHPPotion();
			break;
		case '2':
			player.useFullHPPotion();
			break;
		case '3':
			player.useFullSPPotion();
			break;
		case '4':
			player.useImmunityPotion();
			break;
	}
}

/**
 * Handles key up events for various player actions.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
function handleKeyUp(event) {
	switch (event.key) {
		case 'd':
			keys.d.pressed = false;
			break;
		case 'a':
			keys.a.pressed = false;
			break;
		case 'e':
			keys.e.pressed = false;
			isDashing = false;
			break;
		case 'q':
			keys.q.pressed = false;
			isDashing = false;
			break;
		case 'p':
			keys.p.pressed = false;
			isHovering = false;
			break;
	}
}

/**
 * Handles the ESC key event by toggling the pause state.
 * @param {KeyboardEvent} event - The keyboard event object.
 */
function handleESCevent(event) {
	switch (event.key) {
		case 'Escape':
			togglePause();
			break;
	}
}

/**
 * Enables the ESC key event listener on the window object.
 */
function enableESCevent() {
	window.addEventListener('keydown', handleESCevent);
}

/**
 * Disables the ESC key event listener on the window object.
 */
function disableESCevent() {
	window.removeEventListener('keydown', handleESCevent);
}

/**
 * Enables the game controls by adding event listeners for key down and key up events.
 */
function enableGameControls() {
	window.addEventListener('keydown', handleKeyDown);
	window.addEventListener('keyup', handleKeyUp);
}

/**
 * Disables the game controls by removing the event listeners for key down and key up events.
 */
function disableGameControls() {
	window.removeEventListener('keydown', handleKeyDown);
	window.removeEventListener('keyup', handleKeyUp);
}
