/**
 * Represents a blue flower sprite in the game.
 * The BlueFlower class extends the Sprite class and adds a default velocity to the sprite.
 */
class BlueFlower extends Sprite {
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
	 * Updates the animation frames of the blue flower decoration.
	 * This method is called as part of the update loop to animate the decoration.
	 */
	update() {
		this.updateFrames();
		super.update();
	}
}
