class GoldenBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
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

	update() {
		this.updateFrames();
		super.update();
	}
}

class RedBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
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

	update() {
		this.updateFrames();
		super.update();
	}
}

class GreenBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
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

	update() {
		this.updateFrames();
		super.update();
	}
}

class BlueBook extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
			position,
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

	update() {
		this.updateFrames();
		super.update();
	}
}
