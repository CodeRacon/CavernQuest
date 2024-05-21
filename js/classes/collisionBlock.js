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

	/**
	 * Draws the collision block on the canvas.
	 *
	 * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
	 */
	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	/**
	 * Updates the collision block by drawing it.
	 */
	update() {
		this.draw();
	}
}
