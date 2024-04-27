class HangingBlob extends Sprite {
	constructor({ position, imgSrc, frameRate, frameBuffer, scale = 1 }) {
		super({
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
		this.fencePoles = fencePoles;
		this.direction = 1; // 1 für Bewegung nach rechts, -1 für Bewegung nach links
	}

	update() {
		this.updateFrames();

		// Überprüfe Kollision mit fencePoles

		// Rufe die update()-Methode der Elternklasse auf
		super.update();
	}
}
