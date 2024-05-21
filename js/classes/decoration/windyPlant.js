/**
 * Represents a windy deco-plant sprite in the game.
 */
class WindyPlant extends Sprite {
	constructor({
		position,
		imgSrc,
		frameRate,
		frameBuffer,
		scale = 1,
		rotation = 0,
	}) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
			rotation: (rotation * Math.PI) / 180,
		});

		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};
	}

	/**
	 * Updates the animation frames of the windy plant and calls the parent class's update method.
	 */
	update() {
		this.updateFrames();
		super.update();
	}
}
