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

	update() {
		this.updateFrames();
		super.update();
	}
}
