const collisionBlocks = [];
const hazards = [];
const fencePoles = [];

/**
 * Initializes the static collision objects in the game world, including collision blocks, hazards, and fence poles.
 * This function is called during the game initialization process to set up the collision detection and handling.
 */
function initStaticCollision() {
	initCollisionBlocks();
	initHazards();
	initFencePoles();
}

/**
 * Initializes collision blocks for the game world.
 * The `initCollisionBlocks` function iterates through the `groundCollisions` and `frameCollisions` arrays,
 * creating `CollisionBlock` objects for each collision object and adding them to the `collisionBlocks` array.
 *
 * The `CollisionBlock` objects represent static collision geometry in the game world, such as the ground and
 * the frame around the playable area.
 */
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

/**
 * Initializes hazards in the game world based on collision data.
 * The hazard collision data is iterated over, and for each collision object, a new Hazard instance is created and added to the hazards array.
 */
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

/**
 * Initializes the fence poles in the game world.
  * This function iterates through the `fencePoleCollisions` array and creates a 
	* new `FencePole` object for each collision object. 
	The `FencePole` objects are then added to the `fencePoles` array.
 */
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
