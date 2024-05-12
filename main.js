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

function updateWorldElements() {
	bouncePlants.forEach((bouncePlant) => {
		bouncePlant.update();
	});

	windyPlants.forEach((windyPlant) => {
		windyPlant.update();
	});
}

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

function updateHealthBar() {
	const healthBarWrapper = document.getElementById('health-bar-wrapper');
	const healthPercentage = (player.health / 100) * 100;
	healthBarWrapper.style.width = `${healthPercentage}%`;

	const healthBarText = document.getElementById('health-bar-text');
	healthBarText.textContent = `${player.health} HP`;
}

function updateSpellPowerBar() {
	const spellpowerBarWrapper = document.getElementById(
		'spellpower-bar-wrapper'
	);
	const spellpowerPercentage = (player.spellPower / 100) * 100;
	spellpowerBarWrapper.style.width = `${spellpowerPercentage}%`;

	const spellpowerBarText = document.getElementById('spellpower-bar-text');
	spellpowerBarText.textContent = `${Math.round(player.spellPower)} SP`;
}

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

function updateSpellScrollCounter() {
	const spellScrollCount = document.getElementById('spell-scroll-count');
	spellScrollCount.textContent = player.collectedScrolls;
}

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
}

function updateGemsAndScore() {
	const blueGemCount = document.getElementById('blue-gem-count');
	blueGemCount.textContent = player.collectedBlueGems;

	const redGemCount = document.getElementById('red-gem-count');
	redGemCount.textContent = player.collectedRedGems;

	const blueGemScore = document.getElementById('total-gem-score');
	blueGemScore.textContent = calculateBlueGemScore();
}

function updateGameAssets() {
	updateStaticCollision();
	updateEnemies();
	updateWorldElements();
	updateCollectables();
}

function updateStatusBar() {
	updateHealthBar();
	updateSpellPowerBar();
	updatePotionCounter();
	updateSpellScrollCounter();
	updateBookCounter();
	updateGemsAndScore();
}

// ########### PLAYER FUNCTIONS ###########
function updatePlayer() {
	player.update(bouncePlants);

	checkPlayerState();
	updatePlayerSpell();
	handlePlayerInput();
	updatePlayerAnimation();
}

function checkPlayerState() {
	if (player.isDead) {
		player.deadAnimationDuration--;
		if (player.deadAnimationDuration <= 0) {
			showGameOverScreen();
			return;
		}
	}
}

function updatePlayerSpell() {
	if (player.currentSpell) {
		player.currentSpell.update(movingBlobs);
	}
}

function handlePlayerInput() {
	player.velocity.x = 0;

	handleWalkInput();
	handleDashInput();
	handleRiseInput();
	handleJumpAndFallInput();
}

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

function handleRiseInput() {
	if (keys.p.pressed && !player.isHit && player.spellPower >= 12 / 60) {
		player.velocity.y = -26;
		player.useSpellPower(12 / 60);
		player.bottomBorderCamPanning({ camera, canvas });
	}
}

function handleJumpAndFallInput() {
	if (player.velocity.y < 0 && !player.isHit) {
		player.bottomBorderCamPanning({ camera, canvas });
	} else if (player.velocity.y > 0 && !player.isHit) {
		player.upperBorderCamPanning({ camera, canvas });
	}
}

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

let animationId;

function animate() {
	animationId = window.requestAnimationFrame(animate);

	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.save();
	c.scale(0.125, 0.125);
	c.translate(camera.position.x, camera.position.y);

	background.update();

	updateGameAssets();
	updateStatusBar();
	updatePlayer();
	foreground.update();

	c.restore();
}

// animate();

function initGame() {
	console.log('init game');
	initStaticCollision();
	initWorldElements();
	initCollectables();
	initEnemies();
	initPlayer();

	animate();
}

function resetGame() {
	cancelAnimationFrame(animationId);

	camera = {
		position: {
			x: 0,
			y: 0,
		},
	};

	player.initialValues();

	initCollectables();
	initPlayer();
	initWorldElements();
	initEnemies();

	hideStartScreen();
	hideGameOverScreen();

	animate();
}

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'w':
			if (player.isGrounded) {
				player.velocity.y = -48;
				player.isGrounded = false;
			}
			break;
		case 'p':
			keys.p.pressed = true;
			break;
		case 'd':
			keys.d.pressed = true;
			break;
		case 'a':
			keys.a.pressed = true;
			break;
		case 'e':
			keys.e.pressed = true;
			break;
		case 'q':
			keys.q.pressed = true;
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
});

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'd':
			keys.d.pressed = false;
			break;
		case 'a':
			keys.a.pressed = false;
			break;
		case 'e':
			keys.e.pressed = false;
			break;
		case 'q':
			keys.q.pressed = false;
			break;
		case 'p':
			keys.p.pressed = false;
			break;
	}
});
