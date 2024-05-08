const blueGems = [];

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

const redGems = [];

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

const fullHPs = [];

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

const halfHPs = [];

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

const fullSPs = [];

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

const immunityPotions = [];

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

const goldenBooks = [];

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

const redBooks = [];

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

const blueBooks = [];

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

const greenBooks = [];

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

const spellScrolls = [];

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
