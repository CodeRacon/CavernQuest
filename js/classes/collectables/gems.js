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

	update() {
		this.updateFrames();
		super.update();
	}

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
