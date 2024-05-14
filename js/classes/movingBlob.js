class MovingBlob extends Sprite {
	constructor({
		position,
		imgSrc,
		frameRate,
		frameBuffer,
		scale = 1,
		fencePoles,
		speed,
	}) {
		super({
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.position = position;
		this.velocity = {
			x: speed,
			y: 0,
		};
		this.fencePoles = fencePoles;
		this.direction = 1;
		this.collisionCooldown = 0;

		this.isHit = false;
		this.hitCount = 0;

		this.requiredHits = 3;

		this.initialSpeed = speed;
		this.jumpAtHitVelocity = -30;
		this.removeAfterHitDelay = 20;

		this.hitOpacity = 0;
	}

	update(player) {
		this.updateFrames();

		if (this.isHit) {
			this.hitCount++;
			this.isHit = false;

			if (this.hitCount === 1) {
				playMovingBlob01();
				this.velocity.x *= 1.33;
				this.hitOpacity = 0.2;
			} else if (this.hitCount === 2) {
				playMovingBlob02();
				this.velocity.x *= 1.66;
				this.hitOpacity = 0.4;
			} else if (this.hitCount === this.requiredHits) {
				this.velocity.y = this.jumpAtHitVelocity;
				playMovingBlob03();
				this.removeAfterHitDelay;
			}
		}

		if (this.hitCount === this.requiredHits) {
			this.velocity.y += gravity;
			this.position.y += this.velocity.y;
			this.removeAfterHitDelay--;

			if (this.removeAfterHitDelay <= 0) {
				const index = movingBlobs.indexOf(this);
				if (index !== -1) {
					movingBlobs.splice(index, 1);
				}
			}
		} else {
			// check collision with fencePoles
			for (let i = 0; i < this.fencePoles.length; i++) {
				const fencePole = this.fencePoles[i];
				if (
					this.position.x < fencePole.position.x + fencePole.width &&
					this.position.x + this.width > fencePole.position.x &&
					this.position.y < fencePole.position.y + fencePole.height &&
					this.position.y + this.height > fencePole.position.y
				) {
					// collision detected, change direction
					this.direction *= -1;
					break;
				}
			}
		}

		// update position based on tempo and direction
		this.position.x += this.velocity.x * this.direction;

		// deifne offset for visible area of MovingBlob
		const offset = {
			x: 72,
			y: 72,
		};

		// check for collision of MovingBlob with player
		if (
			player.hitbox.position.x + player.hitbox.width >=
				this.position.x + offset.x &&
			player.hitbox.position.x <= this.position.x + this.width - offset.x &&
			player.hitbox.position.y + player.hitbox.height >=
				this.position.y + offset.y &&
			player.hitbox.position.y <= this.position.y + this.height - offset.y
		) {
			// check for collision cooldown to be done
			if (this.collisionCooldown <= 0) {
				// collision detected, reduce player health by 10 points
				player.health -= 10;
				player.takeDamage();
				playPlayerHurt();

				// set collision cooldown to 60 frames (= 1 Second)
				this.collisionCooldown = 60;
			}
		}

		// reduce collision cooldown in each frame
		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}

		super.update();
	}

	draw() {
		if (this.hitOpacity > 0) {
			// create seperate canvas for filter
			const filterCanvas = document.createElement('canvas');
			filterCanvas.width = this.width;
			filterCanvas.height = this.height;
			const filterCtx = filterCanvas.getContext('2d');

			// draw sprite onto filter canvas
			filterCtx.drawImage(
				this.image,
				this.currentFrame * (this.image.width / this.frameRate),
				0,
				this.image.width / this.frameRate,
				this.image.height,
				0,
				0,
				this.width,
				this.height
			);

			// use filter on new canvas context
			filterCtx.globalCompositeOperation = 'source-atop';
			filterCtx.fillStyle = `rgba(255, 0, 0, ${this.hitOpacity})`;
			filterCtx.fillRect(0, 0, this.width, this.height);

			// draw filtered canvas onto main canvas
			c.drawImage(filterCanvas, this.position.x, this.position.y);
		} else {
			super.draw();
		}
	}
}
