class MovingBlob extends Sprite {
	constructor({
		position,
		imgSrc,
		frameRate,
		frameBuffer,
		scale = 1,
		fencePoles,
		speed,
	}) {
		super({
			imgSrc,
			frameRate,
			frameBuffer,
			scale,
		});

		this.position = position;
		this.velocity = {
			x: speed,
			y: 1,
		};
		this.fencePoles = fencePoles;
		this.direction = 1;
	}

	update() {
		this.updateFrames();

		// Überprüfe Kollision mit fencePoles
		for (let i = 0; i < this.fencePoles.length; i++) {
			const fencePole = this.fencePoles[i];
			if (
				this.position.x < fencePole.position.x + fencePole.width &&
				this.position.x + this.width > fencePole.position.x &&
				this.position.y < fencePole.position.y + fencePole.height &&
				this.position.y + this.height > fencePole.position.y
			) {
				// Kollision erkannt, kehre Bewegungsrichtung um
				this.direction *= -1;
				break;
			}
		}

		// Aktualisiere Position basierend auf Geschwindigkeit und Richtung
		this.position.x += this.velocity.x * this.direction;

		// Rufe die update()-Methode der Elternklasse auf
		super.update();
	}
}
