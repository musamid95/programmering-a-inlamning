var draw = startCanvas("maincanvas");

var field = {
	x : 100,
	y : 50,
	width : 600,
	height : 350,
};

draw.strokeRect(field.x, field.y, field.width, field.height, "lime");

var ball = {
	x : field.x + field.width / 2,
	y : field.y + field.width / 2,
	r : 10,
	totspeed : 10,
	color : "yellow",
	angle : Math.random() * Math.PI * 2,
	isMoving : false

};
	
	ball.xSpeed = Math.cos(ball.angle) * ball.totspeed;
	ball.ySpeed = Math.sin(ball.angle) * ball.totspeed;

function moveBall() {

	draw.clearRect(field.x, field.y, field.width, field.height);
	for ( var i = 0; i < balls.length; i += 1 ) {
		if ( balls.x < (field.x + balls.r / 2) ) {
			balls.xSpeed = Math.abs(balls.xSpeed);
		} else if ( balls.x > (field.x + field.width - balls.r / 2) ) {
		 	balls.xSpeed = -Math.abs(balls.xSpeed);
		} else if ( balls.y < (field.y + balls.r / 2) ) {
		 	balls.ySpeed = Math.abs(balls.ySpeed);
		} else if ( balls.y > (field.y + field.height - balls.r / 2) ) {
		 	balls.ySpeed = -Math.abs(balls.ySpeed);
		}
	
	ball.x += ball.xSpeed;
	ball.y += ball.ySpeed;
	draw.circle(ball.x, ball.y, ball.r, ball.color, true);

	if ( ball.isMoving ) {
		setTimeout(moveBall, 20);
	}
	
}

moveBall();

document.getElementById("start").onclick = function () {
	if ( ball.isMoving ) {
		return false;
	} 
	ball.isMoving = true;
	moveBall();
	this.setAttribute("disabled", "disabled");
	document.getElementById("stop").removeAttribute("disabled", "disabled");
};

function fillRect(10, 25, 10, 25, red, log) {
            context2D.save();
            context2D.fillStyle = color || this.getCurColor();
            context2D.fillRect(x, y, width, height);
            context2D.restore();
            if ( log ) {
                console.log("Draw " + color + " colored rectangle at " + x + "/" + y +
                    ", width/height was " + width + "/" + height);
            }
             


