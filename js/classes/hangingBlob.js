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

		c.fillStyle = '#00eeff8c';
		c.fillRect(
			this.sensor.position.x - 64,
			this.sensor.position.y,
			this.sensor.width,
			this.sensor.height
		);

		if (this.isAwake) {
			// Definiere den Offset für den sichtbaren Bereich des HangingBlobs
			const offset = 110;

			// Überprüfe die Kollision zwischen dem HangingBlob und dem Spieler
			if (
				player.hitbox.position.x + player.hitbox.width >=
					this.position.x + offset &&
				player.hitbox.position.x <= this.position.x + this.width - offset &&
				player.hitbox.position.y + player.hitbox.height >= this.position.y &&
				player.hitbox.position.y <= this.position.y + this.height
			) {
				// Überprüfe, ob der Kollisions-Cooldown abgelaufen ist
				if (this.collisionCooldown <= 0) {
					// Kollision erkannt, verringere die Lebenspunkte des Spielers
					player.health -= 10;

					// Setze den Kollisions-Cooldown auf einen bestimmten Wert, z.B. 60 Frames (ca. 1 Sekunde bei 60 FPS)
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
