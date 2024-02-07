//======================= Homework №3 ====================================================================================================
//=========================================================================================================================================
//=========================================================================================================================================
//=============== Task 1: Calculator ========================================================
let userFirstNumber = Number(prompt('Type first number'));
let userSecondNumber = Number(prompt('Type second number'));
console.log(userFirstNumber);
console.log(userSecondNumber);

//=============== Checking for numbers ========================================================
if (userFirstNumber == '' && userSecondNumber == '') {
	alert('First, choose the numbers.');
	userOperation = alert('No information');
};

//=============== Functions for basic calculator operations ========================================================
function plus(firstNumberPlus, secondNumberPlus) {
	console.log(`Plus ${firstNumberPlus} + ${secondNumberPlus} = ${firstNumberPlus + secondNumberPlus}`);
};

function minus(firstNumberMinus, secondNumberMinus) {
	console.log(`Minus ${firstNumberMinus} - ${secondNumberMinus} = ${firstNumberMinus - secondNumberMinus}`);
};

function multiply(firstNumberMultiply, secondNumberMultiply) {
	console.log(`Multiply ${firstNumberMultiply} * ${secondNumberMultiply} = ${firstNumberMultiply * secondNumberMultiply}`);
};

function divide(firstNumberDivide, secondNumberDivide) {
	console.log(`Divide ${firstNumberDivide} / ${secondNumberDivide} = ${firstNumberDivide / secondNumberDivide}`);
};
function divideAttention() {
	alert("You can't divide by zero!!");
	userSecondNumber = Number(prompt('Choose a number other than zero.'));
	return divide(userFirstNumber, userSecondNumber);
}

function percent(firstNumberPercent, secondNumberPercent) {
	console.log(`Percentage of ${firstNumberPercent} and ${secondNumberPercent} = ${firstNumberPercent * secondNumberPercent / 100}`);
};

//=============== Processing numbers and operations selected by the user ========================================================
let userOperation = prompt('User chose operation +-/*%');
switch (userOperation) {
	case '+':
		plus(userFirstNumber, userSecondNumber);
		break;
	case '-':
		minus(userFirstNumber, userSecondNumber);
		break;
	case '*':
		multiply(userFirstNumber, userSecondNumber);
		break;
	case '/':
		if (userSecondNumber === 0) {
			divideAttention();
		} else {
			divide(userFirstNumber, userSecondNumber);
		}
		break;
	case '%':
		if (userSecondNumber === 0) {
			console.log(`Percentage of First Number ${userFirstNumber} = ${userFirstNumber / 100}`);
		} else if (userFirstNumber === 0) {
			console.log(`Percentage of Second Number ${userSecondNumber} = ${userSecondNumber / 100}`);
		} else {
			percent(userFirstNumber, userSecondNumber);
		}
		break;
	default:
		console.log('No information');
		break;
}

//=========================================================================================================================================
//=========================================================================================================================================
//=============== Task 2: Using a loop, output all even values of the number 20 ========================================================
/*
let evenValues = '';
for (let i = 0; i <= 20; i += 2) {
	console.log(`Paired values of number 20 ${evenValues = i}`);
}
*/
//=============== Task 3: Make a loop that outputs the data in reverse from larger to smaller. ===========================================
/*
let reverseValues = '';
for (let i = 20; i >= 0; i--) {
	console.log(`Meanings of 20 in reverse order ${reverseValues = i}`);
}
*/
//=============== Task 4: Multiplication table using a loop. ===========================================
/*
let userValue = 4;
for (let i = 1; i <= 10; i++) {
	console.log(`${i} x ${userValue} = ${i * userValue}`);
}
*/
//=============== Task 5: Multiplication table using a function. ===========================================
/*
let yourNumber = prompt('Choose a number');

if (yourNumber === null || !yourNumber) {
	console.log("Ви не ввели число");
} else if (isNaN(yourNumber)) {
	console.log('Ви ввели не число');
} else {
	getnumber(yourNumber);
};

//==================================================================================================================================
function getnumber(someNumber) {
	yourNumber = Number(someNumber);

	if (yourNumber === 0) {
		console.log("Ви ввели нуль");
	} else if (yourNumber < 0) {
		console.log("Ви ввели від'ємне число");
	} else if (!Number.isInteger(yourNumber)) {
		console.log("Ви ввели не ціле число");
	} else {
		console.log("Ви ввели ціле додатнє число");
		multiplyYourNumber(yourNumber);
	}
};

//==================================================================================================================================
function multiplyYourNumber(number) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${i} x ${number} = ${i * number}`);
	}
};
*/
//=============== Task 6: Switch for the planets of the solar system. ===========================================
/*
let userPlanet = prompt('Enter the planet you like');

if (userPlanet) {
	userPlanet = userPlanet.toLowerCase();
}

switch (userPlanet) {
	case 'mercury':
	case 'venus':
	case 'earth':
	case 'mars':
	case 'jupiter':
	case 'saturn':
	case 'uranus':
	case 'neptune':
	case 'меркурій':
	case 'венера':
	case 'земля':
	case 'марс':
	case 'юпітер':
	case 'сатурн':
	case 'уран':
	case 'нептун':
		console.log('This planet in the solar system');
		break;
	case null:
	case '':
		console.log('Unfortunately, you did not specify any planets');
		break;
	default:
		console.log('Such a planet does not exist in the solar system');
		break;
}
*/

