let box1 = document.getElementById('box1');

let box2 = document.getElementById('box2');

let box3 = document.getElementById('box3');

let box4 = document.getElementById('box4');

let box5 = document.getElementById('box5');

let box6 = document.getElementById('box6');

let box7 = document.getElementById('box7');

let box8 = document.getElementById('box8');

let box9 = document.getElementById('box9');

let player1 = document.getElementById('player1-score');

let player2 = document.getElementById('player2-score');

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


let checkWinner = (e) => {

	if (box1.style.background === 'red' && box2.style.background === 'red' && box3.style.background === 'red' ) {

		alert('red Wins');

	} if (box4.style.background === 'red' && box5.style.background === 'red' && box6.style.background === 'red') {

		alert('red wins');

	} if (box7.style.background === 'red' && box8.style.background === 'red' && box9.style.background === 'red') {

		alert('red Wins');

	} if (box2.style.background === 'red' && box5.style.background === 'red' && box8.style.background === 'red') {

	alert('red Wins');

	} if (box3.style.background === 'red' && box6.style.background === 'red' && box9.style.background === 'red') {

	alert('red Wins');

	} if (box1.style.background === 'red' && box4.style.background === 'red' && box7.style.background === 'red') {

	alert('red Wins');

	} if (box3.style.background === 'red' && box5.style.background === 'red' && box7.style.background === 'red') {

	alert('red Wins');

	} if (box1.style.background === 'red' && box5.style.background === 'red' && box9.style.background === 'red') {

	alert('red Wins');

	} 




	if (box1.style.background === 'blue' && box2.style.background === 'blue' && box3.style.background === 'blue' ) {

		alert('blue Wins');

	} if (box4.style.background === 'blue' && box5.style.background === 'blue' && box6.style.background === 'blue') {

		alert('blue wins');

	} if (box7.style.background === 'blue' && box8.style.background === 'blue' && box9.style.background === 'blue') {

		alert('blue Wins');

	} if (box2.style.background === 'blue' && box5.style.background === 'blue' && box8.style.background === 'blue') {

	alert('blue Wins');

	} if (box3.style.background === 'blue' && box6.style.background === 'blue' && box9.style.background === 'blue') {

	alert('blue Wins');

	} if (box1.style.background === 'blue' && box4.style.background === 'blue' && box7.style.background === 'blue') {

	alert('blue Wins');

	} if (box3.style.background === 'blue' && box5.style.background === 'blue' && box7.style.background === 'blue') {

	alert('blue Wins');

	} if (box1.style.background === 'blue' && box5.style.background === 'blue' && box9.style.background === 'blue') {

	alert('blue Wins');

	} else if (score === 9) {
		alert('its a tie');
	}

}







