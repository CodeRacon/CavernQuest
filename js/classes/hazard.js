class Hazard {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
		this.collisionCooldown = 0;
	}

	draw() {
		// draws out hazard objects
		c.fillStyle = '#ff00e16a';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(player) {
		this.draw();

		// check for collision of player and hazard-object
		if (
			player.hitbox.position.x + player.hitbox.width >= this.position.x &&
			player.hitbox.position.x <= this.position.x + this.width &&
			player.hitbox.position.y + player.hitbox.height >= this.position.y &&
			player.hitbox.position.y <= this.position.y + this.height
		) {
			// chek for collision cooldown to be done
			if (this.collisionCooldown <= 0) {
				// detected collision, reduce player health by 2 points
				player.health -= 2;

				// set collision cooldown to 60 frames (= 1 Second)
				this.collisionCooldown = 60;
				player.takeDamage();
			}
		}

		// reduce collision cooldown in each frame
		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}
	}
}
