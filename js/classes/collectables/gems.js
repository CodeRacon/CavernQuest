/**
 * Represents a blue gem collectable in the game.
 * Blue gems can be collected by the player, incrementing the player's collectedBlueGems count.
 */
class BlueGem extends Sprite {
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

	update() {
		this.updateFrames();
		super.update();
	}

	checkCollision(player) {
		if (player.checkGemCollision(this)) {
			player.collectedBlueGems++;
			const index = blueGems.indexOf(this);
			if (index > -1) {
				blueGems.splice(index, 1);
			}
			playGemCollected();
		}
	}
}

/**
 * Represents a red gem collectable in the game.
 * Red gems can be collected by the player, incrementing the player's collectedRedGems count.
 */
class RedGem extends Sprite {
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
	 * Updates the gem object, including updating its animation frames and calling the parent class's update method.
	 */
	update() {
		this.updateFrames();
		super.update();
	}

	/**
	 * Checks for collision between the player and this gem, and handles the gem collection.
	 * If the player collides with this gem, the player's collected red gems count is incremented,
	 * the gem is removed from the redGems array, and the gemCollected sound effect is played.
	 *
	 * @param {Player} player - The player object to check for collision with.
	 */
	checkCollision(player) {
		if (player.checkGemCollision(this)) {
			player.collectedRedGems++;
			const index = redGems.indexOf(this);
			if (index > -1) {
				redGems.splice(index, 1);
			}
			playGemCollected();
		}
	}
}
