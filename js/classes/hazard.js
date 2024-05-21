/**
 * Represents a hazard object in the game.
 *
 * Hazards are rectangular objects, just like collision blocks, used to detect collisions but
 * add damage to the player in case of collision.
 * They have a position, width, and height that define their size and location.
 *
 * @class Hazard
 * @param {Object} options - The options for creating a new Hazard instance.
 * @param {Object} options.position - The x and y coordinates of the hazard-object.
 * @param {number} options.width - The width of the hazard-object.
 * @param {number} options.height - The height of the hazard-object.
 */
class Hazard {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
	}

	/**
	 * Draws the hazard on the canvas.
	 */
	draw() {
		c.fillStyle = 'transparent';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	/**
	 * Updates the hazard by drawing it.
	 */
	update() {
		this.draw();
	}
}
