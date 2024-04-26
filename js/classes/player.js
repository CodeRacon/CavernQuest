class Player extends Sprite {
	constructor({
		position,
		collisionBlocks,
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
		this.isGrounded = false;

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

	update() {
		this.updateFrames();
		this.updateHitbox();

		// draws out image
		// c.fillStyle = '#00fffb6a';
		// c.fillRect(this.position.x, this.position.y, this.width, this.height);

		// draws out image
		// c.fillStyle = '#0004ff8c';
		// c.fillRect(

		// 	this.hitbox.position.x,
		// 	this.hitbox.position.y,
		// 	this.hitbox.width,
		// 	this.hitbox.height
		// );
		this.draw();
		this.position.x += this.velocity.x;
		this.updateHitbox();
		this.detectHorizontalCollision();
		this.applyGravity();
		this.updateHitbox();
		this.detectVerticalCollision();
	}

	updateHitbox() {
		this.hitbox = {
			position: {
				x: this.position.x + 372,
				y: this.position.y + 248,
			},
			width: 280,
			height: 548,
		};
	}

	detectHorizontalCollision() {
		for (let i = 0; i < this.collisionBlocks.length; i++) {
			const collisionBlock = this.collisionBlocks[i];

			if (
				collision({
					object1: this.hitbox,
					object2: collisionBlock,
				})
			) {
				if (this.velocity.x > 0) {
					this.velocity.x = 0;

					const offset =
						this.hitbox.position.x - this.position.x + this.hitbox.width;

					this.position.x = collisionBlock.position.x - offset - 0.01;
					break;
				}

				if (this.velocity.x < 0) {
					this.velocity.x = 0;

					const offset = this.hitbox.position.x - this.position.x;

					this.position.x =
						collisionBlock.position.x + collisionBlock.width - offset + 0.01;
					break;
				}
			} else {
			}
		}
	}

	applyGravity() {
		this.velocity.y += gravity;
		this.position.y += this.velocity.y;
	}

	detectVerticalCollision() {
		for (let i = 0; i < this.collisionBlocks.length; i++) {
			const collisionBlock = this.collisionBlocks[i];

			if (
				collision({
					object1: this.hitbox,
					object2: collisionBlock,
				})
			) {
				if (this.velocity.y > 0) {
					this.velocity.y = 0;

					const offset =
						this.hitbox.position.y - this.position.y + this.hitbox.height;

					this.position.y = collisionBlock.position.y - offset - 0.01;
					this.isGrounded = true;

					break;
				}

				if (this.velocity.y < 0) {
					this.velocity.y = 0;

					const offset = this.hitbox.position.y - this.position.y;

					this.position.y =
						collisionBlock.position.y + collisionBlock.height - offset + 0.01;
					break;
				}
			} else {
			}
		}
	}
}
