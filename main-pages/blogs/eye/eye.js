function getRandomPosition() {
  var contentRect = document.getElementById('content').getBoundingClientRect();
  var contentWidth = contentRect.width;
  var contentHeight = contentRect.height;
  var randomX = Math.random() * contentWidth + contentRect.left;
  var randomY = Math.random() * contentHeight + contentRect.top;
  return [randomX, randomY];
}

function isOverlapping(element, otherElements) {
  const rect1 = element.getBoundingClientRect();
  for (let i = 0; i < otherElements.length; i++) {
    const rect2 = otherElements[i].getBoundingClientRect();
    if (!(rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom)) {
      return true;
    }
  }
  return false;
}

function rotateElement(element) {
  var randomAngle = Math.random() * 360;
  element.style.transform = 'rotate(' + randomAngle + 'deg)';
}

function placeImages() {
  var images = document.querySelectorAll('.image-to-place');
  var placedPositions = [];
  images.forEach(function (image) {
    var attempts = 0;
    var maxAttempts = 50;
    while (attempts < maxAttempts) {
      var [x, y] = getRandomPosition();
      image.style.left = x + 'px';
      image.style.top = y + 'px';
      if (!isOverlapping(image, placedPositions)) {
        placedPositions.push(image);
        break;
      }
      attempts++;
    }
    rotateElement(image);
  });
}

window.addEventListener('DOMContentLoaded', function () {
  placeImages();
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleColorInversion() {
    document.body.classList.toggle("invert-colors");
  }

  document.querySelectorAll(".image-to-place").forEach(function (element) {
    element.addEventListener("click", function () {
      toggleColorInversion();
    });
  });
});

