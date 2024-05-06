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
	imgSrc: '/img/background.jpg',
});

const camera = {
	position: {
		x: 0,
		y: 0,
	},
};

function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.save();
	c.scale(0.125, 0.125);
	c.translate(camera.position.x, camera.position.y);

	background.update();

	collisionBlocks.forEach((collisionBlock) => {
		collisionBlock.update();
	});

	hazards.forEach((hazard) => {
		hazard.update(player);
	});

	fencePoles.forEach((fencePole) => {
		fencePole.update();
	});

	movingBlobs.forEach((movingBlob) => {
		movingBlob.requiredHits = 3 - player.collectedScrolls;
		movingBlob.update(player);
	});

	hangingBlobs.forEach((hangingBlob) => {
		hangingBlob.update(player);
	});

	bouncePlants.forEach((bouncePlant) => {
		bouncePlant.update();
	});

	windyPlants.forEach((windyPlant) => {
		windyPlant.update();
	});

	// blueFlowers.forEach((blueFlower) => {
	// 	blueFlower.update();
	// });

	poisonPlants.forEach((poisonPlant) => {
		poisonPlant.update();
		poisonPlant.checkCollision(player);
	});

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

	// ####### BARS #########
	const healthBarWrapper = document.getElementById('health-bar-wrapper');
	const healthPercentage = (player.health / 100) * 100;
	healthBarWrapper.style.width = `${healthPercentage}%`;

	const healthBarText = document.getElementById('health-bar-text');
	healthBarText.textContent = `${player.health} HP`;

	const spellpowerBarWrapper = document.getElementById(
		'spellpower-bar-wrapper'
	);
	const spellpowerPercentage = (player.spellPower / 100) * 100;
	spellpowerBarWrapper.style.width = `${spellpowerPercentage}%`;

	const spellpowerBarText = document.getElementById('spellpower-bar-text');
	spellpowerBarText.textContent = `${Math.round(player.spellPower)} SP`;

	// ####### POTIONS #########
	const halfHPCount = document.getElementById('halfHP-count');
	halfHPCount.textContent = player.collectedPotions.halfHP;

	const fullHPCount = document.getElementById('fullHP-count');
	fullHPCount.textContent = player.collectedPotions.fullHP;

	const fullSPCount = document.getElementById('fullSP-count');
	fullSPCount.textContent = player.collectedPotions.fullSP;

	const immunityCount = document.getElementById('immunity-count');
	immunityCount.textContent = player.collectedPotions.immunity;

	// ####### Spell-Power #########
	const spellScrollCount = document.getElementById('spell-scroll-count');
	spellScrollCount.textContent = player.collectedScrolls;

	// ####### BOOKS #########
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

	// ####### GEMS + SCORE #########
	const blueGemCount = document.getElementById('blue-gem-count');
	blueGemCount.textContent = player.collectedBlueGems;

	const redGemCount = document.getElementById('red-gem-count');
	redGemCount.textContent = player.collectedRedGems;

	const blueGemScore = document.getElementById('total-gem-score');
	blueGemScore.textContent = calculateBlueGemScore();

	// ####### PLAYER #########
	player.update(bouncePlants);

	if (player.currentSpell) {
		player.currentSpell.update(movingBlobs);
	}

	player.velocity.x = 0;

	// Walk
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

	// Dash
	else if (keys.e.pressed && !player.isHit && player.spellPower >= 12 / 60) {
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
	} else if (player.velocity.y === 0 && !player.isHit) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('IdleRight');
		} else {
			player.switchToSprite('IdleLeft');
		}
	}

	// Rise
	if (keys.p.pressed && !player.isHit && player.spellPower >= 12 / 60) {
		player.velocity.y = -26;
		player.useSpellPower(12 / 60);
		player.bottomBorderCamPanning({ camera, canvas });

		if (player.lastDirection === 'right') {
			player.switchToSprite('JumpRight');
		} else {
			player.switchToSprite('JumpLeft');
		}
	} else if (player.velocity.y > 0 && !player.isHit) {
		player.upperBorderCamPanning({ camera, canvas });

		if (player.lastDirection === 'right') {
			player.switchToSprite('FallRight');
		} else {
			player.switchToSprite('FallLeft');
		}
	}

	// Jump & Fall
	if (player.velocity.y < 0 && !player.isHit) {
		player.bottomBorderCamPanning({ camera, canvas });

		if (player.lastDirection === 'right') {
			player.switchToSprite('JumpRight');
		} else {
			player.switchToSprite('JumpLeft');
		}
	} else if (player.velocity.y > 0 && !player.isHit) {
		player.upperBorderCamPanning({ camera, canvas });

		if (player.lastDirection === 'right') {
			player.switchToSprite('FallRight');
		} else {
			player.switchToSprite('FallLeft');
		}
	}

	c.restore();
}

animate();

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'w':
			if (player.isGrounded) {
				player.velocity.y = -48;
				player.isGrounded = false; // Spieler verlässt den Boden beim Springen
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
