//======================= Homework №6 ====================================================================================================
//=============== Task 1: Creating a class and an object ========================================================
//=============== Task 2: Class methods ========================================================

class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	sayHello() {
		console.log(`Hello ${this._name}`);
	}
};

let personInfo = new Person('John', 30);
personInfo.sayHello();
console.log(personInfo);

//=============== Task 3: Imitating ========================================================

class Student extends Person {
	constructor(name, age, studentId) {
		super(name, age);
		this._studentId = studentId;
	}
	studentInfo() {
		console.log(
			`
Student ID: ${this._studentId}
Student Name: ${this._name}
Student Age: ${this._age}
			`
		);
	}
};

let student = new Student('Joey', 31, 'S-12345');
student.studentInfo();
console.log(student);

//=============== Task 4: forEach, reverse ========================================================
/*
const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = [];

numbers.forEach((item, index, arr) => {

	item = arr.length - index;
	reverseNumbers.push(item);

});

console.log(reverseNumbers);

//=============== version 2 ========================================================

const reverseNumbers2 = (list) => {

	const numbers = [];

	list.forEach((item, index, arr) => {
		item = arr.length - index;
		numbers.push(item);
	});

	return numbers;

};

console.log(reverseNumbers2(numbers));
*/
//=============== Task 5: MAP and Math.round practices ========================================================
/*
let floatNumbersArr = [1.21, -2.568, 3.87485, 15.707963267948966, -9.8, 65.44984694978736];

let integers = floatNumbersArr.map(item => {
	return Math.round(item);
});

console.log(integers);
*/
//=====================================================================================================================================
//=====================================================================================================================================
//=====================================================================================================================================
//=============== Additional work =============================================
//=============== Task 1: Guess the number. ==================================
/*
let userNumber = parseInt(prompt('Введіть будь-яке число в діапазоні від 1 до 20'));

function getRandomIntNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};
//========================================================================================================================================
let guessNumber = (number) => {
	console.log(`Число користувача: ${number}`);

	let randomNumber = getRandomIntNumber(1, 20);
	console.log(`Число компа: ${randomNumber}`);

	let str = '';
	let style = [
		'padding: 1rem;',
		'font: 1.3rem/3 Arial;'];

	if (number > 20 || number < 1) {
		console.log('Ви ввели число не в діапазоні.');
	} else if (number === randomNumber) {
		str = '✨ Сьогодні ви супер везуньчик і вгадали число ✨';
		let ifStyle = [
			'color: white;',
			'background: linear-gradient( gold, orangered);',
			'text-shadow: 0 2px orangered;'];
		let myStyle = ifStyle.concat(style).join('');
		console.log('%c%s', myStyle, str);

		window.onload = function () {
			document.body.style.backgroundImage = "url('https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f929.gif')";
			document.body.style.backgroundRepeat = "space";
		};
	} else {
		str = 'Нажаль ви не вгадали ( T﹏T )';
		let ElseStyle = [
			'color: black;',
			'background: linear-gradient( dimGrey, silver);',
			'text-shadow: 0 2px lightgrey;',
			'filter: grayscale(100%);'];
		let myStyle = ElseStyle.concat(style).join('');

		console.log('%c%s', myStyle, str);
	}

};

console.log(guessNumber(userNumber));
*/
//=============== Task 2: Rock-paper-scissors. ==================================
/*
function getRandomIntNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomChoice = getRandomIntNumber(1, 3);
//=======================================================================================================================================
let userChoice = prompt('Оберіть камінь👊, ножиці✌️ чи папір🫲 (напишіть свій вибір словом "камінь", "ножиці", "папір")');

if (userChoice) {
	userChoice = userChoice.toLowerCase();
	console.log(`Вибір користувача: ${userChoice}`);
} else if (userChoice === null || userChoice === '') {
	console.log('Нажаль ви нічого не обрали');
}
//=======================================================================================================================================
if (randomChoice === 1) {
	randomChoice = 'камінь';
	console.log(`Вибір компа: ${randomChoice}`);
} else if (randomChoice === 2) {
	randomChoice = 'ножиці';
	console.log(`Вибір компа: ${randomChoice}`);
} else if (randomChoice === 3) {
	randomChoice = 'папір';
	console.log(`Вибір компа: ${randomChoice}`);
};
//=======================================================================================================================================
let gameStart = (choice) => {

	if (choice === randomChoice) {
		console.log('Ого нічія!');
	} else if (choice === 'камінь' && randomChoice === 'ножиці' || choice === 'ножиці' && randomChoice === 'папір' || choice === 'папір' && randomChoice === 'камінь') {
		console.log('Ви виграли');
	} else if (choice === 'камінь' && randomChoice === 'папір' || choice === 'ножиці' && randomChoice === 'камінь' || choice === 'папір' && randomChoice === 'ножиці') {
		console.log('Нажаль ви програли');
	} else {
		console.log('Наврядче цим ви зіграєте в камінь-ножиці-папір');
	}
};

gameStart(userChoice);
*/
