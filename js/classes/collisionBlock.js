class CollisionBlock {
	constructor({ polygon, position }) {
		this.polygon = polygon;
		this.position = position;
	}

	draw() {
		c.fillStyle = '#f5df6460';
		c.beginPath();
		c.moveTo(
			this.polygon[0].x + this.position.x,
			this.polygon[0].y + this.position.y
		);
		for (let i = 1; i < this.polygon.length; i++) {
			c.lineTo(
				this.polygon[i].x + this.position.x,
				this.polygon[i].y + this.position.y
			);
		}
		c.closePath();
		c.fill();
	}

	update() {
		this.draw();
	}
}
