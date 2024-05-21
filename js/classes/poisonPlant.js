/**
 * Represents a poison plant in the game. The poison plant has a collision area
 * that grows larger as the animation progresses.
 * When the player's hitbox collides with the poison plant's collision area,
 * the player takes poison damage.
 */
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

	/**
	 * Updates the poison plant's state, including its animation frames, collision area,
	 * and calls the parent class's update method.
	 */
	update() {
		this.updateFrames();
		this.updateCollisionArea();
		super.update();
	}

	/**
	 * Updates the collision area of the poison plant based on the current frame of the animation.
	 * The collision area starts at a smaller size and gradually expands to a larger size over the course of the animation.
	 * This allows the collision detection to match the visual size of the poison plant as it grows.
	 */
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

	/**
	 * Checks if the player's hitbox collides with the poison plant's collision area.
	 * If a collision is detected, the player is applied poison damage and the poison sound effect is played.
	 * @param {Player} player - The player object to check for collision.
	 */
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

	/**
	 * Draws the collision area for the poison plant.
	 * The collision area is represented by a rectangle with a red border.
	 * The position and size of the collision area are calculated based on the
	 * position and size of the poison plant.
	 */
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
