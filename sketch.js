var h = 800;
var w = 800;
var data = [];
var length = 400;
var index = 0;

function swap(i, j) {
	var tmp = data[i];
	data[i] = data[j];
	data[j] = tmp;
}

function randomize() {
	for(var i = 0; i<length; i++) {
		for(var j = 0; j<length; j++) {
			swap(floor(random(length)), floor(random(length)));
		}
	}
}

function setup() {
	createCanvas(h, w);
	frameRate(30);
	for(var i = 0; i < length; i++) {
		data[i] = i;
	}
	randomize();
}

function draw() {
	background(0);
	fill(255);
	for(var i = 0; i<length; i++) {
		if(i == index) {
			fill('red');
		} else {
			fill(255);
		}
		rect(i*2, h, 2, -(data[i] * 2));
	}
	for(var i = index; i<length; i++) {
		if(data[i] < data[index]) {
			swap(index, i);
		}
	}
	index++;
}
