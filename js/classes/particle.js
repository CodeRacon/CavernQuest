/**
 * Represents a particle emitter that generates and manages a collection of particles,
 * whenever the player uses it's hover-ability.
 */
class ParticleEmitter {
	constructor(x, y, size, color, velocity) {
		this.particles = [];
		this.size = size;
		this.color = color;
		this.velocity = velocity;
	}

	emit(x, y, count) {
		for (let i = 0; i < count; i++) {
			const size = Math.random() * this.size.max + this.size.min;
			const velocity = {
				x: (Math.random() - 0.5) * this.velocity.x,
				y: Math.random() * this.velocity.y,
			};
			const particle = new Particle(x, y, size, this.color, velocity);
			this.particles.push(particle);
		}
	}

	update() {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const particle = this.particles[i];
			particle.update();
			if (particle.alpha <= 0) {
				this.particles.splice(i, 1);
			}
		}
	}

	draw() {
		this.particles.forEach((particle) => particle.draw());
	}
}

class Particle {
	constructor(x, y, size, color, velocity) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
		this.velocity = velocity;
		this.lifetime = 1;
		this.alpha = 1;
	}

	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.alpha -= 0.01;
		this.size *= 0.95;
	}

	draw() {
		c.save();
		c.globalAlpha = this.alpha;
		c.beginPath();
		c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		c.fillStyle = this.color;
		c.fill();
		c.restore();
	}
}
