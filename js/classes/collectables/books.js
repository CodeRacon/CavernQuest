/**
 * Represents a golden book collectable in the game.
 * The golden book extends the Sprite class and has a position, image source, frame rate, frame buffer, and scale.
 * When the player collides with the golden book, the player's `collectedBooks.yellowBook` property is set to true,
 * the golden book is removed from the `goldenBooks` array, and the `playMagicTomeFound()` function is called.
 */
class GoldenBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};
	}

	/**
	 * Updates the collectible book object.
	 * Calls the `updateFrames()` method to update the animation frames,
	 * then calls the `update()` method of the parent class.
	 */
	update() {
		this.updateFrames();
		super.update();
	}

	/**
	 * Checks for collision between the player and the book object.
	 * If a collision is detected, the yellow book is marked as collected, the book is removed from the goldenBooks array, and a sound effect is played.
	 * @param {Player} player - The player object to check for collision with.
	 */
	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.yellowBook = true;
			const index = goldenBooks.indexOf(this);
			if (index > -1) {
				goldenBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
	}
}

/**
 * Represents a red book collectable in the game.
 * The red book extends the Sprite class and has a position, image source, frame rate, frame buffer, and scale.
 * When the player collides with the red book, the player's `collectedBooks.redBook` property is set to true,
 * the red book is removed from the `redBooks` array, and the `playMagicTomeFound()` function is called.
 */
class RedBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};
	}

	/**
	 * Updates the collectible book object.
	 * Calls the `updateFrames()` method to update the animation frames,
	 * then calls the `update()` method of the parent class.
	 */
	update() {
		this.updateFrames();
		super.update();
	}

	/**
	 * Checks for collision between the player and the red book collectable.
	 * If a collision is detected, the player's `collectedBooks.redBook` property is set to `true`,
	 * the red book is removed from the `redBooks` array, and a sound effect is played.
	 *
	 * @param {Player} player - The player object to check for collision.
	 */
	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.redBook = true;
			const index = redBooks.indexOf(this);
			if (index > -1) {
				redBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
	}
}

/**
 * Represents a green book collectable in the game.
 * The green book extends the Sprite class and has a position, image source, frame rate, frame buffer, and scale.
 * When the player collides with the green book, the player's `collectedBooks.greenBook` property is set to true,
 * the green book is removed from the `greenBooks` array, and the `playMagicTomeFound()` function is called.
 */
class GreenBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};
	}

	/**
	 * Updates the object's frames and calls the parent class's update method.
	 */
	update() {
		this.updateFrames();
		super.update();
	}

	/**
	 * Checks if the player has collided with this collectable book.
	 * If a collision is detected, the player's `greenBook` property is set to `true`,
	 * the book is removed from the `greenBooks` array, and a sound effect is played.
	 *
	 * @param {Player} player - The player object to check for collision.
	 */
	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.greenBook = true;
			const index = greenBooks.indexOf(this);
			if (index > -1) {
				greenBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
	}
}

/**
 * Represents a blue book collectable in the game.
 * The blue book extends the Sprite class and has a position, image source, frame rate, frame buffer, and scale.
 * When the player collides with the blue book, the player's `collectedBooks.blueBook` property is set to true,
 * the blue book is removed from the `blueBooks` array, and the `playMagicTomeFound()` function is called.
 */
class BlueBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};
	}

	/**
	 * Updates the object's frames and calls the parent class's update method.
	 */
	update() {
		this.updateFrames();
		super.update();
	}

	/**
	 * Checks for collision between the player and this collectable book.
	 * If a collision is detected, the player's `collectedBooks.blueBook` property is set to `true`,
	 * the book is removed from the `blueBooks` array, and a sound effect is played.
	 *
	 * @param {Player} player - The player object to check for collision against.
	 */
	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.blueBook = true;
			const index = blueBooks.indexOf(this);
			if (index > -1) {
				blueBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
	}
}
