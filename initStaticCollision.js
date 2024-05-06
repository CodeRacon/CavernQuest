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
