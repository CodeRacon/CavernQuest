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
			// define offset for visible area of HangingBlob
			const offset = 110;

			// check for collision of HangingBlob with player
			if (
				player.hitbox.position.x + player.hitbox.width >=
					this.position.x + offset &&
				player.hitbox.position.x <= this.position.x + this.width - offset &&
				player.hitbox.position.y + player.hitbox.height >= this.position.y &&
				player.hitbox.position.y <= this.position.y + this.height
			) {
				// check for collision cooldown to be done
				if (this.collisionCooldown <= 0) {
					// collision detected, reduce player health by 10 points
					player.health -= 20;
					player.takeDamage();

					this.collisionCooldown = 60;
				}
			}
		}

		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}

		super.update();
	}

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
		}
	}
}
