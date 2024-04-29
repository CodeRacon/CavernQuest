class Player extends Sprite {
	constructor({
		position,
		collisionBlocks,
		hazards,
		imgSrc,
		frameRate,
		scale = 2,
		animations,
	}) {
		super({
			imgSrc,
			frameRate,
			scale,
		});
		this.position = position;
		this.velocity = {
			x: 0,
			y: 1,
		};

		this.collisionBlocks = collisionBlocks;
		this.hazards = hazards;
		this.collisionCooldown = 0;

		this.isGrounded = false;

		this.health = 100;

		this.isHit = false;
		this.hitAnimationDuration = 333;

		this.currentSpell = null;
		this.spellCooldown = 0;
		this.spellCooldownDuration = 30;

		this.hitbox = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			width: 64,
			height: 64,
		};

		this.animations = animations;
		this.lastDirection = 'right';

		for (let key in this.animations) {
			const image = new Image();
			image.src = this.animations[key].imgSrc;

			this.animations[key].image = image;
		}

		this.cameraBox = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			width: canvas.width,
			height: canvas.height,
		};
	}

	switchToSprite(sprite) {
		if (this.image === this.animations[sprite].image) return;

		if (
			sprite === 'JumpRight' ||
			sprite === 'FallRight' ||
			sprite === 'JumpLeft' ||
			sprite === 'FallLeft'
		) {
			this.currentFrame = 0;
		}

		this.image = this.animations[sprite].image;
		this.frameRate = this.animations[sprite].frameRate;
		this.frameBuffer = this.animations[sprite].frameBuffer;
	}

	updateCameraBox() {
		this.cameraBox = {
			position: {
				x: this.position.x - (512 * 6 - 256),
				y: this.position.y - (512 * 4 - 384),
			},
			width: 512 * 12,
			height: 512 * 8,
		};
	}

	leftBorderCamPanning({ canvas, camera }) {
		const cameraBoxRightEnd = this.cameraBox.position.x + this.cameraBox.width;
		const scaledCanvasWidth = canvas.width * 8;

		if (cameraBoxRightEnd >= 26112) return;

		if (cameraBoxRightEnd >= scaledCanvasWidth + Math.abs(camera.position.x)) {
			camera.position.x -= this.velocity.x;
		}
	}

	rightBorderCamPanning({ camera }) {
		if (this.cameraBox.position.x <= 0) return;

		if (this.cameraBox.position.x <= Math.abs(camera.position.x)) {
			camera.position.x -= this.velocity.x;
		}
	}

	upperBorderCamPanning({ canvas, camera }) {
		if (
			this.cameraBox.position.y + this.cameraBox.height + this.velocity.y >=
			8192
		)
			return;

		const scaledCanvasHeight = canvas.height * 8;

		if (
			this.cameraBox.position.y + this.cameraBox.height >=
			Math.abs(camera.position.y) + scaledCanvasHeight
		) {
			camera.position.y -= this.velocity.y;
		}
	}

	bottomBorderCamPanning({ camera }) {
		if (this.cameraBox.position.y + this.velocity.y <= 0) return;

		if (this.cameraBox.position.y <= Math.abs(camera.position.y)) {
			camera.position.y -= this.velocity.y;
		}
	}

	takeDamage() {
		if (this.isHit === false) {
			console.log('Player took damage');
			if (this.lastDirection === 'right') {
				this.switchToSprite('HitRight');
			} else {
				this.switchToSprite('HitLeft');
			}

			this.isHit = true;

			setTimeout(() => {
				if (this.lastDirection === 'right') {
					this.switchToSprite('IdleRight');
				} else {
					this.switchToSprite('IdleLeft');
				}
				this.isHit = false;
			}, this.hitAnimationDuration);
		}
	}

	castSpell() {
		if (this.spellCooldown <= 0) {
			console.log('Spell casted', this.lastDirection);
			this.currentSpell = new MagicSpell({
				position: {
					x: this.position.x,
					y: this.position.y,
				},
				direction: this.lastDirection,
				imgSrc:
					this.lastDirection === 'right'
						? 'img/wizard/magic-spell-right.png'
						: 'img/wizard/magic-spell-left.png',
				frameRate: 12,
				frameBuffer: 2,
				scale: 1,
			});
			this.spellCooldown = this.spellCooldownDuration;

			setTimeout(() => {
				this.currentSpell = null;
			}, ((this.currentSpell.frameRate * this.currentSpell.frameBuffer) / 60) * 1000);
		} else {
			return;
		}
	}

	update() {
		if (this.spellCooldown > 0) {
			this.spellCooldown--;
		}

		this.updateFrames();
		this.updateHitbox();
		this.updateCameraBox();

		// draws out hitbox
		c.fillStyle = 'transparent';
		c.fillRect(
			this.hitbox.position.x,
			this.hitbox.position.y,
			this.hitbox.width,
			this.hitbox.height
		);

		// draws out cameraBox
		c.fillStyle = 'transparent';
		c.fillRect(
			this.cameraBox.position.x,
			this.cameraBox.position.y,
			this.cameraBox.width,
			this.cameraBox.height
		);
		this.draw();
		this.position.x += this.velocity.x;
		this.updateHitbox();
		this.detectHorizontalCollision();
		this.applyGravity();
		this.updateHitbox();
		this.detectVerticalCollision();
		this.detectBouncePlantCollision(bouncePlants);
	}

	updateHitbox() {
		this.hitbox = {
			position: {
				x: this.position.x + 392,
				y: this.position.y + 288,
			},
			width: 248,
			height: 512,
		};
	}

	detectHorizontalCollision() {
		const objects = [...this.collisionBlocks, ...this.hazards];

		for (let i = 0; i < objects.length; i++) {
			const object = objects[i];

			if (
				collision({
					object1: this.hitbox,
					object2: object,
				})
			) {
				if (object instanceof Hazard && this.collisionCooldown <= 0) {
					this.health -= 2;
					this.takeDamage();
					this.collisionCooldown = 60;
				}

				if (this.velocity.x > 0) {
					this.velocity.x = 0;

					const offset =
						this.hitbox.position.x - this.position.x + this.hitbox.width;

					this.position.x = object.position.x - offset - 0.01;
					break;
				}

				if (this.velocity.x < 0) {
					this.velocity.x = 0;

					const offset = this.hitbox.position.x - this.position.x;

					this.position.x = object.position.x + object.width - offset + 0.01;
					break;
				}
			}
		}

		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}
	}

	applyGravity() {
		this.velocity.y += gravity;
		this.position.y += this.velocity.y;
	}

	detectVerticalCollision() {
		const objects = [...this.collisionBlocks, ...this.hazards];

		for (let i = 0; i < objects.length; i++) {
			const object = objects[i];

			if (
				collision({
					object1: this.hitbox,
					object2: object,
				})
			) {
				if (object instanceof Hazard && this.collisionCooldown <= 0) {
					this.health -= 2;
					this.takeDamage();
					this.collisionCooldown = 60;
				}

				if (this.velocity.y > 0) {
					this.velocity.y = 0;

					const offset =
						this.hitbox.position.y - this.position.y + this.hitbox.height;

					this.position.y = object.position.y - offset - 0.01;
					this.isGrounded = true;
					break;
				}

				if (this.velocity.y < 0) {
					this.velocity.y = 0;

					const offset = this.hitbox.position.y - this.position.y;

					this.position.y = object.position.y + object.height - offset + 0.01;
					break;
				}
			}
		}

		if (this.collisionCooldown > 0) {
			this.collisionCooldown--;
		}
	}

	detectBouncePlantCollision(bouncePlants) {
		if (this.velocity.y <= 0) return; // proof, if player is falling

		for (let i = 0; i < bouncePlants.length; i++) {
			const bouncePlant = bouncePlants[i];

			// define offset for visual part of the BouncePlant (lot of transparent 'whitespace' in png)
			const offset = {
				x: 256,
				y: 256,
			};

			if (
				this.hitbox.position.y + this.hitbox.height >=
					bouncePlant.position.y + offset.y &&
				this.hitbox.position.y + this.hitbox.height <=
					bouncePlant.position.y + bouncePlant.height - offset.y &&
				this.hitbox.position.x + this.hitbox.width >=
					bouncePlant.position.x + offset.x &&
				this.hitbox.position.x <=
					bouncePlant.position.x + bouncePlant.width - offset.x
			) {
				// collision detected, player jumps higher
				this.velocity.y = -48 * 1.2875;
				this.isGrounded = false;
				break;
			}
		}
	}
}
