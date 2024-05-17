/**
 * Represents a sprite object that can be drawn on a canvas.
 *
 * @class Sprite
 * @param {Object} options - The options for creating the sprite.
 * @param {Object} options.position - The initial position of the sprite.
 * @param {string} options.imgSrc - The source URL of the sprite image.
 * @param {number} [options.frameRate=1] - The number of frames in the sprite animation.
 * @param {number} [options.frameBuffer=4] - The number of frames to buffer between animation frames.
 * @param {number} [options.scale=1] - The scale factor to apply to the sprite.
 * @param {number} [options.rotation=0] - The initial rotation of the sprite in radians.
 */
class Sprite {
	constructor({
		position,
		imgSrc,
		frameRate = 1,
		frameBuffer = 4,
		scale = 1,
		rotation = 0,
	}) {
		this.position = position;
		this.scale = scale;
		this.rotation = rotation;
		this.loaded = false;
		this.image = new Image();
		this.image.onload = () => {
			this.width = (this.image.width / this.frameRate) * this.scale;
			this.height = this.image.height * this.scale;
			this.loaded = true;
		};

		this.image.src = imgSrc;
		this.frameRate = frameRate;
		this.currentFrame = 0;
		this.frameBuffer = frameBuffer;
		this.elapsedFrames = 0;
	}

	draw() {
		if (!this.image) {
			return;
		}

		const cropbox = {
			position: {
				x: this.currentFrame * (this.image.width / this.frameRate),
				y: 0,
			},
			width: this.image.width / this.frameRate,
			height: this.image.height,
		};

		c.save();
		c.translate(
			this.position.x + this.width / 2,
			this.position.y + this.height / 2
		);
		c.rotate(this.rotation);
		c.translate(-this.width / 2, -this.height / 2);
		c.drawImage(
			this.image,
			cropbox.position.x,
			cropbox.position.y,
			cropbox.width,
			cropbox.height,
			0,
			0,
			this.width,
			this.height
		);
		c.restore();
	}

	update() {
		this.draw();
		this.updateFrames();
	}

	updateFrames() {
		this.elapsedFrames++;
		if (this.elapsedFrames % this.frameBuffer === 0) {
			if (this.currentFrame < this.frameRate - 1) {
				this.currentFrame++;
			} else {
				this.currentFrame = 0;
			}
		}
	}
}
