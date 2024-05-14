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

	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.yellowBook = true;
			const index = goldenBooks.indexOf(this);
			if (index > -1) {
				goldenBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
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

	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.redBook = true;
			const index = redBooks.indexOf(this);
			if (index > -1) {
				redBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
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

	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.greenBook = true;
			const index = greenBooks.indexOf(this);
			if (index > -1) {
				greenBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
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

	checkCollision(player) {
		if (player.checkBookCollision(this)) {
			player.collectedBooks.blueBook = true;
			const index = blueBooks.indexOf(this);
			if (index > -1) {
				blueBooks.splice(index, 1);
			}
			playMagicTomeFound();
		}
	}
}
