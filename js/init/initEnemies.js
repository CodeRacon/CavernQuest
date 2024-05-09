const movingBlobs = [];
const hangingBlobs = [];
const poisonPlants = [];

const allEnemies = [movingBlobs, hangingBlobs, poisonPlants];

function initEnemies() {
	allEnemies.forEach((enemyArray) => {
		enemyArray.length = 0;
	});
	initMovingBlobs();
	initHangingBlobs();
	initPoisonPlants();
}

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
