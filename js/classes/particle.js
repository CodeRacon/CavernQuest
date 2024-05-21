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

	/**
	 * Emits a number of particles from the specified coordinates.
	 *
	 * @param {number} x - The x-coordinate to emit the particles from.
	 * @param {number} y - The y-coordinate to emit the particles from.
	 * @param {number} count - The number of particles to emit.
	 */
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

	/**
	 * Updates the particles in the particle system.
	 * Iterates through the particles, calls their `update()` method, and removes any particles with an alpha value of 0 or less.
	 */
	update() {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const particle = this.particles[i];
			particle.update();
			if (particle.alpha <= 0) {
				this.particles.splice(i, 1);
			}
		}
	}

	/**
	 * Draws all the particles in the `particles` array.
	 */
	draw() {
		this.particles.forEach((particle) => particle.draw());
	}
}

/**
 * Represents a particle with a position, size, color, and velocity.
 * Particles are used to create visual effects like explosions or smoke.
 *
 * @class Particle
 * @param {number} x - The initial x-coordinate of the particle.
 * @param {number} y - The initial y-coordinate of the particle.
 * @param {number} size - The initial size of the particle.
 * @param {string} color - The color of the particle.
 * @param {Object} velocity - An object with `x` and `y` properties representing the particle's velocity.
 */
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

	/**
	 * Updates the particle's position and size.
	 * The particle's x and y coordinates are updated by adding the velocity's x and y components.
	 * The particle's alpha (transparency) is decreased by 0.01.
	 * The particle's size is multiplied by 0.95, effectively decreasing its size.
	 */
	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.alpha -= 0.01;
		this.size *= 0.95;
	}

	/**
	 * Draws the particle on the canvas.
	 *
	 * This method is responsible for rendering the particle on the canvas. It saves the current canvas state, sets the global alpha value, begins a new path, draws a circle with the particle's position and size, fills the circle with the particle's color, and then restores the canvas state.
	 */
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
