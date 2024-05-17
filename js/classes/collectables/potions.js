/**
 * Represents a full health potion that can be collected by the player.
 * When the player collides with the potion, their full HP is increased.
 */
class FullHealthPotion extends Sprite {
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
		if (player.checkPotionCollision(this)) {
			player.collectedPotions.fullHP++;
			const index = fullHPs.indexOf(this);
			if (index > -1) {
				fullHPs.splice(index, 1);
			}
			playPotionFound();
		}
	}
}

/**
 * Represents a half health potion collectable in the game.
 * When collected by the player, it increases the player's health by a small amount.
 */
class HalfHealthPotion extends Sprite {
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
		if (player.checkPotionCollision(this)) {
			player.collectedPotions.halfHP++;
			const index = halfHPs.indexOf(this);
			if (index > -1) {
				halfHPs.splice(index, 1);
			}
			playPotionFound();
		}
	}
}

/**
 * Represents a full spell power potion that can be collected by the player.
 * When collected, it increases the player's full spell power.
 */
class FullSpellPowerPotion extends Sprite {
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
		if (player.checkPotionCollision(this)) {
			player.collectedPotions.fullSP++;
			const index = fullSPs.indexOf(this);
			if (index > -1) {
				fullSPs.splice(index, 1);
			}
			playPotionFound();
		}
	}
}

/**
 * Represents an immunity potion that can be collected by the player.
 * When collected, it increases the player's immunity.
 */
class ImmunityPotion extends Sprite {
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
		if (player.checkPotionCollision(this)) {
			player.collectedPotions.immunity++;
			const index = immunityPotions.indexOf(this);
			if (index > -1) {
				immunityPotions.splice(index, 1);
			}
			playPotionFound();
		}
	}
}
