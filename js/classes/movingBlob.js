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
		this.direction = 1; // 1 für Bewegung nach rechts, -1 für Bewegung nach links
		this.collisionCooldown = 0;
	}

	update(player) {
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

		// Definiere den Offset für den sichtbaren Bereich des MovingBlobs
		const offset = {
			x: 64, // Beispielwert, passe ihn an die tatsächlichen Abmessungen an
			y: 64, // Beispielwert, passe ihn an die tatsächlichen Abmessungen an
		};

		// Überprüfe die Kollision zwischen dem MovingBlob und dem Spieler
		if (
			player.hitbox.position.x + player.hitbox.width >=
				this.position.x + offset.x &&
			player.hitbox.position.x <= this.position.x + this.width - offset.x &&
			player.hitbox.position.y + player.hitbox.height >=
				this.position.y + offset.y &&
			player.hitbox.position.y <= this.position.y + this.height - offset.y
		) {
			// Überprüfe, ob der Kollisions-Cooldown abgelaufen ist
			if (this.collisionCooldown <= 0) {
				// Kollision erkannt, verringere die Lebenspunkte des Spielers
				player.health -= 10;

				// Setze den Kollisions-Cooldown auf einen bestimmten Wert, z.B. 60 Frames (ca. 1 Sekunde bei 60 FPS)
				this.collisionCooldown = 60;
			}
		}

		// Verringere den Kollisions-Cooldown in jedem Frame
		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}

		super.update();
	}
}
