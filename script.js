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

hazardCollision.forEach((collision) => {
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

const gravity = 1.75;

const player = new Player({
	position: {
		x: 256,
		y: 2000,
	},

	collisionBlocks: collisionBlocks,

	imgSrc: 'img/wizard/Wizard-Idle-Right.png',
	frameRate: 20,

	animations: {
		IdleRight: {
			imgSrc: 'img/wizard/Wizard-Idle-Right.png',
			frameRate: 20,
			frameBuffer: 4,
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

function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.save();
	c.scale(0.125, 0.125);

	background.update();

	collisionBlocks.forEach((collisionBlock) => {
		collisionBlock.update();
	});

	hazards.forEach((hazard) => {
		hazard.update();
	});

	player.update();

	player.velocity.x = 0;

	if (keys.d.pressed) {
		player.switchToSprite('WalkRight');
		player.velocity.x = 28;
		player.lastDirection = 'right';
	} else if (keys.a.pressed) {
		player.switchToSprite('WalkLeft');
		player.velocity.x = -28;
		player.lastDirection = 'left';
	} else if (player.velocity.y === 0) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('IdleRight');
		} else {
			player.switchToSprite('IdleLeft');
		}
	}

	if (player.velocity.y < 0) {
		if (player.lastDirection === 'right') {
			player.switchToSprite('JumpRight');
		} else {
			player.switchToSprite('JumpLeft');
		}
	} else if (player.velocity.y > 0) {
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
				player.velocity.y = -46;
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
