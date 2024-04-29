class FencePole {
	constructor({ position, width, height }) {
		this.position = position;
		this.width = width;
		this.height = height;
		this.color = 'transparent';
	}

	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
	}
}
