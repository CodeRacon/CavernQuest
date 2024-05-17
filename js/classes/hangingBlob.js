/**
 * Represents a hanging blob enemy in the game.
 * It hangs upside down on the ceiling and falls, if player enters a certain proximity-area.
 * The HangingBlob class extends the Sprite class and handles the behavior and
 * collision detection of the HangingBlob enemy.
 *
 * @class HangingBlob
 * @extends Sprite
 * @param {Object} options - The options for creating a HangingBlob instance.
 * @param {Object} options.position - The initial position of the hanging blob.
 * @param {string} options.imgSrc - The image source for the hanging blob sprite.
 * @param {number} options.frameRate - The frame rate for the hanging blob animation.
 * @param {number} options.frameBuffer - The frame buffer for the hanging blob animation.
 * @param {number} [options.scale=1] - The scale factor for the hanging blob sprite.
 */
class HangingBlob extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
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

		this.isAwake = false;
		this.collisionCooldown = 0;

		this.sensor = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			width: this.width * 1.25,
			height: this.height * 5,
		};
	}

	update(player) {
		this.updateFrames();

		if (!this.isAwake) {
			this.checkPlayerProximity(player);
		} else {
			this.position.y += this.velocity.y;
			this.velocity.y += gravity;
		}

		this.sensor = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			width: this.width * 1.25,
			height: this.height * 3.25,
		};

		c.fillStyle = 'transparent';
		c.fillRect(
			this.sensor.position.x - 64,
			this.sensor.position.y,
			this.sensor.width,
			this.sensor.height
		);

		if (this.isAwake) {
			const offset = 110;

			if (
				player.hitbox.position.x + player.hitbox.width >=
					this.position.x + offset &&
				player.hitbox.position.x <= this.position.x + this.width - offset &&
				player.hitbox.position.y + player.hitbox.height >= this.position.y &&
				player.hitbox.position.y <= this.position.y + this.height
			) {
				if (this.collisionCooldown <= 0) {
					player.health -= 20;
					player.takeDamage();
					playPlayerHurtAlt();

					this.collisionCooldown = 60;
				}
			}
		}

		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}

		super.update();
	}

	/**
	 * Checks if the player is within the proximity of the sensor associated with this hanging blob.
	 * If the player is within the sensor's bounds, the hanging blob is set to be awake and a sound is played.
	 * @param {Object} player - The player object to check for proximity.
	 * @returns {void}
	 */
	checkPlayerProximity(player) {
		if (
			player.hitbox.position.x + player.hitbox.width >=
				this.sensor.position.x &&
			player.hitbox.position.x <= this.sensor.position.x + this.sensor.width &&
			player.hitbox.position.y + player.hitbox.height >=
				this.sensor.position.y &&
			player.hitbox.position.y <= this.sensor.position.y + this.sensor.height
		) {
			this.isAwake = true;
			playBlobFall();
		}
	}
}
