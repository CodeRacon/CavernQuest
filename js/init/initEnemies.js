const movingBlobs = [];
const hangingBlobs = [];
const poisonPlants = [];

const allEnemies = [movingBlobs, hangingBlobs, poisonPlants];

/**
 * Initializes all enemy objects in the game.
 * This function is responsible for creating and adding all enemy objects to the appropriate arrays.
 * It calls the initialization functions for each type of enemy: moving blobs, hanging blobs, and poison plants.
 */
function initEnemies() {
	allEnemies.forEach((enemyArray) => {
		enemyArray.length = 0;
	});
	initMovingBlobs();
	initHangingBlobs();
	initPoisonPlants();
}

/**
 * Initializes the moving blobs in the game world.
 * The moving blobs are enemies that move horizontally between set 'FencePole' - objects.
 * This function iterates through the `movingBlobPositions` array and creates a new `MovingBlob` instance
 * for each position, setting its properties such as position, speed, and image source.
 * The created `MovingBlob` instances are then added to the `movingBlobs` array.
 */
function initMovingBlobs() {
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
}

/**
 * Initializes the hanging blob enemies in the game world.
 * This function iterates through the `hangingBlobPositions` array and creates a new `HangingBlob` instance
 * for each position, setting its properties such as position, scale, image source, frame rate,
 * and frame buffer. The created `HangingBlob` instances are then added to the `hangingBlobs` array.
 */
function initHangingBlobs() {
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
}

/**
 * Initializes the poison plant enemies in the game world.
 * This function iterates through the `poisonPlantPositions` array and creates a new `PoisonPlant` instance
 * for each position, setting its properties such as position, scale, image source, frame rate,
 * and frame buffer. The created `PoisonPlant` instances are then added to the `poisonPlants` array.
 */
function initPoisonPlants() {
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
}
