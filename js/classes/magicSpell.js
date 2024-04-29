class MagicSpell extends Sprite {
	constructor({ position, direction, imgSrc, frameRate, frameBuffer, scale }) {
		super({
			position,
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.direction = direction;

		if (this.direction === 'left') {
			this.position.x -= 512;
			this.position.y += 320;
		} else {
			this.position.x += 512 + 256;
			this.position.y += 320;
		}
	}

	update() {
		this.updateFrames();
		super.update();
	}
}
