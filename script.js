
//name every box

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

//set tracker for clicks

let tracker = function () {

	score = score + 1;
}


//set up function for alernating clicks 

let changeColor = (e) => {
	e.preventDefault();
	if (score % 2 === 0) {

		e.target.style.background = 'red';
		tracker();

// check winner every turn
		checkWinner();

	} else {
		e.target.style.background = 'blue';
		tracker();
		checkWinner();
	}

	//stop overlapping clicks

	e.target.removeEventListener('click', changeColor);
	console.log(score);
}

//active click on every box

let boxes = document.querySelectorAll('.box');




boxes.forEach(item => {

	item.addEventListener("click", changeColor);
});


// set up function to check winner 

let checkWinner = (e) => {

	//if red wins 

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

//if blue wins


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


// if tie 


	} else if (score === 9) {
		alert('its a tie');
	}

}







