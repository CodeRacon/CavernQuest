const bouncePlants = [];
const windyPlants = [];

const allWorldElements = [bouncePlants, windyPlants];

function initWorldElements() {
	allWorldElements.forEach((worldElementArray) => {
		worldElementArray.length = 0;
	});
	initBouncePlants();
	initWindyPlants();
}

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
