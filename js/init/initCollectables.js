const blueGems = [];
const redGems = [];

const fullHPs = [];
const halfHPs = [];
const fullSPs = [];
const immunityPotions = [];

const goldenBooks = [];
const redBooks = [];
const blueBooks = [];
const greenBooks = [];

const spellScrolls = [];

const allCollectables = [
	blueGems,
	redGems,
	fullHPs,
	halfHPs,
	fullSPs,
	immunityPotions,
	goldenBooks,
	redBooks,
	blueBooks,
	greenBooks,
	spellScrolls,
];

function initCollectables() {
	allCollectables.forEach((collectableArray) => {
		collectableArray.length = 0;
	});

	initBlueGems();
	initRedGems();
	initFullHPPotions();
	initHalfHPPotions();
	initFullSPPotions();
	initImmunityPotions();
	initGoldenBook();
	initRedBook();
	initBlueBook();
	initGreenBook();
	initSpellScrolls();
}

function initBlueGems() {
	blueGemPositions.forEach((blueGemPosition) => {
		blueGemPosition.objects.forEach((object) => {
			const blueGem = new BlueGem({
				position: {
					x: object.x,
					y: object.y - 404,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/blue-gem.png',
				frameRate: 16,
				frameBuffer: 10,
			});
			blueGems.push(blueGem);
		});
	});
}

function initRedGems() {
	redGemPositions.forEach((redGemPosition) => {
		redGemPosition.objects.forEach((object) => {
			const redGem = new RedGem({
				position: {
					x: object.x,
					y: object.y - 512,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/red-gem.png',
				frameRate: 16,
				frameBuffer: 9,
			});
			redGems.push(redGem);
		});
	});
}

function initFullHPPotions() {
	fullHPPositions.forEach((fullHPPosition) => {
		fullHPPosition.objects.forEach((object) => {
			const fullHP = new FullHealthPotion({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/PotionGreen.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			fullHPs.push(fullHP);
		});
	});
}

function initHalfHPPotions() {
	halfHPPositions.forEach((halfHPPosition) => {
		halfHPPosition.objects.forEach((object) => {
			const halfHP = new HalfHealthPotion({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/PotionYellow.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			halfHPs.push(halfHP);
		});
	});
}

function initFullSPPotions() {
	fullSPPositions.forEach((fullSPPosition) => {
		fullSPPosition.objects.forEach((object) => {
			const fullSP = new FullSpellPowerPotion({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/PotionBlue.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			fullSPs.push(fullSP);
		});
	});
}

function initImmunityPotions() {
	immunityPositions.forEach((immunityPosition) => {
		immunityPosition.objects.forEach((object) => {
			const immunityPotion = new ImmunityPotion({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/PotionRed.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			immunityPotions.push(immunityPotion);
		});
	});
}

function initGoldenBook() {
	goldenBookPositions.forEach((goldenBookPosition) => {
		goldenBookPosition.objects.forEach((object) => {
			const goldenBook = new GoldenBook({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/TomeYellow.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			goldenBooks.push(goldenBook);
		});
	});
}

function initRedBook() {
	redBookPositions.forEach((redBookPosition) => {
		redBookPosition.objects.forEach((object) => {
			const redBook = new RedBook({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/TomeRed.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			redBooks.push(redBook);
		});
	});
}

function initBlueBook() {
	blueBookPositions.forEach((blueBookPosition) => {
		blueBookPosition.objects.forEach((object) => {
			const blueBook = new BlueBook({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/TomeBlue.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			blueBooks.push(blueBook);
		});
	});
}

function initGreenBook() {
	greenBookPositions.forEach((greenBookPosition) => {
		greenBookPosition.objects.forEach((object) => {
			const greenBook = new GreenBook({
				position: {
					x: object.x,
					y: object.y - 372,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/TomeGreen.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			greenBooks.push(greenBook);
		});
	});
}

function initSpellScrolls() {
	spellScrollPositions.forEach((spellScrollPosition) => {
		spellScrollPosition.objects.forEach((object) => {
			const spellScroll = new SpellScroll({
				position: {
					x: object.x,
					y: object.y - 404,
				},
				scale: object.width / 512,
				imgSrc: 'img/collectables/Scroll.png',
				frameRate: 1,
				frameBuffer: 1,
			});
			spellScrolls.push(spellScroll);
		});
	});
}
