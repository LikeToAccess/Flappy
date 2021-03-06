var bird;
var bot;
var obstacles = [];

function setup() {
	createCanvas(800, 600);
	bird = new Bird();
	bot = new Bird();
	obstacles.push(new Obstacle());
	bot.color = "blue";
	bird.x = 250;
	bot.x = 100;
}

function draw() {
	background(0);
	bird.update();
	bird.show();
	bot.update();
	bot.show();
	if (keyIsPressed === true) {
		if (key == "ArrowLeft") {
			bird.left();
		}
		if (key == "ArrowRight") {
			bird.right();
		}
	}
	if (frameCount % 30 == 0) {
		obstacles.push(new Obstacle());
	}

	for (var i = obstacles.length-1; i >= 0; i--) {
		obstacles[i].show();
		obstacles[i].update();
		if (obstacles[i].hits(bird,bot)) {}
		if (obstacles[i].x < -10) {
			obstacles.splice(i, 1);
		}
		if (bot.y<obstacles[i].top||bot.y>height-obstacles[i].bottom) {
			bot.up();
			//console.log("up")
		}
	}
}


function keyPressed() {
	if (key == " " || key == "ArrowUp") {
		bird.up();
	}
}
