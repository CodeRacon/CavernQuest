class Hazard {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
	}

	draw() {
		c.fillStyle = '#ff00e16a';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
	}
}
