var header = $(".header");
var canvas = document.getElementById("headerCanvas");
var ctx = canvas.getContext("2d");

canvasSize();
$(window).on("resize", function () {
	canvasSize();
	init();
});



var LINE_WIDTH = 3;
var LINE_CLR = "#c9ced617";
var SPEED_X = .5;
var SPEED_Y = .5;
var ELEMENTS_NUM = 10;
var PADDING = 20;
var MIN_SIZE = 10;
var MAX_SIZE = 20;
var elements = [];
var TYPES = ["s", "c", "t", "cr"];


function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = LINE_WIDTH;
	ctx.strokeStyle = LINE_CLR;
	
	for(var i = 0; i < ELEMENTS_NUM; i++){
		elements[i].update();
		elements[i].draw();

	}

}
function init() {
	for(var i = 0; i < ELEMENTS_NUM; i++){
		elements[i] = new Shape(
			Math.floor(PADDING + Math.random()*(canvas.width - 2*PADDING)),
			Math.floor(PADDING + Math.random()*(canvas.height - 2*PADDING)),
			Math.floor(MIN_SIZE + Math.random()*(MAX_SIZE - MIN_SIZE)),
			TYPES[Math.floor(Math.random()*TYPES.length)]
		);
	}
	draw();
}
init()
setInterval(draw, 150);

function Shape (x, y, size_, type_) {
	this.x = x;
	this.y = y;
	this.size_ = size_;
	this.type_ = type_;
	this.speedX = (Math.random() > .5)? SPEED_X : -1*SPEED_X;
	this.speedY = (Math.random() > .5)? SPEED_Y : -1*SPEED_Y;

	this.update = function(){
		if(this.x < -MAX_SIZE || this.x > canvas.width + MAX_SIZE)
			this.speedX *= -1;

		if(this.y < -MAX_SIZE || this.y > canvas.height + MAX_SIZE)
			this.speedY *= -1;

		this.x += this.speedX;
		this.y += this.speedY;


	}

	this.draw = function () {
		if(this.type_ == "s")
			drawSquare (this.x, this.y, this.size_);
		else if (this.type_ == "c")
			drawCircle (this.x, this.y, this.size_);
		else if (this.type_ == "t")
			drawTri (this.x, this.y, this.size_);
		else if (this.type_ == "cr")
			drawCross (this.x, this.y, this.size_);
	}
}
function drawSquare (x, y, sqSize) {
	ctx.rect(x, y, sqSize, sqSize);
	ctx.closePath();
	ctx.stroke();

}

function drawCircle(x, y, rad) {
	ctx.beginPath();
	ctx.arc(x, y, rad, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.stroke();
}

function drawTri(x, y, triSize) {
	ctx.beginPath();

	ctx.moveTo(x, y);
	ctx.lineTo(x + triSize, y);
	ctx.lineTo(x + triSize/2, y + (1.732*(triSize/2)));
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.stroke();
}
function drawCross(x, y, cSize) {
	ctx.beginPath();

	ctx.moveTo(x, y);
	ctx.lineTo(x + cSize, y + cSize);
	ctx.moveTo(x + cSize, y);
	ctx.lineTo(x, y + cSize);
	ctx.closePath();
	ctx.stroke();
}


function canvasSize() {
	canvas.width = header.outerWidth();
	canvas.height = header.outerHeight();

}