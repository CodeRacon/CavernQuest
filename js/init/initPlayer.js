let player;

/**
 * Initializes the player object with various properties and animations.
 *
 * The `initPlayer` function creates one new `Player` object with the following properties:
 * - `position`: The initial position of the player.
 * - `collisionBlocks`: The collision blocks that the player can collide with.
 * - `hazards`: The hazards that the player can collide with.
 * - `poisonPlants`: The poison plants that the player can collide with.
 * - `imgSrc`: The source image for the player's idle right animation.
 * - `frameRate`: The frame rate for the player's animations.
 * - `animations`: An object containing the various animations for the player, such as idle, walk, jump, fall, hit, dash, and death.
 */
function initPlayer() {
	console.log('init player');

	player = new Player({
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
			Dead: {
				imgSrc: 'img/wizard/wizard-dead.png',
				frameRate: 20,
				frameBuffer: 6,
			},
		},
	});
}
