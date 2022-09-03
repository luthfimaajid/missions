// https://codepen.io/Thibka/pen/BRzgOM

function Star(id, x, y) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.r = Math.floor(Math.random() * 2) + 1;
	var alpha = (Math.floor(Math.random() * 10) + 1) / 10;
	this.color = "rgba(255,255,255," + alpha + ")";
}

Star.prototype.draw = function () {
	ctx.fillStyle = this.color;
	ctx.shadowBlur = this.r * 2;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fill();
}

Star.prototype.move = function () {
	this.y -= .15 + params.backgroundSpeed / 100;
	if (this.y <= -10) this.y = HEIGHT + 10;
	this.draw();
}

var canvas = document.getElementById('star'),
	ctx = canvas.getContext('2d'),
	WIDTH,
	HEIGHT,
	mouseMoving = false,
	mouseMoveChecker,
	mouseX,
	mouseY,
	stars = [],
	initStarsPopulation = 80,
	dots = [],
	dotsMinDist = 2,
	params = {
		maxDistFromCursor: 50,
		dotsSpeed: 0,
		backgroundSpeed: 0
	};

let animateReqId;

function setCanvasSize() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	canvas.setAttribute("width", WIDTH);
	canvas.setAttribute("height", HEIGHT);
}

function init() {
	setCanvasSize();
	if (animateReqId) cancelAnimationFrame(animateReqId);
	ctx.strokeStyle = "white";
	ctx.shadowColor = "white";
	for (var i = 0; i < initStarsPopulation; i++) {
		stars[i] = new Star(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT));
	}
	ctx.shadowBlur = 0;
	animate();
}

function animate() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);

	for (var i in stars) {
		stars[i].move();
	}
	animateReqId = requestAnimationFrame(animate);
}

function degToRad(deg) {
	return deg * (Math.PI / 180);
}

setCanvasSize();
init();

window.onresize = init;


