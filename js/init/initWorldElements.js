const bouncePlants = [];
const windyPlants = [];

const allWorldElements = [bouncePlants, windyPlants];

/**
 * Initializes the world elements, including bouncing plants and windy plants.
 * This function is called during the initialization of the game world.
 */
function initWorldElements() {
	allWorldElements.forEach((worldElementArray) => {
		worldElementArray.length = 0;
	});
	initBouncePlants();
	initWindyPlants();
}

/**
 * Initializes the bounce plants in the game world.
 * The bounce plants are positioned based on the `bouncePlantPositions` array data.
 * A new `BouncePlant` object is created for each position and added to the `bouncePlants` array.
 */
function initBouncePlants() {
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
}

/**
 * Initializes the windy plants in the game world.
 * The windy plant positions are defined in the `windyPlantPositions` array,
 * and for each position, a new `WindyPlant` object is created and added to the `windyPlants` array.
 */
function initWindyPlants() {
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
}
