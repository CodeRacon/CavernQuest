function collision({ object1, object2 }) {
	return (
		object1.position.y + object1.height >= object2.position.y &&
		object1.position.y <= object2.position.y + object2.height &&
		object1.position.x <= object2.position.x + object2.width &&
		object1.position.x + object1.width >= object2.position.x
	);
}

function preloadImages(urls) {
	urls.forEach(function (url) {
		const img = new Image();
		img.src = url;
	});
}

const spriteImages = [
	'img/wizard/magic-spell-left.png',
	'img/wizard/magic-spell-right.png',
	'img/wizard/Wizard-Fall-Left.png',
	'img/wizard/Wizard-Fall-Right.png',
	'img/wizard/wizard-hit-left.png',
	'img/wizard/wizard-hit-right.png',
	'img/wizard/Wizard-Idle-Left.png',
	'img/wizard/Wizard-Idle-Right.png',
	'img/wizard/Wizard-Jump-Left.png',
	'img/wizard/Wizard-Jump-Right.png',
	'img/wizard/Wizard-Walk-Left.png',
	'img/wizard/Wizard-Walk-Right.png',
	'img/wizard/wizard-dash-left.png',
	'img/wizard/wizard-dash-right.png',
	'img/plants/JumpPlant-frames.png',
	'img/plants/poison-plant.png',
	'img/enemies/SlimeBasic.png',
	'img/enemies/SlimeOrange.png',
	'img/background.jpg',
];
