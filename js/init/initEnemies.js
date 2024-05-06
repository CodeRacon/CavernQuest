const movingBlobs = [];

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

const hangingBlobs = [];

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

const poisonPlants = [];

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
