/**
 * Represents a spell scroll collectable item in the game.
 * Inherits from the Sprite class and adds collision detection logic.
 */
class SpellScroll extends Sprite {
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
		if (player.checkScrollCollision(this)) {
			player.collectedScrolls++;
			const index = spellScrolls.indexOf(this);
			if (index > -1) {
				spellScrolls.splice(index, 1);
			}
			playScrollFound();
		}
	}
}

/**
 * Represents a golden armor collectable item in the game.
 * Inherits from the Sprite class
 */
class GoldenArmor extends Sprite {
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
}
