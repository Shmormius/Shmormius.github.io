function getRandomPosition() {
    var contentRect = document.body.getBoundingClientRect();
    var contentWidth = contentRect.width - 100;
    var contentHeight = contentRect.height - 50;
    var randomX = Math.random() * contentWidth;
    var randomY = Math.random() * contentHeight;
    return [randomX, randomY];
}

function moveButton(button) {
    var [x, y] = getRandomPosition();
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

function showVideo() {
    var videoOverlay = document.getElementById('video-overlay');
    var videoElement = document.getElementById('valentine-video');
    videoOverlay.style.display = 'flex'; 
    videoElement.play();
}

document.addEventListener("DOMContentLoaded", function () {
    var noButton = document.getElementById('no-btn');
    var yesButton = document.getElementById('yes-btn');
    var closeVideoButton = document.getElementById('close-video-btn');

    noButton.addEventListener("click", function () {
        moveButton(noButton);
    });

    yesButton.addEventListener("click", function () {
        showVideo();
    });
});