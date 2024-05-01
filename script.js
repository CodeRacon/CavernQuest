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
				x: object.x - 640,
				y: object.y,
			},
			scale: 1.66,
			imgSrc: 'img/enemies/SlimeBasic.png',
			frameRate: 30,
			frameBuffer: 4,
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
			frameBuffer: 5,
		});
		poisonPlants.push(poisonPlant);
	});
});

const gravity = 1.75;

const player = new Player({
	position: {
		x: 360,
		y: 2064,
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
		movingBlob.update(player);
	});

	hangingBlobs.forEach((hangingBlob) => {
		hangingBlob.update(player);
	});

	bouncePlants.forEach((bouncePlant) => {
		bouncePlant.update();
	});

	poisonPlants.forEach((poisonPlant) => {
		poisonPlant.update();
		poisonPlant.checkCollision(player);
	});

	const healthBarFill = document.getElementById('health-bar-fill');
	const healthPercentage = (player.health / 100) * 100;
	healthBarFill.style.width = `${healthPercentage}`;

	const healthBarText = document.getElementById('health-bar-text');
	healthBarText.textContent = `${player.health} HP`;

	const spellpowerBarFill = document.getElementById('spellpower-bar-fill');
	const spellpowerPercentage = (player.health / 100) * 100;
	spellpowerBarFill.style.width = `${spellpowerPercentage}`;

	const spellpowerBarText = document.getElementById('spellpower-bar-text');
	spellpowerBarText.textContent = `${player.spellPower} SP`;

	player.update(bouncePlants, collisionBlocks, hazards);

	if (player.currentSpell) {
		player.currentSpell.update(movingBlobs);
	}

	player.velocity.x = 0;

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
	} else if (player.velocity.y === 0 && !player.isHit) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('IdleRight');
		} else {
			player.switchToSprite('IdleLeft');
		}
	}

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
		case 'd':
			keys.d.pressed = true;
			break;
		case 'a':
			keys.a.pressed = true;
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
	}
});

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		// ...
		case ' ':
			player.castSpell();
			break;
	}
});
