const bouncePlants = [];

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

const blueFlowers = [];

blueFlowerPositions.forEach((blueFlowerPosition) => {
	blueFlowerPosition.objects.forEach((object) => {
		const blueFlower = new BlueFlower({
			position: {
				x: object.x,
				y: object.y,
			},
			scale: object.width / 768,
			rotation: object.rotation * (Math.PI / 180),
			imgSrc: 'img/plants/BluePlant.png',
			frameRate: 60,
			frameBuffer: 10,
		});
		blueFlowers.push(blueFlower);
	});
});

const windyPlants = [];

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
