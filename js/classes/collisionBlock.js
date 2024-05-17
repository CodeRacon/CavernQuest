/**
 * Represents a collision block in the game world.
 * Collision blocks are all rectangular areas that are used for collision detection.
 */
class CollisionBlock {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
		this.color = 'transparent';
	}

	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
	}
}
