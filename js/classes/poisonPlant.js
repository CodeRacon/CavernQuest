class PoisonPlant extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.initialCollisionArea = {
			width: 312,
			height: 128,
		};

		this.maxCollisionArea = {
			width: 312,
			height: 1436,
		};

		this.collisionArea = {
			width: this.initialCollisionArea.width,
			height: this.initialCollisionArea.height,
		};
	}

	update() {
		this.updateFrames();
		this.updateCollisionArea();
		super.update();
		// this.drawCollisionArea();
	}

	updateCollisionArea() {
		const frameRatio = (this.currentFrame + 1) / this.frameRate;
		const heightDiff =
			this.maxCollisionArea.height - this.initialCollisionArea.height;
		const widthDiff =
			this.maxCollisionArea.width - this.initialCollisionArea.width;
		if (frameRatio <= 0.5) {
			this.collisionArea.height =
				this.initialCollisionArea.height + heightDiff * frameRatio * 2;
			this.collisionArea.width =
				this.initialCollisionArea.width + widthDiff * frameRatio * 2;
		} else {
			this.collisionArea.height =
				this.maxCollisionArea.height - heightDiff * (frameRatio - 0.5) * 2;
			this.collisionArea.width =
				this.maxCollisionArea.width - widthDiff * (frameRatio - 0.5) * 2;
		}
	}

	checkCollision(player) {
		const topLeft = {
			x: this.position.x + (this.width - this.collisionArea.width) / 2,
			y: this.position.y + 128,
		};
		const bottomRight = {
			x: topLeft.x + this.collisionArea.width,
			y: topLeft.y + this.collisionArea.height,
		};

		if (
			player.hitbox.position.x + player.hitbox.width >= topLeft.x &&
			player.hitbox.position.x <= bottomRight.x &&
			player.hitbox.position.y + player.hitbox.height >= topLeft.y &&
			player.hitbox.position.y <= bottomRight.y
		) {
			player.applyPoisonDamage();
			playPlayerPoisened();
		}
	}

	drawCollisionArea() {
		const topLeft = {
			x: this.position.x + (this.width - this.collisionArea.width) / 2,
			y: this.position.y + 128,
		};
		const bottomRight = {
			x: topLeft.x + this.collisionArea.width,
			y: topLeft.y + this.collisionArea.height,
		};

		c.beginPath();
		c.rect(
			topLeft.x,
			topLeft.y,
			this.collisionArea.width,
			this.collisionArea.height
		);
		c.strokeStyle = 'red';
		c.lineWidth = 12;
		c.stroke();
	}
}
