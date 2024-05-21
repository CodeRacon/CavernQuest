/**
 * Represents a bouncing plant sprite in the game.
 *
 * The `BouncePlant` class extends the `Sprite` class and represents a special plant
 * object in the game: When the player jumps on it, it acts like a trampolin.
 * It has a position, velocity, and updates its frames during
 * the game loop.
 */
class BouncePlant extends Sprite {
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
	}

	/**
	 * Updates the state of the bounce plant.
	 * Calls the `updateFrames()` method to update the animation frames,
	 * then calls the `update()` method of the parent class.
	 */
	update() {
		this.updateFrames();

		super.update();
	}
}
