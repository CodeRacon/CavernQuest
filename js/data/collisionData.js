/**
 * Defines the collision data for the ground-, wall- or platform-objects in the game.
 * This data is used to detect collisions between the player and the aforementioned objects.
 * Each object in the `objects` sub-array represents a rectangular collision area with the given dimensions and position.
 */
const groundCollisions = [
	{
		objects: [
			{
				height: 928,
				id: 403,

				width: 7040,
				x: 19072,
				y: 7264,
			},
			{
				height: 288,
				id: 404,

				width: 320,
				x: 18752,
				y: 7264,
			},
			{
				height: 512,
				id: 405,

				width: 1280,
				x: 19072,
				y: 6752,
			},
			{
				height: 512,
				id: 406,

				width: 2816,
				x: 22144,
				y: 6752,
			},
			{
				height: 512,
				id: 407,

				width: 1280,
				x: 22656,
				y: 6240,
			},
			{
				height: 512,
				id: 408,

				width: 768,
				x: 23168,
				y: 5728,
			},
			{
				height: 288,
				id: 409,

				width: 320,
				x: 23936,
				y: 5728,
			},
			{
				height: 288,
				id: 410,

				width: 1728,
				x: 24384,
				y: 4192,
			},
			{
				height: 512,
				id: 411,

				width: 1408,
				x: 24704,
				y: 4480,
			},
			{
				height: 512,
				id: 412,

				width: 896,
				x: 25216,
				y: 4992,
			},
			{
				height: 1792,
				id: 413,

				width: 384,
				x: 25728,
				y: 5504,
			},
			{
				height: 512,
				id: 418,

				width: 256,
				x: 19584,
				y: 2144,
			},
			{
				height: 224,
				id: 419,

				width: 2048,
				x: 19584,
				y: 2656,
			},
			{
				height: 128,
				id: 420,

				width: 1984,
				x: 19648,
				y: 2880,
			},
			{
				height: 768,
				id: 421,

				width: 768,
				x: 21632,
				y: 2656,
			},
			{
				height: 512,
				id: 422,

				width: 512,
				x: 22400,
				y: 3168,
			},
			{
				height: 256,
				id: 423,

				width: 256,
				x: 22144,
				y: 3424,
			},
			{
				height: 224,
				id: 424,

				width: 1600,
				x: 22144,
				y: 3680,
			},
			{
				height: 128,
				id: 425,

				width: 1472,
				x: 22208,
				y: 3904,
			},
			{
				height: 288,
				id: 426,

				width: 576,
				x: 20288,
				y: 3680,
			},
			{
				height: 736,
				id: 427,

				width: 256,
				x: 20608,
				y: 3968,
			},
			{
				height: 512,
				id: 428,

				width: 768,
				x: 20608,
				y: 4704,
			},
			{
				height: 224,
				id: 429,

				width: 2432,
				x: 19776,
				y: 5216,
			},
			{
				height: 128,
				id: 430,

				width: 2304,
				x: 19840,
				y: 5440,
			},
			{
				height: 270,
				id: 431,

				width: 267,
				x: 21114,
				y: 6340,
			},
			{
				height: 163,
				id: 432,

				width: 384,
				x: 17984,
				y: 6749,
			},
			{
				height: 128,
				id: 433,

				width: 340,
				x: 18006,
				y: 6912,
			},
			{
				height: 163,
				id: 434,

				width: 384,
				x: 19012,
				y: 5728,
			},
			{
				height: 128,
				id: 435,

				width: 340,
				x: 19034,
				y: 5891,
			},
			{
				height: 163,
				id: 436,

				width: 384,
				x: 19523,
				y: 4188,
			},
			{
				height: 128,
				id: 437,

				width: 340,
				x: 19545,
				y: 4351,
			},
			{
				height: 163,
				id: 438,

				width: 384,
				x: 16966,
				y: 3167,
			},
			{
				height: 128,
				id: 439,

				width: 340,
				x: 16988,
				y: 3330,
			},
			{
				height: 163,
				id: 440,

				width: 384,
				x: 15941,
				y: 2652,
			},
			{
				height: 128,
				id: 441,

				width: 340,
				x: 15963,
				y: 2815,
			},
			{
				height: 163,
				id: 442,

				width: 384,
				x: 15432,
				y: 3676,
			},
			{
				height: 128,
				id: 443,

				width: 340,
				x: 15454,
				y: 3839,
			},
			{
				height: 163,
				id: 444,

				width: 384,
				x: 13891,
				y: 4702,
			},
			{
				height: 128,
				id: 445,

				width: 340,
				x: 13913,
				y: 4865,
			},
			{
				height: 163,
				id: 446,

				width: 384,
				x: 13640,
				y: 5727,
			},
			{
				height: 128,
				id: 447,

				width: 340,
				x: 13662,
				y: 5890,
			},
			{
				height: 288,
				id: 448,

				width: 896,
				x: 17728,
				y: 2656,
			},
			{
				height: 64,
				id: 449,

				width: 640,
				x: 17856,
				y: 2944,
			},
			{
				height: 864,
				id: 450,

				width: 1792,
				x: 16512,
				y: 4192,
			},
			{
				height: 320,
				id: 451,

				width: 384,
				x: 18304,
				y: 4736,
			},
			{
				height: 256,
				id: 452,

				width: 128,
				x: 18688,
				y: 4736,
			},
			{
				height: 512,
				id: 453,

				width: 256,
				x: 18048,
				y: 3680,
			},
			{
				height: 288,
				id: 454,

				width: 320,
				x: 18304,
				y: 3680,
			},
			{
				height: 352,
				id: 455,

				width: 512,
				x: 16000,
				y: 4704,
			},
			{
				height: 224,
				id: 456,

				width: 1600,
				x: 15168,
				y: 5216,
			},
			{
				height: 128,
				id: 457,

				width: 1472,
				x: 15232,
				y: 5440,
			},

			{
				height: 160,
				id: 458,

				width: 768,
				x: 16000,
				y: 5056,
			},
			{
				height: 544,
				id: 459,

				width: 768,
				x: 13952,
				y: 2144,
			},
			{
				height: 192,
				id: 460,

				width: 1088,
				x: 13632,
				y: 2688,
			},
			{
				height: 64,
				id: 461,

				width: 960,
				x: 13696,
				y: 2880,
			},
			{
				height: 64,
				id: 462,

				width: 384,
				x: 13824,
				y: 2944,
			},
			{
				height: 320,
				id: 463,

				width: 256,
				x: 13952,
				y: 3008,
			},
			{
				height: 128,
				id: 464,

				width: 128,
				x: 14016,
				y: 3328,
			},
			{
				height: 288,
				id: 465,

				width: 832,
				x: 14720,
				y: 2144,
			},
			{
				height: 64,
				id: 466,

				width: 640,
				x: 14720,
				y: 2432,
			},
			{
				height: 512,
				id: 467,

				width: 256,
				x: 11392,
				y: 1632,
			},
			{
				height: 512,
				id: 468,

				width: 768,
				x: 10880,
				y: 2144,
			},
			{
				height: 864,
				id: 469,

				width: 1792,
				x: 10368,
				y: 2656,
			},
			{
				height: 352,
				id: 470,

				width: 512,
				x: 12160,
				y: 3168,
			},
			{
				height: 352,
				id: 471,

				width: 2240,
				x: 8128,
				y: 3168,
			},
			{
				height: 288,
				id: 472,

				width: 128,
				x: 8000,
				y: 3168,
			},
			{
				height: 512,
				id: 473,

				width: 768,
				x: 8832,
				y: 2656,
			},
			{
				height: 288,
				id: 474,

				width: 1088,
				x: 15488,
				y: 6752,
			},
			{
				height: 736,
				id: 475,

				width: 256,
				x: 16000,
				y: 7040,
			},
			{
				height: 416,
				id: 476,

				width: 1781,
				x: 16000,
				y: 7776,
			},
			{
				height: 288,
				id: 477,

				width: 1664,
				x: 12864,
				y: 6752,
			},
			{
				height: 64,
				id: 478,

				width: 960,
				x: 12992,
				y: 7040,
			},
			{
				height: 1152,
				id: 479,

				width: 256,
				x: 13952,
				y: 7040,
			},
			{
				height: 384,
				id: 480,

				width: 512,
				x: 13440,
				y: 7808,
			},
			{
				height: 1024,
				id: 481,

				width: 256,
				x: 10880,
				y: 6240,
			},
			{
				height: 928,
				id: 482,

				width: 3840,
				x: 8320,
				y: 7264,
			},
			{
				height: 288,
				id: 483,

				width: 576,
				x: 12416,
				y: 4192,
			},
			{
				height: 1024,
				id: 484,

				width: 256,
				x: 12416,
				y: 4480,
			},
			{
				height: 256,
				id: 487,

				width: 448,
				x: 12672,
				y: 5248,
			},
			{
				height: 128,
				id: 488,

				width: 64,
				x: 13120,
				y: 5312,
			},
			{
				height: 352,
				id: 489,

				width: 2560,
				x: 9856,
				y: 4704,
			},
			{
				height: 160,
				id: 491,

				width: 256,
				x: 9856,
				y: 5056,
			},
			{
				height: 288,
				id: 492,

				width: 1280,
				x: 8832,
				y: 5216,
			},
			{
				height: 896,
				id: 493,

				width: 768,
				x: 8832,
				y: 5504,
			},
			{
				height: 128,
				id: 494,

				width: 640,
				x: 8896,
				y: 6400,
			},
			{
				height: 224,
				id: 495,

				width: 1920,
				x: 5696,
				y: 6752,
			},
			{
				height: 128,
				id: 496,

				width: 1792,
				x: 5760,
				y: 6976,
			},
			{
				height: 672,
				id: 497,

				width: 288,
				x: 6240,
				y: 7104,
			},
			{
				height: 416,
				id: 498,

				width: 1312,
				x: 5216,
				y: 7776,
			},
			{
				height: 288,
				id: 499,

				width: 896,
				x: 7488,
				y: 4192,
			},
			{
				height: 64,
				id: 500,

				width: 640,
				x: 7616,
				y: 4480,
			},
			{
				height: 1024,
				id: 501,

				width: 256,
				x: 6272,
				y: 3168,
			},
			{
				height: 288,
				id: 502,

				width: 320,
				x: 6528,
				y: 3680,
			},
			{
				height: 224,
				id: 503,

				width: 576,
				x: 5952,
				y: 4192,
			},
			{
				height: 64,
				id: 504,

				width: 448,
				x: 6016,
				y: 4416,
			},
			{
				height: 1024,
				id: 505,

				width: 768,
				x: 4224,
				y: 4192,
			},
			{
				height: 224,
				id: 506,

				width: 2816,
				x: 4224,
				y: 5216,
			},
			{
				height: 128,
				id: 507,

				width: 2752,
				x: 4288,
				y: 5440,
			},
			{
				height: 160,
				id: 508,

				width: 256,
				x: 6784,
				y: 5568,
			},
			{
				height: 224,
				id: 509,

				width: 1088,
				x: 6784,
				y: 5728,
			},
			{
				height: 128,
				id: 510,

				width: 960,
				x: 6848,
				y: 5952,
			},
			{
				height: 512,
				id: 511,

				width: 256,
				x: 5248,
				y: 1632,
			},

			{
				height: 224,
				id: 512,

				width: 1920,
				x: 4160,
				y: 2144,
			},
			{
				height: 64,
				id: 513,

				width: 1792,
				x: 4224,
				y: 2368,
			},
			{
				height: 64,
				id: 514,

				width: 1600,
				x: 4288,
				y: 2432,
			},
			{
				height: 224,
				id: 515,

				width: 896,
				x: 2368,
				y: 2656,
			},
			{
				height: 64,
				id: 516,

				width: 768,
				x: 2432,
				y: 2880,
			},
			{
				height: 64,
				id: 517,

				width: 640,
				x: 2496,
				y: 2944,
			},
			{
				height: 224,
				id: 518,

				width: 1216,
				x: 0,
				y: 3168,
			},
			{
				height: 128,
				id: 519,

				width: 1152,
				x: 0,
				y: 3392,
			},
			{
				height: 1024,
				id: 520,

				width: 1920,
				x: 0,
				y: 4192,
			},
			{
				height: 288,
				id: 521,

				width: 2944,
				x: 0,
				y: 5216,
			},
			{
				height: 64,
				id: 522,

				width: 1280,
				x: 384,
				y: 5504,
			},
			{
				height: 224,
				id: 523,

				width: 1280,
				x: 1664,
				y: 5504,
			},
			{
				height: 288,
				id: 524,

				width: 1600,
				x: 1664,
				y: 5728,
			},
			{
				height: 64,
				id: 525,

				width: 896,
				x: 1792,
				y: 6016,
			},
			{
				height: 960,
				id: 526,

				width: 256,
				x: 2688,
				y: 6016,
			},
			{
				height: 64,
				id: 529,

				width: 128,
				x: 2752,
				y: 6976,
			},
			{
				height: 2688,
				id: 530,

				width: 384,
				x: 0,
				y: 5504,
			},
			{
				height: 1440,
				id: 531,

				width: 1024,
				x: 384,
				y: 6752,
			},
			{
				height: 928,
				id: 532,

				width: 512,
				x: 1408,
				y: 7264,
			},
			{
				height: 416,
				id: 533,

				width: 1536,
				x: 1920,
				y: 7776,
			},
			{
				height: 224,
				id: 534,

				width: 896,
				x: 3904,
				y: 6752,
			},
			{
				height: 64,
				id: 535,

				width: 768,
				x: 3968,
				y: 6976,
			},
			{
				height: 64,
				id: 537,

				width: 640,
				x: 4032,
				y: 7040,
			},
			{
				height: 256,
				id: 539,

				width: 896,
				x: 10816,
				y: 3520,
			},
			{
				height: 128,
				id: 540,

				width: 768,
				x: 10880,
				y: 3776,
			},
			{
				height: 128,
				id: 541,

				width: 640,
				x: 10944,
				y: 3904,
			},
		],
	},
];

/**
 * Defines the collision data for the upper, left and right boundaries of the game world.
 * This data represents the positions and dimensions of objects that can collide with the player or other game entities.
 * The `frameCollisions` array contains an array of collision objects for each frame, where each object has properties like `height`, `width`, `x`, and `y` to define its position and size.
 */
const frameCollisions = [
	{
		objects: [
			{
				height: 1024,
				id: 544,
				width: 320,
				x: 0,
				y: 3136,
			},
			{
				height: 960,
				id: 545,
				width: 192,
				x: 0,
				y: 2176,
			},
			{
				height: 128,
				id: 546,
				width: 64,
				x: 192,
				y: 2176,
			},
			{
				height: 640,
				id: 547,
				width: 320,
				x: 0,
				y: 1536,
			},
			{
				height: 1536,
				id: 549,
				width: 320,
				x: 0,
				y: 0,
			},
			{
				height: 576,
				id: 550,
				width: 25792,
				x: 320,
				y: 0,
			},
			{
				height: 1024,
				id: 553,
				width: 256,
				x: 320,
				y: 576,
			},
			{
				height: 1088,
				id: 554,
				width: 256,
				x: 576,
				y: 576,
			},
			{
				height: 960,
				id: 555,
				width: 128,
				x: 832,
				y: 576,
			},
			{
				height: 832,
				id: 556,
				width: 128,
				x: 960,
				y: 576,
			},
			{
				height: 768,
				id: 558,
				width: 64,
				x: 1088,
				y: 576,
			},
			{
				height: 576,
				id: 559,
				width: 192,
				x: 1152,
				y: 576,
			},
			{
				height: 512,
				id: 560,
				width: 128,
				x: 1344,
				y: 576,
			},
			{
				height: 448,
				id: 561,
				width: 64,
				x: 1472,
				y: 576,
			},
			{
				height: 256,
				id: 562,
				width: 128,
				x: 1536,
				y: 576,
			},
			{
				height: 128,
				id: 563,
				width: 384,
				x: 1664,
				y: 576,
			},
			{
				height: 192,
				id: 564,
				width: 192,
				x: 2048,
				y: 576,
			},
			{
				height: 256,
				id: 565,
				width: 128,
				x: 2240,
				y: 576,
			},
			{
				height: 320,
				id: 566,
				width: 192,
				x: 2368,
				y: 576,
			},
			{
				height: 320,
				id: 567,
				width: 256,
				x: 2560,
				y: 576,
			},
			{
				height: 256,
				id: 568,
				width: 320,
				x: 2816,
				y: 576,
			},
			{
				height: 256,
				id: 569,
				width: 192,
				x: 3136,
				y: 576,
			},
			{
				height: 192,
				id: 570,
				width: 64,
				x: 3328,
				y: 576,
			},
			{
				height: 128,
				id: 571,
				width: 192,
				x: 3392,
				y: 576,
			},
			{
				height: 192,
				id: 572,
				width: 192,
				x: 3584,
				y: 576,
			},
			{
				height: 256,
				id: 573,
				width: 320,
				x: 3776,
				y: 576,
			},
			{
				height: 192,
				id: 574,
				width: 128,
				x: 4096,
				y: 576,
			},
			{
				height: 192,
				id: 575,
				width: 128,
				x: 4224,
				y: 576,
			},
			{
				height: 128,
				id: 576,
				width: 64,
				x: 4352,
				y: 576,
			},
			{
				height: 64,
				id: 577,
				width: 64,
				x: 4416,
				y: 576,
			},
			{
				height: 64,
				id: 578,
				width: 320,
				x: 4480,
				y: 576,
			},
			{
				height: 128,
				id: 579,
				width: 64,
				x: 4800,
				y: 576,
			},
			{
				height: 192,
				id: 580,
				width: 192,
				x: 4864,
				y: 576,
			},
			{
				height: 192,
				id: 581,
				width: 192,
				x: 5056,
				y: 576,
			},
			{
				height: 192,
				id: 582,
				width: 192,
				x: 5248,
				y: 576,
			},
			{
				height: 256,
				id: 583,
				width: 128,
				x: 5440,
				y: 576,
			},
			{
				height: 192,
				id: 584,
				width: 64,
				x: 5568,
				y: 576,
			},
			{
				height: 128,
				id: 585,
				width: 64,
				x: 5632,
				y: 576,
			},
			{
				height: 64,
				id: 586,
				width: 128,
				x: 5696,
				y: 576,
			},
			{
				height: 192,
				id: 587,
				width: 256,
				x: 5824,
				y: 576,
			},
			{
				height: 384,
				id: 588,
				width: 64,
				x: 6080,
				y: 576,
			},
			{
				height: 448,
				id: 589,
				width: 64,
				x: 6144,
				y: 576,
			},
			{
				height: 448,
				id: 590,
				width: 1408,
				x: 6208,
				y: 576,
			},
			{
				height: 384,
				id: 591,
				width: 1600,
				x: 7616,
				y: 576,
			},
			{
				height: 448,
				id: 592,
				width: 2496,
				x: 15936,
				y: 576,
			},
			{
				height: 1984,
				id: 593,
				width: 512,
				x: 25600,
				y: 576,
			},
			{
				height: 320,
				id: 594,
				width: 448,
				x: 25664,
				y: 2560,
			},
			{
				height: 448,
				id: 595,
				width: 256,
				x: 25856,
				y: 2880,
			},
			{
				height: 64,
				id: 596,
				width: 192,
				x: 25920,
				y: 3328,
			},
			{
				height: 192,
				id: 597,
				width: 256,
				x: 25856,
				y: 4032,
			},
			{
				height: 128,
				id: 598,
				width: 256,
				x: 25856,
				y: 3904,
			},

			{
				height: 128,
				id: 599,
				width: 192,
				x: 25920,
				y: 3776,
			},
			{
				height: 384,
				id: 600,
				width: 128,
				x: 25984,
				y: 3392,
			},
			{
				height: 1088,
				id: 601,
				width: 1664,
				x: 23936,
				y: 576,
			},
			{
				height: 640,
				id: 602,
				width: 128,
				x: 25472,
				y: 1664,
			},
			{
				height: 576,
				id: 603,
				width: 128,
				x: 25344,
				y: 1664,
			},
			{
				height: 384,
				id: 604,
				width: 576,
				x: 24768,
				y: 1664,
			},
			{
				height: 64,
				id: 605,
				width: 448,
				x: 24832,
				y: 2048,
			},
			{
				height: 64,
				id: 606,
				width: 192,
				x: 24960,
				y: 2112,
			},
			{
				height: 192,
				id: 607,
				width: 576,
				x: 24192,
				y: 1664,
			},
			{
				height: 64,
				id: 608,
				width: 256,
				x: 24192,
				y: 1856,
			},
			{
				height: 64,
				id: 609,
				width: 192,
				x: 24000,
				y: 1664,
			},
			{
				height: 128,
				id: 610,
				width: 128,
				x: 24064,
				y: 1728,
			},
			{
				height: 320,
				id: 611,
				width: 2944,
				x: 20992,
				y: 576,
			},
			{
				height: 320,
				id: 612,
				width: 448,
				x: 21888,
				y: 896,
			},
			{
				height: 320,
				id: 613,
				width: 192,
				x: 22336,
				y: 896,
			},
			{
				height: 448,
				id: 614,
				width: 256,
				x: 22528,
				y: 896,
			},
			{
				height: 384,
				id: 615,
				width: 192,
				x: 22784,
				y: 896,
			},
			{
				height: 320,
				id: 616,
				width: 128,
				x: 22976,
				y: 896,
			},
			{
				height: 256,
				id: 617,
				width: 256,
				x: 23104,
				y: 896,
			},
			{
				height: 320,
				id: 618,
				width: 128,
				x: 23360,
				y: 896,
			},
			{
				height: 384,
				id: 619,
				width: 128,
				x: 23488,
				y: 896,
			},
			{
				height: 384,
				id: 620,
				width: 192,
				x: 23616,
				y: 896,
			},
			{
				height: 384,
				id: 621,
				width: 128,
				x: 23808,
				y: 896,
			},
			{
				height: 192,
				id: 622,
				width: 192,
				x: 21056,
				y: 896,
			},
			{
				height: 192,
				id: 623,
				width: 384,
				x: 21248,
				y: 896,
			},
			{
				height: 128,
				id: 624,
				width: 128,
				x: 21632,
				y: 896,
			},
			{
				height: 192,
				id: 625,
				width: 256,
				x: 20736,
				y: 576,
			},
			{
				height: 128,
				id: 626,
				width: 256,
				x: 20480,
				y: 576,
			},
			{
				height: 64,
				id: 627,
				width: 448,
				x: 20032,
				y: 576,
			},
			{
				height: 128,
				id: 628,
				width: 128,
				x: 19904,
				y: 576,
			},
			{
				height: 192,
				id: 629,
				width: 320,
				x: 19584,
				y: 576,
			},
			{
				height: 128,
				id: 630,
				width: 320,
				x: 19264,
				y: 640,
			},
			{
				height: 64,
				id: 631,
				width: 320,
				x: 19264,
				y: 576,
			},
			{
				height: 256,
				id: 632,
				width: 128,
				x: 18432,
				y: 576,
			},
			{
				height: 256,
				id: 633,
				width: 128,
				x: 18560,
				y: 576,
			},
			{
				height: 192,
				id: 634,
				width: 320,
				x: 18688,
				y: 576,
			},
			{
				height: 128,
				id: 635,
				width: 256,
				x: 19008,
				y: 576,
			},
			{
				height: 704,
				id: 636,
				width: 704,
				x: 17088,
				y: 1024,
			},
			{
				height: 128,
				id: 637,
				width: 512,
				x: 17792,
				y: 1024,
			},
			{
				height: 128,
				id: 638,
				width: 320,
				x: 17792,
				y: 1152,
			},
			{
				height: 128,
				id: 639,
				width: 256,
				x: 17792,
				y: 1280,
			},
			{
				height: 128,
				id: 640,
				width: 128,
				x: 17792,
				y: 1408,
			},
			{
				height: 128,
				id: 641,
				width: 64,
				x: 17792,
				y: 1536,
			},
			{
				height: 128,
				id: 642,
				width: 1088,
				x: 16000,
				y: 1024,
			},
			{
				height: 64,
				id: 643,
				width: 640,
				x: 16448,
				y: 1152,
			},
			{
				height: 192,
				id: 644,
				width: 448,
				x: 16640,
				y: 1216,
			},
			{
				height: 128,
				id: 645,
				width: 320,
				x: 16768,
				y: 1408,
			},
			{
				height: 128,
				id: 646,
				width: 128,
				x: 16960,
				y: 1536,
			},
			{
				height: 192,
				id: 647,
				width: 1536,
				x: 14400,
				y: 576,
			},
			{
				height: 192,
				id: 648,
				width: 2624,
				x: 11776,
				y: 576,
			},
			{
				height: 128,
				id: 649,
				width: 448,
				x: 11328,
				y: 576,
			},

			{
				height: 192,
				id: 650,
				width: 576,
				x: 10752,
				y: 576,
			},
			{
				height: 64,
				id: 651,
				width: 448,
				x: 10752,
				y: 768,
			},
			{
				height: 256,
				id: 652,
				width: 256,
				x: 9216,
				y: 576,
			},
			{
				height: 128,
				id: 653,
				width: 1280,
				x: 9472,
				y: 576,
			},
			{
				height: 128,
				id: 654,
				width: 192,
				x: 9472,
				y: 704,
			},
			{
				height: 128,
				id: 655,
				width: 448,
				x: 10112,
				y: 704,
			},
			{
				height: 128,
				id: 658,
				width: 320,
				x: 12032,
				y: 768,
			},
			{
				height: 128,
				id: 659,
				width: 128,
				x: 12352,
				y: 768,
			},
			{
				height: 192,
				id: 660,
				width: 832,
				x: 12480,
				y: 768,
			},
			{
				height: 128,
				id: 661,
				width: 640,
				x: 12608,
				y: 960,
			},
			{
				height: 192,
				id: 662,
				width: 192,
				x: 8704,
				y: 960,
			},
			{
				height: 256,
				id: 663,
				width: 128,
				x: 8896,
				y: 960,
			},
			{
				height: 128,
				id: 664,
				width: 128,
				x: 9024,
				y: 960,
			},
			{
				height: 576,
				id: 665,
				width: 704,
				x: 8000,
				y: 960,
			},
			{
				height: 64,
				id: 666,
				width: 384,
				x: 7616,
				y: 960,
			},
			{
				height: 192,
				id: 667,
				width: 256,
				x: 7744,
				y: 1024,
			},
			{
				height: 128,
				id: 668,
				width: 128,
				x: 7872,
				y: 1216,
			},
			{
				height: 128,
				id: 669,
				width: 704,
				x: 8000,
				y: 1536,
			},
			{
				height: 192,
				id: 670,
				width: 640,
				x: 8064,
				y: 1664,
			},
			{
				height: 64,
				id: 671,
				width: 512,
				x: 8128,
				y: 1856,
			},
			{
				height: 64,
				id: 672,
				width: 384,
				x: 8192,
				y: 1920,
			},
			{
				height: 64,
				id: 673,
				width: 256,
				x: 6272,
				y: 1024,
			},
			{
				height: 128,
				id: 674,
				width: 448,
				x: 6784,
				y: 1024,
			},
			{
				height: 64,
				id: 675,
				width: 192,
				x: 6912,
				y: 1152,
			},
		],
	},
];

/**
 * Defines the collision data for all the hazard-objects in the game.
 * This data is used to detect collisions between the player and the aforementioned objects and cause damage to the player.
 * Each object in the `objects` sub-array represents a rectangular collision area with the given dimensions and position.
 */
const hazardCollisions = [
	{
		objects: [
			{
				height: 46,
				id: 676,

				width: 171,
				x: 24320,
				y: 4433,
			},
			{
				height: 71,
				id: 677,

				width: 161,
				x: 24307,
				y: 4482,
			},
			{
				height: 72,
				id: 678,

				width: 175,
				x: 24249,
				y: 4604,
			},
			{
				height: 86,
				id: 679,

				width: 144,
				x: 24337,
				y: 4685,
			},
			{
				height: 77,
				id: 680,

				width: 78,
				x: 24425,
				y: 4777,
			},
			{
				height: 102,
				id: 681,

				width: 58,
				x: 24522,
				y: 4783,
			},
			{
				height: 134,
				id: 682,

				width: 60,
				x: 24583,
				y: 4797,
			},
			{
				height: 122,
				id: 683,

				width: 79,
				x: 24651,
				y: 4806,
			},
			{
				height: 52,
				id: 684,

				width: 122,
				x: 24736,
				y: 5032,
			},
			{
				height: 42,
				id: 685,

				width: 86,
				x: 24722,
				y: 5092,
			},
			{
				height: 91,
				id: 686,

				width: 94,
				x: 24757,
				y: 5138,
			},
			{
				height: 94,
				id: 689,

				width: 56,
				x: 24977,
				y: 5349,
			},
			{
				height: 90,
				id: 690,

				width: 58,
				x: 25059,
				y: 5327,
			},
			{
				height: 63,
				id: 691,

				width: 101,
				x: 24869,
				y: 5321,
			},
			{
				height: 48,
				id: 692,

				width: 101,
				x: 24763,
				y: 5301,
			},
			{
				height: 39,
				id: 693,

				width: 88,
				x: 24799,
				y: 5253,
			},
			{
				height: 110,
				id: 694,

				width: 74,
				x: 25126,
				y: 5327,
			},
			{
				height: 119,
				id: 695,

				width: 119,
				x: 25247,
				y: 5510,
			},
			{
				height: 63,
				id: 696,

				width: 177,
				x: 25192,
				y: 5631,
			},
			{
				height: 85,
				id: 697,

				width: 63,
				x: 25280,
				y: 5697,
			},
			{
				height: 63,
				id: 698,

				width: 71,
				x: 25353,
				y: 5740,
			},
			{
				height: 80,
				id: 699,

				width: 56,
				x: 25371,
				y: 5802,
			},
			{
				height: 85,
				id: 700,

				width: 50,
				x: 25473,
				y: 5826,
			},
			{
				height: 130,
				id: 701,

				width: 61,
				x: 25529,
				y: 5832,
			},
			{
				height: 115,
				id: 702,

				width: 68,
				x: 25600,
				y: 5833,
			},
			{
				height: 34,
				id: 703,

				width: 116,
				x: 23945.4,
				y: 6027.88,
			},
			{
				height: 39,
				id: 704,

				width: 87,
				x: 23944.4,
				y: 6078.88,
			},
			{
				height: 59,
				id: 705,

				width: 122,
				x: 23952.4,
				y: 6130.88,
			},
			{
				height: 171,
				id: 706,

				width: 48,
				x: 24108.4,
				y: 6087.88,
			},
			{
				height: 86,
				id: 707,

				width: 54,
				x: 24158.4,
				y: 6141.88,
			},
			{
				height: 62,
				id: 708,

				width: 75,
				x: 24239.4,
				y: 6168.88,
			},
			{
				height: 75,
				id: 709,

				width: 82,
				x: 24306.4,
				y: 6239.88,
			},
			{
				height: 81.0909,
				id: 710,

				width: 144,
				x: 24327.4,
				y: 6329.88,
			},
			{
				height: 91.3333,
				id: 711,

				width: 122,
				x: 24302.4,
				y: 6421.55,
			},
			{
				height: 61,
				id: 712,

				width: 117,
				x: 24324.4,
				y: 6518.88,
			},
			{
				height: 68,
				id: 713,

				width: 110,
				x: 24380.4,
				y: 6602.88,
			},
			{
				height: 209,
				id: 714,

				width: 90,
				x: 21888,
				y: 6907,
			},
			{
				height: 253,
				id: 715,

				width: 117,
				x: 21707,
				y: 6873,
			},
			{
				height: 232,
				id: 716,

				width: 34,
				x: 21646,
				y: 6822,
			},
			{
				height: 32,
				id: 717,

				width: 16,
				x: 21587,
				y: 6617,
			},
			{
				height: 58,
				id: 718,

				width: 21,
				x: 21564,
				y: 6631,
			},
			{
				height: 66,
				id: 719,

				width: 21,
				x: 21540,
				y: 6663,
			},
			{
				height: 86,
				id: 720,

				width: 21,
				x: 21516,
				y: 6687,
			},
			{
				height: 113,
				id: 721,

				width: 25,
				x: 21487,
				y: 6715,
			},
			{
				height: 128,
				id: 722,

				width: 15,
				x: 21467,
				y: 6743,
			},
			{
				height: 115,
				id: 723,

				width: 16,
				x: 21443,
				y: 6762,
			},
			{
				height: 184,
				id: 724,

				width: 15,
				x: 21625,
				y: 6867,
			},
			{
				height: 135,
				id: 725,

				width: 18,
				x: 21598,
				y: 6907,
			},
			{
				height: 239,
				id: 726,

				width: 54,
				x: 21334,
				y: 6633,
			},
			{
				height: 178,
				id: 727,

				width: 49,
				x: 21246,
				y: 6698,
			},
			{
				height: 168,
				id: 728,

				width: 74,
				x: 21136,
				y: 6624,
			},

			{
				height: 44,
				id: 729,

				width: 28,
				x: 20985,
				y: 6736,
			},
			{
				height: 32,
				id: 730,

				width: 39,
				x: 20823,
				y: 6774,
			},
			{
				height: 38,
				id: 731,

				width: 93,
				x: 20843,
				y: 6814,
			},
			{
				height: 30,
				id: 732,

				width: 127,
				x: 20876,
				y: 6863,
			},
			{
				height: 21,
				id: 733,

				width: 130,
				x: 20914,
				y: 6905,
			},
			{
				height: 15,
				id: 734,

				width: 40,
				x: 20999,
				y: 6789,
			},
			{
				height: 18,
				id: 735,

				width: 53,
				x: 21008,
				y: 6814,
			},
			{
				height: 20,
				id: 736,

				width: 68,
				x: 21020,
				y: 6845,
			},
			{
				height: 234,
				id: 737,

				width: 39,
				x: 20620,
				y: 6818,
			},
			{
				height: 30,
				id: 738,

				width: 70,
				x: 20731,
				y: 7033,
			},
			{
				height: 155,
				id: 739,

				width: 16,
				x: 20603,
				y: 6895,
			},
			{
				height: 90,
				id: 740,

				width: 16,
				x: 20583,
				y: 6954,
			},
			{
				height: 19,
				id: 744,

				width: 51,
				x: 20749,
				y: 7010,
			},
			{
				height: 14,
				id: 745,

				width: 49,
				x: 20756,
				y: 6992,
			},
			{
				height: 12,
				id: 746,

				width: 40,
				x: 20767,
				y: 6975,
			},
			{
				height: 12,
				id: 747,

				width: 34,
				x: 20777,
				y: 6957,
			},
			{
				height: 24,
				id: 748,

				width: 27,
				x: 20786,
				y: 6927,
			},
			{
				height: 262.671,
				id: 763,

				width: 78.0911,
				x: 18636.4,
				y: 7515,
			},
			{
				height: 254.43,
				id: 770,

				width: 139.782,
				x: 18347.7,
				y: 7552.45,
			},
			{
				height: 182.885,
				id: 775,

				width: 86.9549,
				x: 18226.5,
				y: 7558,
			},
			{
				height: 158.017,
				id: 778,

				width: 107.252,
				x: 18075.5,
				y: 7680,
			},
			{
				height: 156.257,
				id: 786,

				width: 152.902,
				x: 17917.5,
				y: 7729,
			},
			{
				height: 203,
				id: 794,

				width: 39,
				x: 14683,
				y: 6908,
			},
			{
				height: 60,
				id: 795,

				width: 123,
				x: 14595,
				y: 7146,
			},
			{
				height: 45,
				id: 796,

				width: 65,
				x: 14616,
				y: 7096,
			},
			{
				height: 61,
				id: 797,

				width: 31,
				x: 14649,
				y: 7033,
			},
			{
				height: 40,
				id: 798,

				width: 19,
				x: 14659,
				y: 6993,
			},
			{
				height: 52,
				id: 799,

				width: 37,
				x: 14939,
				y: 6744,
			},
			{
				height: 73,
				id: 800,

				width: 60,
				x: 14929,
				y: 6804,
			},
			{
				height: 98,
				id: 801,

				width: 100,
				x: 14912,
				y: 6883,
			},
			{
				height: 217,
				id: 802,

				width: 131,
				x: 14902,
				y: 6986,
			},
			{
				height: 58,
				id: 803,

				width: 22,
				x: 15178,
				y: 6913,
			},
			{
				height: 64,
				id: 804,

				width: 56,
				x: 15140,
				y: 6983,
			},
			{
				height: 55,
				id: 805,

				width: 103,
				x: 15091,
				y: 7060,
			},
			{
				height: 72,
				id: 806,

				width: 145,
				x: 15043,
				y: 7125,
			},
			{
				height: 91,
				id: 807,

				width: 83,
				x: 15199,
				y: 7080,
			},
			{
				height: 84,
				id: 808,

				width: 42,
				x: 15424,
				y: 7093,
			},
			{
				height: 83,
				id: 810,

				width: 166,
				x: 15199,
				y: 7175,
			},
			{
				height: 70,
				id: 812,

				width: 45,
				x: 15374,
				y: 7136,
			},
			{
				height: 86,
				id: 813,

				width: 100,
				x: 14482,
				y: 7122,
			},
			{
				height: 40,
				id: 814,

				width: 81,
				x: 14477,
				y: 7071,
			},
			{
				height: 40,
				id: 815,

				width: 156,
				x: 12197,
				y: 7324,
			},
			{
				height: 34,
				id: 816,

				width: 55,
				x: 12299,
				y: 7367,
			},
			{
				height: 41,
				id: 817,

				width: 88,
				x: 12329,
				y: 7402,
			},
			{
				height: 55,
				id: 818,

				width: 96,
				x: 12362,
				y: 7448,
			},
			{
				height: 105,
				id: 820,

				width: 155,
				x: 12462,
				y: 7346,
			},
			{
				height: 49,
				id: 821,

				width: 109,
				x: 12432,
				y: 7293,
			},
			{
				height: 23,
				id: 822,

				width: 87,
				x: 12416,
				y: 7268,
			},
			{
				height: 17,
				id: 823,

				width: 68,
				x: 12405,
				y: 7248,
			},
			{
				height: 32,
				id: 824,

				width: 37,
				x: 12378,
				y: 7190,
			},
			{
				height: 20,
				id: 825,

				width: 64,
				x: 12390,
				y: 7224,
			},

			{
				height: 32,
				id: 826,

				width: 28,
				x: 12559,
				y: 7171,
			},
			{
				height: 66,
				id: 827,

				width: 40,
				x: 12566,
				y: 7209,
			},
			{
				height: 56,
				id: 828,

				width: 85,
				x: 12580,
				y: 7285,
			},
			{
				height: 51,
				id: 829,

				width: 23,
				x: 12611,
				y: 7230,
			},
			{
				height: 39,
				id: 830,

				width: 89,
				x: 12726,
				y: 7213,
			},
			{
				height: 34,
				id: 831,

				width: 64,
				x: 12733,
				y: 7167,
			},
			{
				height: 33,
				id: 832,

				width: 40,
				x: 12741,
				y: 7121,
			},
			{
				height: 32,
				id: 833,

				width: 21,
				x: 12748,
				y: 7078,
			},
			{
				height: 35,
				id: 834,

				width: 54,
				x: 12851,
				y: 7230,
			},
			{
				height: 43,
				id: 835,

				width: 36,
				x: 12865,
				y: 7178,
			},
			{
				height: 43,
				id: 836,

				width: 27,
				x: 13002,
				y: 7126,
			},
			{
				height: 25,
				id: 837,

				width: 48,
				x: 12973,
				y: 7174,
			},
			{
				height: 22,
				id: 838,

				width: 59,
				x: 12953,
				y: 7207,
			},
			{
				height: 33,
				id: 839,

				width: 80,
				x: 12924,
				y: 7243,
			},
			{
				height: 40,
				id: 840,

				width: 155,
				x: 12836,
				y: 7287,
			},
			{
				height: 27,
				id: 843,

				width: 54,
				x: 12359,
				y: 7371,
			},
			{
				height: 42,
				id: 844,

				width: 37,
				x: 12422,
				y: 7403,
			},
			{
				height: 35,
				id: 849,

				width: 128,
				x: 20376,
				y: 6944,
			},
			{
				height: 21,
				id: 850,

				width: 88,
				x: 20393,
				y: 6912,
			},
			{
				height: 19,
				id: 851,

				width: 22,
				x: 20514,
				y: 6966,
			},
			{
				height: 34,
				id: 852,

				width: 40,
				x: 20541,
				y: 6981,
			},
			{
				height: 34,
				id: 853,

				width: 144,
				x: 21989,
				y: 7064,
			},
			{
				height: 86,
				id: 854,

				width: 45,
				x: 24423.4,
				y: 6687.88,
			},
			{
				height: 220,
				id: 888,

				width: 1138,
				x: 10048,
				y: 5306,
			},
			{
				height: 66,
				id: 902,

				width: 263,
				x: 8050,
				y: 7387,
			},
			{
				height: 102,
				id: 903,

				width: 120,
				x: 8094,
				y: 7282,
			},
			{
				height: 111,
				id: 904,

				width: 43,
				x: 8082,
				y: 7169,
			},
			{
				height: 147,
				id: 905,

				width: 59,
				x: 7681,
				y: 6991,
			},
			{
				height: 33,
				id: 906,

				width: 76,
				x: 7601,
				y: 6989,
			},
			{
				height: 89,
				id: 907,

				width: 33,
				x: 7772,
				y: 7055,
			},
			{
				height: 141,
				id: 908,

				width: 25,
				x: 7864,
				y: 7006,
			},
			{
				height: 81,
				id: 909,

				width: 46,
				x: 7813,
				y: 7062,
			},
			{
				height: 40,
				id: 910,

				width: 53,
				x: 8013,
				y: 7002,
			},
			{
				height: 19,
				id: 911,

				width: 61,
				x: 7993,
				y: 7045,
			},
			{
				height: 35,
				id: 912,

				width: 88,
				x: 7956,
				y: 7066,
			},
			{
				height: 37,
				id: 913,

				width: 98,
				x: 7925,
				y: 7103,
			},
			{
				height: 76,
				id: 914,

				width: 106,
				x: 7894,
				y: 7142,
			},
			{
				height: 58,
				id: 915,

				width: 75,
				x: 8004,
				y: 7210,
			},
			{
				height: 60,
				id: 916,

				width: 94,
				x: 5069,
				y: 7833,
			},
			{
				height: 51,
				id: 917,

				width: 56,
				x: 5075,
				y: 7780,
			},
			{
				height: 80,
				id: 918,

				width: 39,
				x: 5024,
				y: 7766,
			},
			{
				height: 79,
				id: 919,

				width: 29,
				x: 4971,
				y: 7723,
			},
			{
				height: 96,
				id: 920,

				width: 75,
				x: 4885,
				y: 7729,
			},
			{
				height: 102,
				id: 921,

				width: 76,
				x: 4805,
				y: 7728,
			},
			{
				height: 743,
				id: 924,

				width: 788,
				x: 4008,
				y: 7286,
			},
			{
				height: 167,
				id: 925,

				width: 73,
				x: 3927,
				y: 7607,
			},
			{
				height: 110,
				id: 926,

				width: 218,
				x: 3701,
				y: 7693,
			},
			{
				height: 59,
				id: 927,

				width: 54,
				x: 3643,
				y: 7732,
			},
			{
				height: 57,
				id: 928,

				width: 59,
				x: 3580,
				y: 7748,
			},
			{
				height: 33,
				id: 929,

				width: 31,
				x: 3546,
				y: 7798,
			},
			{
				height: 46,
				id: 930,

				width: 153,
				x: 3460,
				y: 7833,
			},

			{
				height: 53,
				id: 931,

				width: 101,
				x: 2955,
				y: 6821,
			},
			{
				height: 93,
				id: 932,

				width: 104,
				x: 2954,
				y: 6878,
			},
			{
				height: 62,
				id: 933,

				width: 119,
				x: 2885,
				y: 6981,
			},
			{
				height: 68,
				id: 934,

				width: 206,
				x: 2770,
				y: 7047,
			},
			{
				height: 245,
				id: 935,

				width: 69,
				x: 2615,
				y: 6764,
			},
			{
				height: 58,
				id: 936,

				width: 96,
				x: 2654,
				y: 7013,
			},
			{
				height: 124,
				id: 937,

				width: 130,
				x: 2510,
				y: 6561,
			},
			{
				height: 222,
				id: 938,

				width: 78,
				x: 2305,
				y: 6396,
			},
			{
				height: 126,
				id: 939,

				width: 36,
				x: 2232,
				y: 6430,
			},
			{
				height: 159,
				id: 940,

				width: 136,
				x: 2089,
				y: 6388,
			},
			{
				height: 104,
				id: 941,

				width: 210,
				x: 1796,
				y: 6218,
			},
			{
				height: 129,
				id: 942,

				width: 173,
				x: 1842,
				y: 6084,
			},
			{
				height: 112,
				id: 943,

				width: 142,
				x: 1938,
				y: 6326,
			},
			{
				height: 157,
				id: 944,

				width: 120,
				x: 2387,
				y: 6396,
			},
			{
				height: 151,
				id: 945,

				width: 105,
				x: 4079,
				y: 5425,
			},
			{
				height: 87,
				id: 946,

				width: 258,
				x: 3626,
				y: 5099,
			},
			{
				height: 66,
				id: 947,

				width: 223,
				x: 3706,
				y: 5011,
			},
			{
				height: 59,
				id: 948,

				width: 101,
				x: 3788,
				y: 4946,
			},
			{
				height: 105,
				id: 949,

				width: 133,
				x: 3779,
				y: 4833,
			},
			{
				height: 77,
				id: 950,

				width: 85,
				x: 3911,
				y: 4752,
			},
			{
				height: 100,
				id: 951,

				width: 62,
				x: 3991,
				y: 4647,
			},
			{
				height: 84,
				id: 952,

				width: 152,
				x: 4061,
				y: 4691,
			},
			{
				height: 173,
				id: 953,

				width: 140,
				x: 4090,
				y: 4513,
			},
			{
				height: 37,
				id: 954,

				width: 230,
				x: 3753,
				y: 5290,
			},
			{
				height: 30,
				id: 955,

				width: 160,
				x: 3824,
				y: 5330,
			},
			{
				height: 71,
				id: 956,

				width: 155,
				x: 3919,
				y: 5432,
			},
			{
				height: 74,
				id: 957,

				width: 91,
				x: 3824,
				y: 5369,
			},
			{
				height: 98,
				id: 958,

				width: 80,
				x: 3835,
				y: 5189,
			},
			{
				height: 155,
				id: 959,

				width: 126,
				x: 6014,
				y: 4485,
			},
			{
				height: 99,
				id: 960,

				width: 217,
				x: 6147,
				y: 4594,
			},
			{
				height: 115,
				id: 962,

				width: 127,
				x: 6369,
				y: 4573,
			},
			{
				height: 105.392,
				id: 963,

				width: 108,
				x: 6429,
				y: 4460.61,
			},
			{
				height: 53,
				id: 965,

				width: 66,
				x: 6534,
				y: 4400,
			},
			{
				height: 380,
				id: 967,

				width: 591,
				x: 5470,
				y: 2508,
			},
			{
				height: 472,
				id: 968,

				width: 567,
				x: 5493,
				y: 2899,
			},
			{
				height: 122,
				id: 970,

				width: 552,
				x: 5686,
				y: 3380,
			},
			{
				height: 180,
				id: 971,

				width: 101,
				x: 6064,
				y: 3068,
			},
			{
				height: 61,
				id: 973,

				width: 97,
				x: 10220,
				y: 2553,
			},
			{
				height: 47,
				id: 974,

				width: 229,
				x: 10129,
				y: 2687,
			},
			{
				height: 63,
				id: 975,

				width: 150,
				x: 10131,
				y: 2619,
			},
			{
				height: 81,
				id: 976,

				width: 59,
				x: 10082,
				y: 2537,
			},
			{
				height: 84,
				id: 977,

				width: 97,
				x: 9981,
				y: 2573,
			},
			{
				height: 160,
				id: 978,

				width: 52,
				x: 9923,
				y: 2498,
			},
			{
				height: 131,
				id: 979,

				width: 71,
				x: 9792,
				y: 2566,
			},
			{
				height: 63,
				id: 980,

				width: 48,
				x: 9868,
				y: 2614,
			},
			{
				height: 57,
				id: 981,

				width: 47,
				x: 9663,
				y: 2577,
			},
			{
				height: 104,
				id: 982,

				width: 251,
				x: 9611,
				y: 2701,
			},
			{
				height: 57,
				id: 983,

				width: 96,
				x: 9692,
				y: 2639,
			},
			{
				height: 89,
				id: 984,

				width: 138,
				x: 7688,
				y: 4549,
			},
			{
				height: 67,
				id: 985,

				width: 90,
				x: 7733,
				y: 4642,
			},
			{
				height: 39,
				id: 986,

				width: 57,
				x: 7764,
				y: 4712,
			},

			{
				height: 75,
				id: 987,

				width: 161,
				x: 7825,
				y: 4717,
			},
			{
				height: 45,
				id: 988,

				width: 30,
				x: 7894,
				y: 4794,
			},
			{
				height: 38,
				id: 989,

				width: 48,
				x: 8174,
				y: 4545,
			},
			{
				height: 92,
				id: 990,

				width: 112,
				x: 8043,
				y: 4546,
			},
			{
				height: 39,
				id: 991,

				width: 82,
				x: 8025,
				y: 4640,
			},
			{
				height: 65,
				id: 992,

				width: 82,
				x: 7989,
				y: 4682,
			},
			{
				height: 57,
				id: 993,

				width: 76,
				x: 10864,
				y: 3920,
			},
			{
				height: 61,
				id: 994,

				width: 42,
				x: 10899,
				y: 3980,
			},
			{
				height: 100,
				id: 995,

				width: 85,
				x: 10909,
				y: 4043,
			},
			{
				height: 130,
				id: 996,

				width: 100,
				x: 11011,
				y: 4037,
			},
			{
				height: 84,
				id: 997,

				width: 35,
				x: 11118,
				y: 4119,
			},
			{
				height: 72,
				id: 998,

				width: 41,
				x: 11180,
				y: 4099,
			},
			{
				height: 117,
				id: 999,

				width: 75,
				x: 11225,
				y: 4061,
			},
			{
				height: 98,
				id: 1000,

				width: 244,
				x: 11304,
				y: 4040,
			},
			{
				height: 34,
				id: 1001,

				width: 91,
				x: 11653,
				y: 3835,
			},
			{
				height: 52,
				id: 1002,

				width: 57,
				x: 11555,
				y: 4041,
			},
			{
				height: 92,
				id: 1003,

				width: 68,
				x: 11615,
				y: 3985,
			},
			{
				height: 35,
				id: 1004,

				width: 37,
				x: 11686,
				y: 3985,
			},
			{
				height: 68,
				id: 1005,

				width: 82,
				x: 11608,
				y: 3908,
			},
			{
				height: 96,
				id: 1006,

				width: 104,
				x: 14218,
				y: 3262,
			},
			{
				height: 80,
				id: 1007,

				width: 155,
				x: 14148,
				y: 3419,
			},
			{
				height: 53,
				id: 1008,

				width: 118,
				x: 14148,
				y: 3361,
			},
			{
				height: 62,
				id: 1009,

				width: 117,
				x: 14152,
				y: 3502,
			},
			{
				height: 186,
				id: 1010,

				width: 86,
				x: 13862,
				y: 3279,
			},
			{
				height: 54,
				id: 1011,

				width: 231,
				x: 13914,
				y: 3466,
			},
			{
				height: 82,
				id: 1012,

				width: 203,
				x: 13945,
				y: 3524,
			},
			{
				height: 231.461,
				id: 1174,

				width: 211.236,
				x: 6104.49,
				y: 5574.16,
			},
			{
				height: 192.135,
				id: 1175,

				width: 116.854,
				x: 6176.4,
				y: 5812.36,
			},
			{
				height: 115.73,
				id: 1176,

				width: 105.618,
				x: 6305.62,
				y: 5992.13,
			},
			{
				height: 217.978,
				id: 1177,

				width: 82.0225,
				x: 6429.21,
				y: 5996.63,
			},
			{
				height: 107.865,
				id: 1178,

				width: 164.045,
				x: 6552.81,
				y: 6031.46,
			},
			{
				height: 100,
				id: 1179,

				width: 113.483,
				x: 6723.6,
				y: 5957.3,
			},
			{
				height: 205.502,
				id: 1218,

				width: 82.0031,
				x: 11392.2,
				y: 7084.82,
			},
			{
				height: 45.0704,
				id: 1219,

				width: 62.5978,
				x: 11369,
				y: 7034.74,
			},
			{
				height: 66.3537,
				id: 1220,

				width: 267.919,
				x: 11139.9,
				y: 6964.01,
			},
			{
				height: 177.381,
				id: 1234,

				width: 134.873,
				x: 18493,
				y: 7598.89,
			},
			{
				height: 103,
				id: 1421,

				width: 397,
				x: 10724,
				y: 5530,
			},
			{
				height: 72,
				id: 1423,

				width: 527,
				x: 12502,
				y: 5644,
			},
			{
				height: 72,
				id: 1424,

				width: 266,
				x: 12542,
				y: 5759,
			},
			{
				height: 37,
				id: 1425,

				width: 420,
				x: 12564,
				y: 5719,
			},
			{
				height: 99,
				id: 1426,

				width: 277,
				x: 11189,
				y: 5305,
			},
			{
				height: 199,
				id: 1427,

				width: 392,
				x: 11469,
				y: 5377,
			},
			{
				height: 269,
				id: 1428,

				width: 243,
				x: 11872,
				y: 5222,
			},
			{
				height: 158,
				id: 1429,

				width: 200,
				x: 12118,
				y: 5273,
			},
			{
				height: 315,
				id: 1430,

				width: 254,
				x: 14633,
				y: 5098,
			},
			{
				height: 108,
				id: 1431,

				width: 319,
				x: 14890,
				y: 5128,
			},
			{
				height: 330,
				id: 1432,

				width: 245,
				x: 14384,
				y: 5028,
			},
			{
				height: 78,
				id: 1433,

				width: 72,
				x: 14925,
				y: 5237,
			},
			{
				height: 173,
				id: 1434,

				width: 84,
				x: 15001,
				y: 5240,
			},
			{
				height: 119,
				id: 1435,

				width: 93,
				x: 14217,
				y: 4949,
			},
			{
				height: 294,
				id: 1436,

				width: 66,
				x: 14315,
				y: 4827,
			},

			{
				height: 196,
				id: 1437,

				width: 50,
				x: 14387,
				y: 4827,
			},
			{
				height: 122,
				id: 1438,

				width: 110,
				x: 14443,
				y: 4901,
			},
			{
				height: 59,
				id: 1439,

				width: 62,
				x: 14557,
				y: 4964,
			},
			{
				height: 88,
				id: 1440,

				width: 37,
				x: 14851,
				y: 5008,
			},
			{
				height: 49,
				id: 1441,

				width: 44,
				x: 15055,
				y: 5076,
			},
			{
				height: 708,
				id: 1443,

				width: 559,
				x: 7188,
				y: 1751,
			},
			{
				height: 148,
				id: 1444,

				width: 409,
				x: 7761,
				y: 2040,
			},
			{
				height: 161,
				id: 1445,

				width: 130,
				x: 7761,
				y: 2198,
			},
			{
				height: 413,
				id: 1446,

				width: 196,
				x: 7757,
				y: 1617,
			},
			{
				height: 1071,
				id: 1447,

				width: 168,
				x: 7006,
				y: 1985,
			},
			{
				height: 233,
				id: 1448,

				width: 312,
				x: 7174,
				y: 2648,
			},
			{
				height: 168,
				id: 1449,

				width: 78,
				x: 7188,
				y: 2469,
			},
			{
				height: 401,
				id: 1450,

				width: 312,
				x: 6707,
				y: 3067,
			},
			{
				height: 226,
				id: 1451,

				width: 175,
				x: 7026,
				y: 3067,
			},
			{
				height: 134,
				id: 1452,

				width: 175,
				x: 6820,
				y: 2215,
			},
			{
				height: 86,
				id: 1453,

				width: 196,
				x: 6806,
				y: 2462,
			},
			{
				height: 494,
				id: 1454,

				width: 285,
				x: 6710,
				y: 2569,
			},
			{
				height: 580,
				id: 1455,

				width: 79,
				x: 6621,
				y: 2885,
			},
			{
				height: 131,
				id: 1459,

				width: 228,
				x: 19339,
				y: 2495,
			},
			{
				height: 202,
				id: 1460,

				width: 117,
				x: 19216,
				y: 2355,
			},
			{
				height: 217,
				id: 1461,

				width: 121,
				x: 18900,
				y: 2525,
			},
			{
				height: 100,
				id: 1462,

				width: 24,
				x: 18996,
				y: 2421,
			},
			{
				height: 167,
				id: 1463,

				width: 52,
				x: 19142,
				y: 2399,
			},
			{
				height: 114,
				id: 1465,

				width: 43,
				x: 19093,
				y: 2453,
			},
			{
				height: 266,
				id: 1466,

				width: 62,
				x: 19025,
				y: 2476,
			},
			{
				height: 226,
				id: 1467,

				width: 95,
				x: 18799,
				y: 2583,
			},
			{
				height: 78,
				id: 1468,

				width: 155,
				x: 18637,
				y: 2730,
			},
			{
				height: 228,
				id: 1469,

				width: 176,
				x: 18635,
				y: 2815,
			},
			{
				height: 190,
				id: 1470,

				width: 176,
				x: 18900,
				y: 2749,
			},
			{
				height: 102,
				id: 1471,

				width: 75,
				x: 18818,
				y: 2818,
			},
			{
				height: 107,
				id: 1472,

				width: 482,
				x: 19092,
				y: 2632,
			},
			{
				height: 107,
				id: 1473,

				width: 203,
				x: 19271,
				y: 2743,
			},
			{
				height: 150,
				id: 1481,

				width: 127,
				x: 10358,
				y: 6989,
			},
			{
				height: 140,
				id: 1482,

				width: 211,
				x: 10310,
				y: 7145,
			},
			{
				height: 93,
				id: 1484,

				width: 143,
				x: 10402,
				y: 6893,
			},
			{
				height: 69,
				id: 1485,

				width: 395,
				x: 10475,
				y: 6815,
			},
			{
				height: 95,
				id: 1486,

				width: 46,
				x: 10558,
				y: 6718,
			},
			{
				height: 45,
				id: 1487,

				width: 205,
				x: 10664,
				y: 6765,
			},
			{
				height: 72,
				id: 1488,

				width: 67,
				x: 10803,
				y: 6688,
			},
			{
				height: 25,
				id: 1489,

				width: 69,
				x: 10728,
				y: 6735,
			},
			{
				height: 187,
				id: 1520,

				width: 356,
				x: 15219,
				y: 3977,
			},
			{
				height: 106,
				id: 1521,

				width: 296,
				x: 15148,
				y: 3863,
			},
			{
				height: 126,
				id: 1522,

				width: 69,
				x: 15275,
				y: 3733,
			},
			{
				height: 54,
				id: 1523,

				width: 451,
				x: 14945,
				y: 4167,
			},
			{
				height: 539,
				id: 1524,

				width: 381,
				x: 14743,
				y: 4463,
			},
			{
				height: 136,
				id: 1525,

				width: 85,
				x: 15128,
				y: 4024,
			},
			{
				height: 65,
				id: 1526,

				width: 190,
				x: 15109,
				y: 4228,
			},
			{
				height: 67,
				id: 1527,

				width: 504,
				x: 14987,
				y: 4296,
			},
			{
				height: 54,
				id: 1528,

				width: 304,
				x: 15112,
				y: 4409,
			},
			{
				height: 39,
				id: 1529,

				width: 292,
				x: 15113,
				y: 4366,
			},
			{
				height: 349,
				id: 1530,

				width: 117,
				x: 15128,
				y: 4467,
			},

			{
				height: 224,
				id: 1531,

				width: 29,
				x: 15247,
				y: 4468,
			},
			{
				height: 91,
				id: 1532,

				width: 121,
				x: 15279,
				y: 4552,
			},
			{
				height: 70,
				id: 1533,

				width: 310,
				x: 14425,
				y: 4753,
			},
			{
				height: 219,
				id: 1534,

				width: 112,
				x: 14624,
				y: 4529,
			},
			{
				height: 87,
				id: 1535,

				width: 81,
				x: 14460,
				y: 4664,
			},
			{
				height: 52,
				id: 1536,

				width: 68,
				x: 14548,
				y: 4696,
			},
			{
				height: 254,
				id: 1591,

				width: 228,
				x: 19674,
				y: 4486,
			},
			{
				height: 71,
				id: 1592,

				width: 258,
				x: 19598,
				y: 4742,
			},
			{
				height: 64,
				id: 1593,

				width: 146,
				x: 19637,
				y: 4817,
			},
			{
				height: 391,
				id: 1594,

				width: 141,
				x: 19852,
				y: 4854,
			},
			{
				height: 239,
				id: 1595,

				width: 62,
				x: 19787,
				y: 4817,
			},
			{
				height: 106,
				id: 1596,

				width: 37,
				x: 19746,
				y: 4886,
			},
			{
				height: 55,
				id: 1597,

				width: 71,
				x: 19671,
				y: 4887,
			},
			{
				height: 91,
				id: 1598,

				width: 92,
				x: 19997,
				y: 5017,
			},
			{
				height: 356,
				id: 1605,

				width: 306,
				x: 16693,
				y: 5576,
			},
			{
				height: 137,
				id: 1606,

				width: 94,
				x: 16590,
				y: 5574,
			},
			{
				height: 304,
				id: 1607,

				width: 86,
				x: 17155,
				y: 5653,
			},
			{
				height: 208,
				id: 1608,

				width: 136,
				x: 17008,
				y: 5657,
			},
			{
				height: 180,
				id: 1609,

				width: 175,
				x: 17247,
				y: 5651,
			},
			{
				height: 137,
				id: 1610,

				width: 194,
				x: 17425,
				y: 5651,
			},
			{
				height: 584,
				id: 1611,

				width: 301,
				x: 17414,
				y: 5063,
			},
			{
				height: 63,
				id: 1612,

				width: 58,
				x: 17724,
				y: 5146,
			},
			{
				height: 238,
				id: 1625,

				width: 119,
				x: 13022,
				y: 3046,
			},
			{
				height: 210,
				id: 1626,

				width: 215,
				x: 13363,
				y: 3229,
			},
			{
				height: 176,
				id: 1627,

				width: 184,
				x: 12812,
				y: 3292,
			},
			{
				height: 77,
				id: 1628,

				width: 85,
				x: 13581,
				y: 3228,
			},
			{
				height: 135,
				id: 1629,

				width: 410,
				x: 13365,
				y: 3091,
			},
			{
				height: 68,
				id: 1630,

				width: 382,
				x: 13392,
				y: 3020,
			},
			{
				height: 127,
				id: 1631,

				width: 361,
				x: 13413,
				y: 2889,
			},
			{
				height: 344,
				id: 1632,

				width: 72,
				x: 13221,
				y: 3236,
			},
			{
				height: 62,
				id: 1633,

				width: 41,
				x: 13362,
				y: 3442,
			},
			{
				height: 168,
				id: 1635,

				width: 60,
				x: 13079,
				y: 3287,
			},
			{
				height: 59,
				id: 1636,

				width: 41,
				x: 12999,
				y: 3290,
			},
			{
				height: 159,
				id: 1637,

				width: 57,
				x: 13302,
				y: 3121,
			},
			{
				height: 278,
				id: 1638,

				width: 67,
				x: 13145,
				y: 3085,
			},
			{
				height: 152,
				id: 1640,

				width: 234,
				x: 12782,
				y: 3133,
			},
			{
				height: 58,
				id: 1642,

				width: 46,
				x: 12849,
				y: 3073,
			},
			{
				height: 95,
				id: 1643,

				width: 125,
				x: 12680,
				y: 3293,
			},
			{
				height: 138,
				id: 1644,

				width: 166,
				x: 19073,
				y: 6021,
			},
			{
				height: 89,
				id: 1645,

				width: 98,
				x: 19243,
				y: 6022,
			},
			{
				height: 68,
				id: 1646,

				width: 20,
				x: 19052,
				y: 6021,
			},
			{
				height: 51,
				id: 1647,

				width: 28,
				x: 19343,
				y: 6021,
			},
			{
				height: 359,
				id: 1648,

				width: 68,
				x: 3660,
				y: 2520,
			},
			{
				height: 195,
				id: 1649,

				width: 82,
				x: 3734,
				y: 2599,
			},
			{
				height: 112,
				id: 1650,

				width: 118,
				x: 3820,
				y: 2599,
			},
			{
				height: 56,
				id: 1651,

				width: 245,
				x: 3734,
				y: 2540,
			},
			{
				height: 100,
				id: 1652,

				width: 330,
				x: 3731,
				y: 2432,
			},
			{
				height: 220,
				id: 1653,

				width: 75,
				x: 4066,
				y: 2221,
			},
			{
				height: 306,
				id: 1654,

				width: 61,
				x: 3997,
				y: 2120,
			},
			{
				height: 253,
				id: 1655,

				width: 75,
				x: 3917,
				y: 2174,
			},
			{
				height: 106,
				id: 1656,

				width: 188,
				x: 3723,
				y: 2321,
			},

			{
				height: 33,
				id: 1657,

				width: 32,
				x: 3879,
				y: 2283,
			},
			{
				height: 292,
				id: 1658,

				width: 190,
				x: 3465,
				y: 2509,
			},
			{
				height: 298,
				id: 1659,

				width: 74,
				x: 3335,
				y: 2561,
			},
			{
				height: 147,
				id: 1660,

				width: 45,
				x: 3414,
				y: 2614,
			},
			{
				height: 113,
				id: 1661,

				width: 60,
				x: 3271,
				y: 2702,
			},
			{
				height: 278,
				id: 1663,

				width: 57,
				x: 20304,
				y: 5813.12628402054,
			},
			{
				height: 203,
				id: 1664,

				width: 67,
				x: 20420,
				y: 5810.12628402054,
			},
			{
				height: 92,
				id: 1665,

				width: 120,
				x: 20492,
				y: 5906.12628402054,
			},
			{
				height: 91,
				id: 1666,

				width: 198,
				x: 20491,
				y: 5809.12628402054,
			},
			{
				height: 42,
				id: 1667,

				width: 256,
				x: 20520,
				y: 5573.12628402054,
			},
			{
				height: 184,
				id: 1668,

				width: 133,
				x: 20521,
				y: 5619.12628402054,
			},
			{
				height: 112,
				id: 1669,

				width: 50,
				x: 20366,
				y: 5813.12628402054,
			},
			{
				height: 190,
				id: 1670,

				width: 65,
				x: 20234,
				y: 5814.12628402054,
			},
			{
				height: 228,
				id: 1671,

				width: 87,
				x: 20142,
				y: 5815.12628402054,
			},
			{
				height: 65,
				id: 1672,

				width: 59,
				x: 19968,
				y: 5964.12628402054,
			},
			{
				height: 97,
				id: 1673,

				width: 124,
				x: 20014,
				y: 5862.12628402054,
			},
			{
				height: 172,
				id: 1674,

				width: 213,
				x: 19927,
				y: 5686.12628402054,
			},
			{
				height: 46,
				id: 1675,

				width: 170,
				x: 19846,
				y: 5597.12628402054,
			},
			{
				height: 51,
				id: 1676,

				width: 66,
				x: 19859,
				y: 5686.12628402054,
			},
			{
				height: 283,
				id: 1677,

				width: 270,
				x: 17796,
				y: 7902,
			},
			{
				height: 105,
				id: 1678,

				width: 167,
				x: 14728,
				y: 7099,
			},
			{
				height: 121,
				id: 1679,

				width: 596,
				x: 12432,
				y: 5517,
			},
			{
				height: 0,
				id: 1680,

				width: 1,
				x: 13220,
				y: 5711,
			},
		],
	},
];

/**
 * An array of collision data for FencePoles in the game world.
 * Each object in the array represents a single collision box, with properties
 * such as the height, width and coordinates.
 * This data is used for collision detection between the Moving and the FencePoles.
 */
const fencePoleCollisions = [
	{
		objects: [
			{
				height: 624,
				id: 295,

				width: 68,
				x: 9648,
				y: 4122,
			},
			{
				height: 624,
				id: 297,

				width: 68,
				x: 7152,
				y: 4649,
			},
			{
				height: 624,
				id: 298,

				width: 68,
				x: 5501,
				y: 6212,
			},
			{
				height: 624,
				id: 299,

				width: 68,
				x: 7735,
				y: 6207,
			},
			{
				height: 624,
				id: 300,

				width: 68,
				x: 8136,
				y: 6719,
			},
			{
				height: 624,
				id: 301,

				width: 68,
				x: 2051,
				y: 3601,
			},
			{
				height: 624,
				id: 302,

				width: 68,
				x: 3970,
				y: 1591,
			},
			{
				height: 624,
				id: 304,

				width: 68,
				x: 3523,
				y: 7192,
			},
			{
				height: 624,
				id: 305,

				width: 68,
				x: 12720,
				y: 6163,
			},
			{
				height: 624,
				id: 306,

				width: 68,
				x: 14603,
				y: 6160,
			},
			{
				height: 624,
				id: 307,

				width: 68,
				x: 16358,
				y: 3599,
			},
			{
				height: 624,
				id: 308,

				width: 68,
				x: 17562,
				y: 2061,
			},
			{
				height: 624,
				id: 309,

				width: 68,
				x: 18724,
				y: 2062,
			},
			{
				height: 624,
				id: 310,

				width: 68,
				x: 22476,
				y: 2063,
			},
			{
				height: 624,
				id: 311,

				width: 68,
				x: 24247,
				y: 3603,
			},
			{
				height: 624,
				id: 312,

				width: 68,
				x: 24327,
				y: 5142,
			},
			{
				height: 624,
				id: 313,

				width: 68,
				x: 23025,
				y: 5131,
			},
			{
				height: 624,
				id: 314,

				width: 68,
				x: 20430,
				y: 6167,
			},
			{
				height: 624,
				id: 315,

				width: 68,
				x: 18923,
				y: 6161,
			},
			{
				height: 624,
				id: 316,

				width: 68,
				x: 15650,
				y: 1542,
			},
			{
				height: 624,
				id: 1013,

				width: 68,
				x: 5042,
				y: 7227,
			},
			{
				height: 624,
				id: 1121,

				width: 68,
				x: 142,
				y: 3597,
			},
			{
				height: 624,
				id: 1122,

				width: 68,
				x: 5253,
				y: 1577,
			},
			{
				height: 624,
				id: 1124,

				width: 68,
				x: 6305,
				y: 7213,
			},
			{
				height: 624,
				id: 1125,

				width: 68,
				x: 10240,
				y: 6656,
			},
			{
				height: 624,
				id: 1127,

				width: 68,
				x: 1810,
				y: 7258,
			},
			{
				height: 624,
				id: 1128,

				width: 68,
				x: 4897,
				y: 4652,
			},
			{
				height: 624,
				id: 1131,

				width: 68,
				x: 8657,
				y: 2092,
			},
			{
				height: 624,
				id: 1132,

				width: 68,
				x: 9739,
				y: 2106,
			},
			{
				height: 624,
				id: 1133,

				width: 68,
				x: 12465,
				y: 4163,
			},
			{
				height: 624,
				id: 1136,

				width: 68,
				x: 13782,
				y: 1568,
			},
			{
				height: 624,
				id: 1137,

				width: 68,
				x: 18084,
				y: 3618,
			},
			{
				height: 624,
				id: 1138,

				width: 68,
				x: 19754,
				y: 2082,
			},
			{
				height: 624,
				id: 1139,

				width: 68,
				x: 25948,
				y: 3608,
			},
			{
				height: 624,
				id: 1337,

				width: 68,
				x: 17418.1,
				y: 7203.98,
			},
			{
				height: 624,
				id: 1338,

				width: 68,
				x: 16220.8,
				y: 7157.11,
			},
			{
				height: 624,
				id: 1478,

				width: 68,
				x: 15360,
				y: 6144,
			},
			{
				height: 624,
				id: 1479,

				width: 68,
				x: 16640,
				y: 6144,
			},
		],
	},
];
