let mainStory;

function playIntro() {
	const playIntroBtn = document.getElementById('play-intro-btn');

	if (!mainStory) {
		mainStory = new Audio('./audio/main-story.mp3');
		mainStory.volume = 0.85;
	}

	if (mainStory.paused) {
		mainStory.play();
		playIntroBtn.classList.add('outlined');
	} else {
		mainStory.pause();
		playIntroBtn.classList.remove('outlined');
	}
}
