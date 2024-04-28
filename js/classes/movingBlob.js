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
			y: 1,
		};
		this.fencePoles = fencePoles;
		this.direction = 1;
		this.collisionCooldown = 0;
	}

	update(player) {
		this.updateFrames();

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
}
