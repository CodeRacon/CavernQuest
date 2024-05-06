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
