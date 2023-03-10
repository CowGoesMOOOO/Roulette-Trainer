
var c = document.getElementById("canv");
var input = document.getElementById("input");
var counter = document.getElementById("counter");
var nextButton = document.getElementById("nextButton");
var context = c.getContext('2d')

var difficulty = "2";

var base_image = new Image();
base_image.src = 'assets/roulette_feld.png';

var correct_image = new Image();
correct_image.src = 'assets/correct.png';

var wrong_image = new Image();
wrong_image.src = 'assets/wrong.png';

var zero_image = new Image();
zero_image.src = 'assets/zero_feld.png';

var menu = document.getElementById("menu");
var slider = document.getElementById("slider");

var tries = 0;
var correct = 0;

var chip_image = new Image();

var alreadySolved = false;
var correctTry;
var zero;

var height = window.innerHeight;
var width = window.innerWidth;
var imgH = 300;
var imgW = 300;

var beginTime = 0;
var endTime = 0;

var imgX =  width / 2 - imgW / 2;
var imgY = height / 2 - imgH / 2;

var n1, n2, n3, n4, n5, n6, n7 ,n8, n9;

function randomize(){
	zero = false;
	tries++;
	alreadySolved = false;
	correctTry = null;
	
	var chance = getRandomInt(10);
	if(chance >= 8){
		zero = true;
	}

	if(difficulty == "1"){
		n1 = getRandomInt(2);
		n2 = getRandomInt(2);
		n3 = getRandomInt(2);
		n4 = getRandomInt(2);
		n5 = getRandomInt(2);
		n6 = getRandomInt(2);
		n7 = getRandomInt(2);
		n8 = getRandomInt(2);
		n9 = getRandomInt(2);
	}else if(difficulty == "2"){
		n1 = getRandomInt(3);
		n2 = getRandomInt(3);
		n3 = getRandomInt(3);
		n4 = getRandomInt(3);
		n5 = getRandomInt(3);
		n6 = getRandomInt(3);
		n7 = getRandomInt(3);
		n8 = getRandomInt(3);
		n9 = getRandomInt(3);
	} else if(difficulty == "3"){
		n1 = getRandomInt(10);
		n2 = getRandomInt(10);
		n3 = getRandomInt(10);
		n4 = getRandomInt(10);
		n5 = getRandomInt(10);
		n6 = getRandomInt(10);
		n7 = getRandomInt(10);
		n8 = getRandomInt(10);
		n9 = getRandomInt(10);
	}
}

function draw(){	

	context.clearRect(imgX, imgY, imgX + imgW, imgY + imgH);

const pos1 = {
	x: imgX + imgW/2,
	y: imgY + 2*imgH/3,
};

const pos2 = {
	y: imgY + imgH/2,
	x: imgX + 2*imgW/3,
};

const pos3 = {
	x: imgX + imgW/2,
	y: imgY + imgH/3,
};

const pos4 = {
	x: imgX + imgW/3,
	y: imgY + imgH/2,
};

const mid = {
	x: imgX + imgW/2,
	y: imgY + imgH/2,
};

const pos5 = {
	y: imgY + 2*imgH/3,
	x: imgX + 2*imgW/3,
}

const pos6 = {
	x: imgX + 2*imgW/3,
	y: imgY + imgH/3,
}

const pos7 = {
	x: imgX + imgW/3,
	y: imgY + imgH/3,
}

const pos8 = {
	y: imgY + 2*imgH/3,
	x: imgX + imgW/3,
}


var circumference = 20;
if(zero){
	context.drawImage(zero_image,imgX, imgY, imgW, imgH);
} else {
	context.drawImage(base_image,imgX, imgY, imgW, imgH);
}
	if(n1 != 0){
		context.beginPath();
		context.arc(pos1.x, pos1.y, circumference, 0, 2 * Math.PI);
		context.fillStyle = 'lightblue'
		context.fill();
		context.closePath();
		
	}
	
	if(n2 != 0) {
		context.beginPath();
		context.arc(pos2.x, pos2.y, circumference, 0, 2 * Math.PI);
		context.fillStyle = 'lightblue';
		context.fill();
		context.closePath();
	}
	
	if(n3 != 0){
		context.beginPath();
		context.arc(pos3.x, pos3.y, circumference, 0, 2 * Math.PI);
		context.fillStyle = 'lightblue';
		context.fill();
		context.closePath();
	}
	
	if(n4 != 0){
		context.beginPath();
		context.arc(pos4.x, pos4.y, circumference, 0, 2 * Math.PI);
		context.fillStyle = 'lightblue';
		context.fill();
		context.closePath();
	}
	
	if(n5 != 0){
	context.beginPath();
	context.arc(mid.x, mid.y, circumference, 0, 2 * Math.PI);
	context.fillStyle = 'lightblue';
	context.fill();
	context.closePath();
	}
	
	if(n6 != 0){
	context.beginPath();
	context.arc(pos5.x, pos5.y, circumference, 0, 2 * Math.PI);
	context.fillStyle = 'lightblue';
	context.fill();
	context.closePath();
	}
	
	if(n7 != 0){
	context.beginPath();
	context.arc(pos6.x, pos6.y, circumference, 0, 2 * Math.PI);
	context.fillStyle = 'lightblue';
	context.fill();
	context.closePath();
	}
	
	if(n8 != 0){
	context.beginPath();
	context.arc(pos7.x, pos7.y, circumference, 0, 2 * Math.PI);
	context.fillStyle = 'lightblue';
	context.fill();
	context.closePath();
	}
	
	if(n9 != 0){
	context.beginPath();
	context.arc(pos8.x, pos8.y, circumference, 0, 2 * Math.PI);
	context.fillStyle = 'lightblue';
	context.fill();
	context.closePath();
	}
	
	if(difficulty != "1"){
		context.fillStyle = 'black';
		context.font = "30px serif";
		if(n1 != 0){
			if(n1 >= 10){
				context.fillText(n1, pos1.x-14, pos1.y + 9);
			} else {
				context.fillText(n1, pos1.x-7 , pos1.y + 9);
			}

		}
		if(n2 != 0){
			if(n2 >= 10){
				context.fillText(n2, pos2.x -14 , pos2.y + 9);
			} else {
				context.fillText(n2, pos2.x -7 , pos2.y + 9);
			}
		}
		if(n3 != 0){
			if(n3 >= 10) {
				context.fillText(n3, pos3.x - 14, pos3.y + 9);
			} else {
				context.fillText(n3, pos3.x - 7, pos3.y + 9);
			}
		}
		if(n4 != 0){
			if(n4 >= 10){
				context.fillText(n4, pos4.x - 14, pos4.y + 9);
			} else {
				context.fillText(n4, pos4.x - 7, pos4.y + 9);
			}
		}
		if(n5 != 0){
			if(n5 >= 10){
				context.fillText(n5, mid.x - 14, mid.y + 9);
			} else {
				context.fillText(n5, mid.x - 7, mid.y + 9);
			}
		}

		if(n6 != 0){
			if(n6 >= 10){
				context.fillText(n6, pos5.x - 14, pos5.y + 9);
			} else {
				context.fillText(n6, pos5.x - 7, pos5.y + 9);
			}
		}
		if(n7 != 0){
			if(n7 >= 10){
				context.fillText(n7, pos6.x - 14, pos6.y + 9);
			} else {
				context.fillText(n7, pos6.x - 7, pos6.y + 9);
			}
		}
		if(n8 != 0){
			if(n8 >= 10){
				context.fillText(n8, pos7.x - 14, pos7.y + 9);
			} else {
				context.fillText(n8, pos7.x - 7, pos7.y + 9);
			}
		}
		if(n9 != 0){
			if(n9 >= 10){
				context.fillText(n9, pos8.x - 14, pos8.y + 9);
			} else {
				context.fillText(n9, pos8.x - 7, pos8.y + 9);
			}
		}
	}

	var inputW = imgW - 250;
	var inputY = imgY + imgH + 7;
	var inputX = imgX + imgW/3;
	input.style.top = inputY + 'px';
	input.style.left = inputX + 'px';
	input.style.width = inputW + 'px';
	
	counter.style.top = imgY - 50 + 'px';
	counter.style.left = imgX + imgW/2 - 20 + 'px'; 
	counter.innerHTML = correct + " / " + tries ;
	
	nextButton.style.top = imgY + imgH/2 - 20 + 'px';
	nextButton.style.left = imgX + imgW + 20 + 'px';
	
	var pictureX = inputX + inputW + 25;
	var pictureY = inputY + 2;
	var dim = 22;
	
	context.clearRect(pictureX, pictureY, pictureX + dim, pictureY + dim);
	
	if(correctTry == true){
		context.drawImage(correct_image, pictureX, pictureY, dim, dim);
	} else if(correctTry == false){
		context.drawImage(wrong_image, pictureX, pictureY, dim, dim);
	}
	
}
	

function check(){
	if(alreadySolved){
		return;
	}
	
	var input = document.getElementById("input");
	var answer = 0;
	if(zero){
		answer = n1 * 17 + n2 * 17 + n3 * 17 + n4 * 17 + n5 * 35 + n6 * 8 + n7 * 8 + n8 * 11 + n9 * 11; 
	} else {
		answer = n1 * 17 + n2 * 17 + n3 * 17 + n4 * 17 + n5 * 35 + n6 * 8 + n7 * 8 + n8 * 8 + n9 * 8; 
	}
	if (answer == input.value) {
		input.value = "";
		correct++;
		correctTry = true;
		alreadySolved = true;
		return;
	}
	correctTry = false;
	input.value = "";
	
}

var node = document.getElementById("input");
node.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
	check();
	draw();
}
});

window.onload = function() {
	hideGame();
	resize();
	
	var textBox = document.getElementById("text");
	textBox.style.display = "none";
	
	var sliderContainer = document.getElementById("slider-container");
	sliderContainer.style.marginTop = "28%";
	slider.value = "2";
	
};	

window.onresize = function(){
	resize();
	draw();
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function resize(){
	height = window.innerHeight;
	width = window.innerWidth;
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	imgX =  width / 2 - imgW / 2;
	imgY = height / 2 - imgH / 2;
	
}

function loadNext(){
	check();
	
	if(tries == 20){
		openMenu();
		draw();
	} else {
		randomize();
		draw();
	}
}

function openMenu(){
	menu.style.display = "block";
	
	var count2 = document.getElementById("counter2");
	count2.innerHTML = counter.innerHTML;
	
	hideGame();
}

function closeMenu(){
	menu.style.display = "none";
	showGame();
}

function hideGame(){
	c.style.display = "none";
	input.style.display = "none";
	counter.style.display = "none";
	nextButton.style.display = "none";
}

function showGame(){
	c.style.display = "block";
	input.style.display = "block";
	counter.style.display = "block";
	nextButton.style.display = "block";
}

function onInput(){
	var sliderValue = document.getElementById("sliderValue");
	switch(slider.value){
		case "1":
			sliderText = "Einfach / facile";
			break;
		case "2":
			sliderText = "Mittel / moyenne";
			break;
		case "3":
			sliderText = "Schwierig / difficile";
			break;
		default:
			break;
	
	}
	
	sliderValue.innerHTML = sliderText;
	
}

function goNext(){
	var textBox = document.getElementById("text");
	textBox.style.display = "block";
	
	var sliderContainer = document.getElementById("slider-container");
	sliderContainer.style.marginTop = "0%";
	
	difficulty = slider.value;
	
	tries = 0;
	correct = 0;
	alreadySolved = false;
	correctTry = null;
	closeMenu();
	randomize();
	draw();
}
