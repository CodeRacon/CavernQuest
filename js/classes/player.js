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
		this.isGrounded = false;

		this.collisionBlocks = collisionBlocks;
		this.hazards = hazards;
		this.collisionCooldown = 0;

		this.health = 100;
		this.spellPower = 100;
		this.spellPowerRegenRate = 0.5;

		this.isHit = false;
		this.hitAnimationDuration = 333;

		this.isPoisoned = false;
		this.poisonDuration = 0;
		this.poisonOpacity = 0;

		this.currentSpell = null;
		this.spellCooldown = 0;
		this.spellCooldownDuration = 30;

		this.collectedBlueGems = 0;
		this.collectedRedGems = 0;
		this.collectedScrolls = 0;
		this.collectedPotions = {
			halfHP: 0,
			fullHP: 0,
			fullSP: 0,
			immunity: 0,
		};
		this.collectedBooks = {
			yellowBook: false,
			blueBook: false,
			redBook: false,
			greenBook: false,
		};

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

		this.particleEmitter = new ParticleEmitter(
			0,
			0,
			{ min: 8, max: 24 },
			'rgba(0, 247, 255, 0.35)',
			{ x: 24, y: 16 }
		);
		this.particleEmitterXRange = 112;
	}

	/**
	 * Updates the player's state and handles various collision checks and effects.
	 * This method is called every frame to update the player's position, animations,
	 * and interactions with other game objects.
	 */
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

		this.updatePoisonEffect();

		this.regenSpellPower();

		if (
			(keys.p.pressed || keys.e.pressed || keys.q.pressed) &&
			!player.isHit &&
			player.spellPower >= 5 / 60
		) {
			const emissionX = this.hitbox.position.x + this.hitbox.width / 2;
			const emissionY = this.hitbox.position.y + this.hitbox.height;
			const randomX =
				emissionX + (Math.random() - 0.5) * this.particleEmitterXRange;
			this.particleEmitter.emit(randomX, emissionY, 5);
		}

		this.particleEmitter.update();

		blueGems.forEach((blueGem) => {
			blueGem.checkCollision(this);
		});

		redGems.forEach((redGem) => {
			redGem.checkCollision(this);
		});

		fullHPs.forEach((fullHP) => {
			fullHP.checkCollision(this);
		});

		halfHPs.forEach((halfHP) => {
			halfHP.checkCollision(this);
		});

		fullSPs.forEach((fullSP) => {
			fullSP.checkCollision(this);
		});

		immunityPotions.forEach((immunityPotion) => {
			immunityPotion.checkCollision(this);
		});

		spellScrolls.forEach((scroll) => {
			scroll.checkCollision(this);
		});

		goldenBooks.forEach((goldenBook) => {
			goldenBook.checkCollision(this);
		});

		redBooks.forEach((redBook) => {
			redBook.checkCollision(this);
		});

		blueBooks.forEach((blueBook) => {
			blueBook.checkCollision(this);
		});

		greenBooks.forEach((greenBook) => {
			greenBook.checkCollision(this);
		});
	}

	/**
	 * Checks if the player's hitbox collides with a gem-item.
	 * @param {Object} gem - The gem object to check for collision.
	 * @returns {boolean} - True if the player's hitbox collides with the gem, false otherwise.
	 */
	checkGemCollision(gem) {
		const offset = 0.525;
		if (
			this.hitbox.position.x < gem.position.x + gem.width * offset &&
			this.hitbox.position.x + this.hitbox.width > gem.position.x &&
			this.hitbox.position.y < gem.position.y + gem.height * offset &&
			this.hitbox.position.y + this.hitbox.height > gem.position.y
		) {
			return true;
		}
		return false;
	}

	/**
	 * Checks if the player's hitbox is colliding with a potion-item.
	 * @param {Object} potion - The potion object to check for collision.
	 * @returns {boolean} - True if the player's hitbox is colliding with the potion, false otherwise.
	 */
	checkPotionCollision(potion) {
		const offset = 0.6;

		if (
			this.hitbox.position.x < potion.position.x + potion.width * offset &&
			this.hitbox.position.x + this.hitbox.width > potion.position.x &&
			this.hitbox.position.y < potion.position.y + potion.height * offset &&
			this.hitbox.position.y + this.hitbox.height > potion.position.y
		) {
			return true;
		}
		return false;
	}

	/**
	 * Consumes a half-HP-potion-item, restoring the player's health by up to 50 points,
	 * but not exceeding 100.
	 * If the player has any half HP potions in it's inventory, this will decrement
	 * the count of half HP potions.
	 */
	useHalfHPPotion() {
		if (this.collectedPotions.halfHP > 0) {
			this.health = Math.min(this.health + 50, 100);
			this.collectedPotions.halfHP--;
		}
	}

	/**
	 * Consumes a full-SP-potion-item, restoring the player's spell power to 100.
	 *
	 * If the player has any full-HP-potions in it's inventory, this will decrement
	 * the count of full-HP-potions.*/
	useFullHPPotion() {
		if (this.collectedPotions.fullHP > 0) {
			this.health = 100;
			this.collectedPotions.fullHP--;
		}
	}

	/**
	 * Restores the player's spell-power to the maximum amount of 100.
	 * This method is called when the player uses a full-SP-potion-item, if previously collected.
	 * The number of collected full-SP-potion-items is decremented by 1 after using the potion.
	 */
	useFullSPPotion() {
		if (this.collectedPotions.fullSP > 0) {
			this.spellPower = 100;
			this.collectedPotions.fullSP--;
		}
	}

	/**
	 * Checks if the player's hitbox is colliding with a scroll-item.
	 * @param {Object} scroll - The scroll object to check for collision.
	 * @returns {boolean} - True if the player's hitbox is colliding with the scroll, false otherwise.
	 */
	checkScrollCollision(scroll) {
		const offset = 0.525;
		if (
			this.hitbox.position.x < scroll.position.x + scroll.width * offset &&
			this.hitbox.position.x + this.hitbox.width > scroll.position.x &&
			this.hitbox.position.y < scroll.position.y + scroll.height * offset &&
			this.hitbox.position.y + this.hitbox.height > scroll.position.y
		) {
			return true;
		}
		return false;
	}

	/**
	 * Checks if the player's hitbox is colliding with the given book-item.
	 * @param {Object} book - The book object to check for collision.
	 * @returns {boolean} - True if the player's hitbox is colliding with the book, false otherwise.
	 */
	checkBookCollision(book) {
		const offset = 0.525;
		if (
			this.hitbox.position.x < book.position.x + book.width * offset &&
			this.hitbox.position.x + this.hitbox.width > book.position.x &&
			this.hitbox.position.y < book.position.y + book.height * offset &&
			this.hitbox.position.y + this.hitbox.height > book.position.y
		) {
			return true;
		}
		return false;
	}

	/**
	 * Consumes the specified amount of spell power from the player.
	 * @param {number} amount - The amount of spell power to consume.
	 * @returns {void}
	 */
	useSpellPower(amount) {
		if (this.spellPower >= amount) {
			this.spellPower -= amount;
		}
	}

	/**
	 * Regenerates the player's spell power over time.
	 * The spell power is capped at 100.
	 */
	regenSpellPower() {
		if (this.spellPower < 100) {
			this.spellPower += this.spellPowerRegenRate / FPS;
			if (this.spellPower > 100) {
				this.spellPower = 100;
			}
		}
	}

	/**
	 * Switches the player's sprite to the specified sprite.
	 *
	 * @param {string} sprite - The name of the sprite to switch to.
	 * @returns {void}
	 */
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

	/**
	 * Updates the camera box dimensions based on the player's position.
	 * The camera box is used to determine the area of the game world
	 * that should be visible on the screen.
	 * The camera box is positioned relative to the player's position,
	 * with some offsets to ensure the player is centered.
	 * The camera box has a fixed width and height, which determines
	 * the size of the visible game area.
	 */
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

	/**
	 * Handles camera panning when the player reaches the left border of the screen.
	 * @param {Object} params - An object containing the canvas and camera properties.
	 * @param {HTMLCanvasElement} params.canvas - The canvas element.
	 * @param {THREE.Camera} params.camera - The camera object.
	 */
	leftBorderCamPanning({ canvas, camera }) {
		const cameraBoxRightEnd = this.cameraBox.position.x + this.cameraBox.width;
		const scaledCanvasWidth = canvas.width * 8;

		if (cameraBoxRightEnd >= 26112) return;

		if (cameraBoxRightEnd >= scaledCanvasWidth + Math.abs(camera.position.x)) {
			camera.position.x -= this.velocity.x;
		}
	}

	/**
	 * Handles camera panning when the player reaches the right border of the screen.
	 * @param {Object} options - An object containing the camera instance.
	 * @param {THREE.Camera} options.camera - The camera instance to be panned.
	 */
	rightBorderCamPanning({ camera }) {
		if (this.cameraBox.position.x <= 0) return;

		if (this.cameraBox.position.x <= Math.abs(camera.position.x)) {
			camera.position.x -= this.velocity.x;
		}
	}

	/**
	 * Handles the camera panning when the player reaches the upper border of the game world.
	 * @param {Object} params - The parameters object.
	 * @param {HTMLCanvasElement} params.canvas - The canvas element.
	 * @param {THREE.Camera} params.camera - The camera object.
	 */
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

	/**
	 * Handles the bottom border camera panning behavior.
	 * @param {Object} camera - The camera object to update.
	 */
	bottomBorderCamPanning({ camera }) {
		if (this.cameraBox.position.y + this.velocity.y <= 0) return;

		if (this.cameraBox.position.y <= Math.abs(camera.position.y)) {
			camera.position.y -= this.velocity.y;
		}
	}

	/**
	 * Handles the player taking damage, including playing a hit animation
	 * and resetting the hit state after a duration.
	 */
	takeDamage() {
		if (this.isHit === false) {
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

	/**
	 * Casts a 'MagicSpell' from the player's position in the last direction the player was facing.
	 * The spell is created as a new `MagicSpell` object and added to the game. The spell's cooldown
	 * is set, and after the spell's animation duration, the spell is removed from the game.
	 */
	castSpell() {
		if (this.spellCooldown <= 0) {
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

	/**
	 * Applies a poison effect to the player, damaging their health over time.
	 *
	 * If the player is not already poisoned, this method sets
	 * the `isPoisoned` flag to `true`,
	 * initializes the `poisonDuration` to 25 seconds (25 * FPS),
	 * and sets the `poisonOpacity` to 1.
	 *
	 * The poison effect will gradually reduce the player's health every second
	 * until the `poisonDuration`
	 * reaches 0, at which point the poison effect is cleared.
	 */
	applyPoisonDamage() {
		if (!this.isPoisoned) {
			this.isPoisoned = true;
			this.poisonDuration = 25 * FPS;
			this.poisonOpacity = 1;
		}
	}

	/**
	 * Updates the poison effect on the player.
	 * If the player is poisoned, the poison duration is decreased,
	 * and the poison opacity is updated based on the remaining duration.
	 * The player's health is decreased every second while poisoned.
	 * If the poison duration reaches 0, the player is no longer poisoned
	 * and the poison opacity is reset to 0.
	 */
	updatePoisonEffect() {
		if (this.isPoisoned) {
			this.poisonDuration--;
			this.poisonOpacity = this.poisonDuration / (60 * 60);

			if (this.poisonDuration % 60 === 0) {
				this.health--;
			}

			if (this.poisonDuration <= 0) {
				this.isPoisoned = false;
				this.poisonOpacity = 0;
			}
		}
	}

	/**
	 * Draws the player character on the canvas, applying a poison effect
	 * if the player's poisonOpacity is greater than 0.
	 * The poison effect is created by drawing the player's sprite onto a separate canvas,
	 * applying a green tint, and then
	 * drawing the filtered canvas onto the main canvas.
	 */
	draw() {
		if (this.poisonOpacity > 0) {
			// create separate canvas for filter
			const filterCanvas = document.createElement('canvas');
			filterCanvas.width = this.width;
			filterCanvas.height = this.height;
			const filterCtx = filterCanvas.getContext('2d');

			// draw sprite onto filter canvas
			filterCtx.drawImage(
				this.image,
				this.currentFrame * (this.image.width / this.frameRate),
				0,
				this.image.width / this.frameRate,
				this.image.height,
				0,
				0,
				this.width,
				this.height
			);

			// use filter on new canvas context
			filterCtx.globalCompositeOperation = 'source-atop';
			filterCtx.fillStyle = `rgba(191, 255, 0, ${this.poisonOpacity})`;
			filterCtx.fillRect(0, 0, this.width, this.height);

			// draw filtered canvas onto main canvas
			c.drawImage(filterCanvas, this.position.x, this.position.y);
		} else {
			super.draw();
		}
		this.particleEmitter.draw();
	}

	/**
	 * Updates the hitbox of the player object.
	 * The hitbox is a rectangular area that represents the player's collision bounds.
	 * It is positioned relative to the player's position, with an offset of (392, 288)
	 * and dimensions of 248x512 pixels.
	 */
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

	/**
	 * Detects and handles horizontal collisions between the player and other objects.
	 * This method is responsible for updating the player's position and velocity when
	 * a horizontal collision occurs.
	 * It checks for collisions with both collision blocks and hazards, and applies
	 * the appropriate response based on the collision type.
	 */
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

	/**
	 * Applies gravity to the player's vertical velocity and updates the player's position accordingly.
	 */
	applyGravity() {
		this.velocity.y += gravity;
		this.position.y += this.velocity.y;
	}

	/**
	 * Detects vertical collision between the player and any collision blocks or hazards in the game.
	 * If a collision is detected, the player's vertical velocity and position are adjusted accordingly.
	 * If the player collides with a hazard, their health is reduced and the collision cooldown is set.
	 */
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

	/**
	 * Detects collision between the player and any bounce plant - object.
	 * If a collision is detected, the player's vertical velocity is increased to make them jump higher.
	 *
	 * @param {BouncePlant[]} bouncePlants - An array of bounce plant objects to check for collisions.
	 */
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
