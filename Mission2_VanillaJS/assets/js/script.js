"use strict"
import "./star";

const maxXPosition = window.screen.availWidth;
const maxYPosition = window.screen.availHeight  ;
const maxCornerRotation = 30;
let speedX = 1;
let speedY = 1;
let positionX = 0;
let positionY = 0;
let rotateX = 0;
let constantRotation = 0;
let cornerRotation = 0;
let cornerRotationSpeed = 1;
let satellitePositionSpeed = 1;

const kosmonot = document.getElementById("kosmonot");
const baseplanet = document.getElementById("base-planet");
const ringplanet = document.getElementById("ringplanet");
const corners = document.querySelectorAll("#corner");
const satellite = document.getElementById("satellite");

let satellitePosition = Number(window.getComputedStyle(satellite).getPropertyValue("bottom").split('p')[0]);
const maxSatellitePosition = satellitePosition + 10;

function step() {
  positionX = positionX + speedX;
  positionY = positionY + speedY;
	rotateX = rotateX + speedX;
  constantRotation++;
  cornerRotation = cornerRotation + cornerRotationSpeed/2;
  satellitePosition = satellitePosition + satellitePositionSpeed/4;

  console.log(positionY);
  // console.log(positionX);
  // console.log(maxYPosition);

  if (cornerRotation > maxCornerRotation  || cornerRotation < 0){
    cornerRotationSpeed = cornerRotationSpeed * (-1);
  }

  if (positionX > maxXPosition-kosmonot.offsetWidth || positionX < 0) {
    speedX = speedX * (-1);
  }

  if (positionY > maxYPosition-kosmonot.offsetWidth || positionY < 0) {
    speedY *= -1;
  }

  if (satellitePosition > maxSatellitePosition || satellitePosition < maxSatellitePosition - 20) {
    satellitePositionSpeed *= -1;
  }

  corners.forEach((corner) => {
    corner.style.rotate = cornerRotation/4 + "deg";
  });

  satellite.style.bottom = satellitePosition + 'px';
  ringplanet.style.rotate = constantRotation/5 + 'deg';
  kosmonot.style.top = positionY + 'px';
  kosmonot.style.left = positionX + 'px';
	kosmonot.style.rotate = rotateX + 'deg';
  baseplanet.style.rotate = constantRotation/10 + 'deg';
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });