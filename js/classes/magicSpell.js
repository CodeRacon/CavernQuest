class MagicSpell extends Sprite {
	constructor({ position, direction, imgSrc, frameRate, frameBuffer, scale }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.direction = direction;

		if (this.direction === 'left') {
			this.position.x -= 512;
			this.position.y += 320;
		} else {
			this.position.x += 512 + 256;
			this.position.y += 320;
		}

		this.hitEnemies = [];
	}

	update() {
		this.updateFrames();
		super.update();

		const collisionHeight = this.height * 0.4;
		const collisionWidth = this.width * 0.7;

		for (let i = 0; i < movingBlobs.length; i++) {
			const blob = movingBlobs[i];
			if (
				this.position.x < blob.position.x + blob.width &&
				this.position.x + collisionWidth > blob.position.x &&
				this.position.y < blob.position.y + blob.height &&
				this.position.y + collisionHeight > blob.position.y
			) {
				// collision detected
				if (blob.hitCount < 3 && !this.hitEnemies.includes(blob)) {
					blob.isHit = true;
					this.hitEnemies.push(blob);
				}
			}
		}
	}
}
