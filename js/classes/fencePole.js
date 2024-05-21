/**
 * Represents a fence pole in the game world.
 *
 * The `FencePole` class works as a simple collision block for the MovingBlob.
 * Every time a MovingBlob hits a FencePole, it changes it's x velocity direction.
 */
class FencePole {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
		this.color = 'transparent';
	}

	/**
	 * Draws the fence pole on the canvas.
	 *
	 * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
	 */
	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	/**
	 * Redraws the fence pole.
	 */
	update() {
		this.draw();
	}
}
