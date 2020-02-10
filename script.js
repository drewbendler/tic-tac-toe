let box1 = document.getElementById('box1');

let box2 = document.getElementById('box2');

let box3 = document.getElementById('box3');

let box4 = document.getElementById('box4');

let box5 = document.getElementById('box5');

let box6 = document.getElementById('box6');

let box7 = document.getElementById('box7');

let box8 = document.getElementById('box8');

let box9 = document.getElementById('box9');



let score = 0;


let tracker = function () {

	score = score + 1;
}


let changeColor = (e) => {
	e.preventDefault();
	if (score % 2 === 0) {

		e.target.style.background = 'red';
		tracker();
		checkWinner();

	} else {
		e.target.style.background = 'blue';
		tracker();
		checkWinner();
	}
	e.target.removeEventListener('click', changeColor);
	console.log(score);
}


let boxes = document.querySelectorAll('.box');




boxes.forEach(item => {

	item.addEventListener("click", changeColor);
});









