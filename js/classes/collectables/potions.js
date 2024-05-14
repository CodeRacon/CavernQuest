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
