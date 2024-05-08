class Hazard {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
	}

	draw() {
		// draws out hazard objects
		c.fillStyle = 'transparent';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
	}
}
