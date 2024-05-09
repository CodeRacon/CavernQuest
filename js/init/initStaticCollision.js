const collisionBlocks = [];
const hazards = [];
const fencePoles = [];

function initStaticCollision() {
	initCollisionBlocks();
	initHazards();
	initFencePoles();
}

function initCollisionBlocks() {
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
}

function initHazards() {
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
}

function initFencePoles() {
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
}
