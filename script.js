const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 512;

const collisionBlocks = [];

groundCollisions.forEach((collision) => {
	collision.objects.forEach((object) => {
		const collisionBlock = new CollisionBlock({
			polygon: object.polygon,
			position: {
				x: object.x,
				y: object.y,
			},
		});
		collisionBlocks.push(collisionBlock);
	});
});

frameCollisions.forEach((collision) => {
	collision.objects.forEach((object) => {
		const collisionBlock = new CollisionBlock({
			polygon: object.polygon,
			position: {
				x: object.x,
				y: object.y,
			},
		});
		collisionBlocks.push(collisionBlock);
	});
});

const gravity = 0.25;

const player = new Player({
	x: 0,
	y: 0,
});
const player2 = new Player({
	x: 200,
	y: 50,
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
	c.restore();

	player.update();
	player2.update();

	player.velocity.x = 0;
	if (keys.d.pressed) {
		player.velocity.x = 4;
	} else if (keys.a.pressed) {
		player.velocity.x = -4;
	}
}

animate();

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'd':
			keys.d.pressed = true;
			break;
		case 'a':
			keys.a.pressed = true;
			break;
		case 'w':
			if (player.velocity.y == 0) {
				player.velocity.y = -10;
			}
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
