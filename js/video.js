var video = document.querySelector("#player1");
var button = document.querySelector("#mute");
var slider = document.querySelector("#slider");
var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	volume.innerHTML = (slider.value + "%")
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location", video.currentTime);
	video.currentTime = video.currentTime + 15
	console.log("New Location", video.currentTime);

	if(video.currentTime >= video.duration) {
		console.log("Going back to the beginning");
		video.currentTime = 0;
		video.play();
		console.log("New Location", video.currentTime);
	}
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		button.innerHTML = "Unmute";
	}
    else {
		video.muted = false;
		button.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(slider.value/100);
	video.volume = slider.value/100;
	volume.innerHTML = (slider.value + "%")
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Clicked");
	video.className = "oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Clicked");
	video.className = "video"
});