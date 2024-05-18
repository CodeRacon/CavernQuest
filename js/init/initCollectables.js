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

/**
 * An array containing all the collectable objects in the game.
 */
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

/**
 * Initializes all collectable objects in the game world.
 * This function is responsible for creating and adding all types of collectables to the game.
 */
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

/**
 * Initializes the blue gems in the game world.
 * This function iterates through the `blueGemPositions` array and creates a new `BlueGem` object for each position.
 * The created `BlueGem` objects are then added to the `blueGems` array.
 */
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

/**
 * Initializes the red gem collectables in the game.
 * This function iterates through the `redGemPositions` array and creates a new `RedGem` object
 * for each position. The created `RedGem` objects are then added to the `redGems` array.
 */
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

/**
 * Initializes full health potion collectables in the game world.
 * This function iterates through the `fullHPPositions` array and creates a new `FullHealthPotion` object
 * for each position. The created `FullHealthPotion` objects are then added to the `fullHPs` array.
 */
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

/**
 * Initializes the half health potion collectables in the game world.
 * This function iterates through the `halfHPPositions` array and creates a new `HalfHealthPotion` object
 * for each position. The created potions are then added to the `halfHPs` array.
 */
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

/**
 * Initializes the full spell power potion collectables in the game.
 * This function iterates through the `fullSPPositions` array and creates a new `FullSpellPowerPotion` object
 * for each position. The created potions are then added to the `fullSPs` array.
 */
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

/**
 * Initializes immunity potion collectables in the game world.
 * This function iterates through the `immunityPositions` array and creates new `ImmunityPotion` objects
 * for each position. The created `ImmunityPotion` objects are then added to the `immunityPotions` array.
 */
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

/**
 * Initializes the Golden Book collectables in the game which are also quest-items.
 * The Golden Book collectable is positioned based on the `goldenBookPositions` array data.
 * A new `GoldenBook` object is created for each Golden Book position and added to the `goldenBooks` array.
 */
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

/**
 * Initializes the Red Book collectables in the game which is also a quest-item.
 * The Red Book collectable is positioned based on the `redBookPositions` array data.
 * A new `RedBook` object is created for each Red Book position and added to the `redBooks` array.
 */
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

/**
 * Initializes the Blue Book collectables in the game which is also a quest-item.
 * The Blue Book collectable is positioned based on the `blueBookPositions` array data.
 * A new `BlueBook` object is created for each Blue Book position and added to the `blueBooks` array.
 */
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

/**
 * Initializes the Green Book collectables in the game which is also a quest-item.
 * The Green Book collectable is positioned based on the `greenBookPositions` array data.
 * A new `GreenBook` object is created for each Green Book position and added to the `greenBooks` array.
 */
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

/**
 * Initializes the Spell Scroll collectables in the game which are quest-items.
 * The Spell Scroll collectable is positioned based on the `spellScrollPositions` array data.
 * A new `SpellScroll` object is created for each Spell Scroll position and added to the `spellScrolls` array.
 */
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
