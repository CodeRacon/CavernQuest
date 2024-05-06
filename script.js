const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 512;

const collisionBlocks = [];

groundCollisions.forEach((collision) => {
	collision.objects.forEach((object) => {
		const collisionBlock = new CollisionBlock({
			position: {
				x: object.x,
				y: object.y,
			},
			width: object.width,
			height: object.height,
		});
		collisionBlocks.push(collisionBlock);
	});
});

frameCollisions.forEach((collision) => {
	collision.objects.forEach((object) => {
		const collisionBlock = new CollisionBlock({
			position: {
				x: object.x,
				y: object.y,
			},
			width: object.width,
			height: object.height,
		});
		collisionBlocks.push(collisionBlock);
	});
});

const hazards = [];

hazardCollisions.forEach((collision) => {
	collision.objects.forEach((object) => {
		const hazard = new Hazard({
			position: {
				x: object.x,
				y: object.y,
			},
			width: object.width,
			height: object.height,
		});
		hazards.push(hazard);
	});
});

const fencePoles = [];

fencePoleCollisions.forEach((collision) => {
	collision.objects.forEach((object) => {
		const fencePole = new FencePole({
			position: {
				x: object.x,
				y: object.y,
			},
			width: object.width,
			height: object.height,
		});
		fencePoles.push(fencePole);
	});
});

const movingBlobs = [];

movingBlobPositions.forEach((movingBlobPosition) => {
	movingBlobPosition.objects.forEach((object) => {
		const movingBlob = new MovingBlob({
			position: {
				x: object.x,
				y: object.y - 410,
			},
			fencePoles: fencePoles,
			speed: 6,
			imgSrc: 'img/enemies/SlimeOrange.png',
			frameRate: 30,
			frameBuffer: 2,
		});
		movingBlobs.push(movingBlob);
	});
});

const hangingBlobs = [];

hangingBlobPositions.forEach((hangingBlobPosition) => {
	hangingBlobPosition.objects.forEach((object) => {
		const hangingBlob = new HangingBlob({
			position: {
				x: object.x - 512,
				y: object.y,
			},
			scale: 1.66,
			imgSrc: 'img/enemies/SlimeBasic.png',
			frameRate: 30,
			frameBuffer: 8,
		});
		hangingBlobs.push(hangingBlob);
	});
});

const bouncePlants = [];

bouncePlantPositions.forEach((bouncePlantPosition) => {
	bouncePlantPosition.objects.forEach((object) => {
		const bouncePlant = new BouncePlant({
			position: {
				x: object.x,
				y: object.y - 512,
			},
			scale: 1.125,
			imgSrc: 'img/plants/JumpPlant-frames.png',
			frameRate: 20,
			frameBuffer: 4,
		});
		bouncePlants.push(bouncePlant);
	});
});

const poisonPlants = [];

poisonPlantPositions.forEach((poisonPlantPosition) => {
	poisonPlantPosition.objects.forEach((object) => {
		const poisonPlant = new PoisonPlant({
			position: {
				x: object.x,
				y: object.y - 832,
			},
			scale: object.scale,
			imgSrc: 'img/plants/poison-plant.png',
			frameRate: 30,
			frameBuffer: 10,
		});
		poisonPlants.push(poisonPlant);
	});
});

// ####################################
// ############_DECORATION_############
// ####################################

const blueFlowers = [];

blueFlowerPositions.forEach((blueFlowerPosition) => {
	blueFlowerPosition.objects.forEach((object) => {
		const blueFlower = new BlueFlower({
			position: {
				x: object.x,
				y: object.y,
			},
			scale: object.width / 768,
			rotation: object.rotation * (Math.PI / 180),
			imgSrc: 'img/plants/BluePlant.png',
			frameRate: 60,
			frameBuffer: 10,
		});
		blueFlowers.push(blueFlower);
	});
});

const windyPlants = [];

windyPlantPositions.forEach((windyPlantPosition) => {
	windyPlantPosition.objects.forEach((object) => {
		const windyPlant = new WindyPlant({
			position: {
				x: object.x,
				y: object.y - object.height / 2,
			},
			scale: object.width / 512,
			rotation: object.rotation,
			imgSrc: 'img/plants/windy-plant.png',
			frameRate: 30,
			frameBuffer: 8,
		});
		windyPlants.push(windyPlant);
	});
});

// ######################################
// ############_COLLECTABLES_############
// ######################################

const blueGems = [];

blueGemPositions.forEach((blueGemPosition) => {
	blueGemPosition.objects.forEach((object) => {
		const blueGem = new BlueGem({
			position: {
				x: object.x,
				y: object.y - 404,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/GemBlue.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		blueGems.push(blueGem);
	});
});

const redGems = [];

redGemPositions.forEach((redGemPosition) => {
	redGemPosition.objects.forEach((object) => {
		const redGem = new RedGem({
			position: {
				x: object.x,
				y: object.y - 512,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/GemRed.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		redGems.push(redGem);
	});
});

const fullHPs = [];

fullHPPositions.forEach((fullHPPosition) => {
	fullHPPosition.objects.forEach((object) => {
		const fullHP = new FullHealthPotion({
			position: {
				x: object.x,
				y: object.y - 276,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/PotionGreen.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		fullHPs.push(fullHP);
	});
});

const halfHPs = [];

halfHPPositions.forEach((halfHPPosition) => {
	halfHPPosition.objects.forEach((object) => {
		const halfHP = new HalfHealthPotion({
			position: {
				x: object.x,
				y: object.y - 276,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/PotionYellow.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		halfHPs.push(halfHP);
	});
});

const fullSPs = [];

fullSPPositions.forEach((fullSPPosition) => {
	fullSPPosition.objects.forEach((object) => {
		const fullSP = new FullSpellPowerPotion({
			position: {
				x: object.x,
				y: object.y - 276,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/PotionBlue.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		fullSPs.push(fullSP);
	});
});

const immunityPotions = [];

immunityPositions.forEach((immunityPosition) => {
	immunityPosition.objects.forEach((object) => {
		const immunityPotion = new ImmunityPotion({
			position: {
				x: object.x,
				y: object.y - 276,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/PotionRed.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		immunityPotions.push(immunityPotion);
	});
});

const goldenBooks = [];

goldenBookPositions.forEach((goldenBookPosition) => {
	goldenBookPosition.objects.forEach((object) => {
		const goldenBook = new GoldenBook({
			position: {
				x: object.x,
				y: object.y - 256,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/TomeYellow.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		goldenBooks.push(goldenBook);
	});
});

const redBooks = [];

redBookPositions.forEach((redBookPosition) => {
	redBookPosition.objects.forEach((object) => {
		const redBook = new RedBook({
			position: {
				x: object.x,
				y: object.y - 256,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/TomeRed.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		redBooks.push(redBook);
	});
});

const blueBooks = [];

blueBookPositions.forEach((blueBookPosition) => {
	blueBookPosition.objects.forEach((object) => {
		const blueBook = new BlueBook({
			position: {
				x: object.x,
				y: object.y - 256,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/TomeBlue.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		blueBooks.push(blueBook);
	});
});

const greenBooks = [];

greenBookPositions.forEach((greenBookPosition) => {
	greenBookPosition.objects.forEach((object) => {
		const greenBook = new GreenBook({
			position: {
				x: object.x,
				y: object.y - 256,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/TomeGreen.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		greenBooks.push(greenBook);
	});
});

const spellScrolls = [];

spellScrollPositions.forEach((spellScrollPosition) => {
	spellScrollPosition.objects.forEach((object) => {
		const spellScroll = new SpellScroll({
			position: {
				x: object.x,
				y: object.y - 404,
			},
			scale: object.width / 512,
			imgSrc: 'img/collectables/Scroll.png',
			frameRate: 1,
			frameBuffer: 1,
		});
		spellScrolls.push(spellScroll);
	});
});

// const goldenArmors = [];

// goldenArmorPositions.forEach((goldenArmorPosition) => {
// 	goldenArmorPosition.objects.forEach((object) => {
// 		const goldenArmor = new GoldenArmor({
// 			position: {
// 				x: object.x,
// 				y: object.y - 404,
// 			},
// 			scale: object.width / 512,
// 			imgSrc: 'img/collectables/Armor.png',
// 			frameRate: 1,
// 			frameBuffer: 1,
// 		});
// 		goldenArmors.push(goldenArmor);
// 	});
// });

// ######################################
// ######################################

const gravity = 1.75;

const player = new Player({
	position: {
		x: 396,
		y: 2048,
	},

	collisionBlocks: collisionBlocks,
	hazards: hazards,
	poisonPlants: poisonPlants,

	imgSrc: 'img/wizard/Wizard-Idle-Right.png',
	frameRate: 20,

	animations: {
		IdleRight: {
			imgSrc: 'img/wizard/Wizard-Idle-Right.png',
			frameRate: 20,
			frameBuffer: 3,
		},
		IdleLeft: {
			imgSrc: 'img/wizard/Wizard-Idle-Left.png',
			frameRate: 20,
			frameBuffer: 4,
		},
		WalkRight: {
			imgSrc: 'img/wizard/Wizard-Walk-Right.png',
			frameRate: 20,
			frameBuffer: 3,
		},
		WalkLeft: {
			imgSrc: 'img/wizard/Wizard-Walk-Left.png',
			frameRate: 20,
			frameBuffer: 3,
		},
		FallRight: {
			imgSrc: 'img/wizard/Wizard-Fall-Right.png',
			frameRate: 4,
			frameBuffer: 20,
		},
		FallLeft: {
			imgSrc: 'img/wizard/Wizard-Fall-Left.png',
			frameRate: 4,
			frameBuffer: 20,
		},
		JumpRight: {
			imgSrc: 'img/wizard/Wizard-Jump-Right.png',
			frameRate: 4,
			frameBuffer: 20,
		},
		JumpLeft: {
			imgSrc: 'img/wizard/Wizard-Jump-Left.png',
			frameRate: 4,
			frameBuffer: 20,
		},
		HitLeft: {
			imgSrc: 'img/wizard/wizard-hit-left.png',
			frameRate: 6,
			frameBuffer: 1,
		},
		HitRight: {
			imgSrc: 'img/wizard/wizard-hit-right.png',
			frameRate: 6,
			frameBuffer: 1,
		},
		DashLeft: {
			imgSrc: 'img/wizard/wizard-dash-left.png',
			frameRate: 16,
			frameBuffer: 1,
		},
		DashRight: {
			imgSrc: 'img/wizard/wizard-dash-right.png',
			frameRate: 16,
			frameBuffer: 1,
		},
	},
});

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
		// goldenBook.checkCollision(player);
	});

	redBooks.forEach((redBook) => {
		redBook.update();
		// redBook.checkCollision(player);
	});

	blueBooks.forEach((blueBook) => {
		blueBook.update();
		// blueBook.checkCollision(player);
	});

	greenBooks.forEach((greenBook) => {
		greenBook.update();
		// greenBook.checkCollision(player);
	});

	spellScrolls.forEach((spellScroll) => {
		spellScroll.update();
		spellScroll.checkCollision(player);
	});

	// goldenArmors.forEach((goldenArmor) => {
	// 	goldenArmor.update();
	// 	// goldenArmor.checkCollision(player);
	// });

	// ####### BARS #########
	const healthBarFill = document.getElementById('health-bar-fill');
	const healthPercentage = (player.health / 100) * 100;
	healthBarFill.style.width = `${healthPercentage}`;

	const healthBarText = document.getElementById('health-bar-text');
	healthBarText.textContent = `${player.health} HP`;

	const spellpowerBarFill = document.getElementById('spellpower-bar-fill');
	const spellpowerPercentage = (player.health / 100) * 100;
	spellpowerBarFill.style.width = `${spellpowerPercentage}`;

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
	else if (keys.e.pressed && !player.isHit && player.spellPower >= 8 / 60) {
		player.switchToSprite('DashRight');
		player.velocity.x = 64;
		player.lastDirection = 'right';
		player.useSpellPower(8 / 60);
		player.leftBorderCamPanning({ canvas, camera });
	} else if (keys.q.pressed && !player.isHit && player.spellPower >= 8 / 60) {
		player.switchToSprite('DashLeft');
		player.velocity.x = -64;
		player.lastDirection = 'left';
		player.useSpellPower(8 / 60);
		player.rightBorderCamPanning({ canvas, camera });
	} else if (player.velocity.y === 0 && !player.isHit) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('IdleRight');
		} else {
			player.switchToSprite('IdleLeft');
		}
	}

	// Rise
	if (keys.p.pressed && !player.isHit && player.spellPower >= 8 / 60) {
		player.velocity.y = -26;
		player.useSpellPower(8 / 60);
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
