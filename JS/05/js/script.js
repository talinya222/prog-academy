//======================= Homework №5 =====================================================================================================
//=============== Task 1: Let, const ========================================================

for (let i = 0; i < 5; i++) {
	console.log(i);
}
//========================================================================================================================================================
let message = 'test';
function example() {
	if (true) {
		let message = 'Hello, world!';
		console.log(message);
	}
	console.log(message); // З варіантом var Виведе 'Hello, world!'
};

example();

//=============== Task 2: for...in - Use to iterate over objects. ========================================================
/*
const person = {
	name: 'John',
	age: 25,
	occupation: 'Developer'
};

for (let key in person) {
	console.log(key, person[key]);
}
*/
//=============== Task 3: for...in + for...of - Used to iterate over strings and arrays. ==================================
/*
const students = [
	{ name: 'Alice', age: 20, grade: 'A' },
	{ name: 'Bob', age: 22, grade: 'B' },
	{ name: 'Charlie', age: 21, grade: 'C' }
];

let objData = (obj) => {
	for (let key in obj) {
		console.log(key, obj[key]);
	}
}

let studentItem = (array, getObjItem) => {
	for (let element of array) {
		console.log(element);
		getObjItem(element);
	}
}

studentItem(students, objData);
*/
//=============== Task 4: MAP method for array transformation. ==================================
/*
let numberArr = [1, -1, 2, -2, 3];
console.log(numberArr);

let squaredNumber = numberArr.map((el) => el **= 2);

console.log(squaredNumber);
*/
//=====================================================================================================================================
/*
let myArr = [];
let mySecondArr;

let arrElements = (array) => {
	for (let i = 1; i <= 10; i++) {
		array.push(i);
	}
	return array;
};

let fillArr = (arr, getSomeArrElements) => {
	mySecondArr = getSomeArrElements(arr).map((el) => `${el} new value`);
};

fillArr(myArr, arrElements);

console.log(myArr);
console.log(mySecondArr);
*/
//=============== Task 5: forEach. ==================================
/*
const numberArr = [10, 20, 30];
let sum = 0;

numberArr.forEach((num) => sum += num);

console.log(numberArr, `Sum of number array elements: ${sum}`);

//=============== Version with mixed array ==================================

const mixedArr = [15, 25, 35, '25', '135', 'String'];
let summ = 0;

mixedArr.forEach((num) => {
	if (typeof num === 'number') {
		summ += num;
	}
});

console.log(mixedArr, `Sum of filtered array elements: ${summ}`);
*/
//=====================================================================================================================================
//=====================================================================================================================================
//=====================================================================================================================================
//=============== Additional work =============================================
//=============== Task 1: Callback function. ==================================
/*
let selectedOperation = (operation) => {
	switch (operation) {
		case 'summ':
			return function plus(firstNumberPlus, secondNumberPlus) {
				console.log(`Plus ${firstNumberPlus} + ${secondNumberPlus} = ${firstNumberPlus + secondNumberPlus}`);
			};
		case 'subtract':
			return function minus(firstNumberMinus, secondNumberMinus) {
				console.log(`Minus ${firstNumberMinus} - ${secondNumberMinus} = ${firstNumberMinus - secondNumberMinus}`);
			};
		case 'multiply':
			return function multiply(firstNumberMultiply, secondNumberMultiply) {
				console.log(`Multiply ${firstNumberMultiply} * ${secondNumberMultiply} = ${firstNumberMultiply * secondNumberMultiply}`);
			};
		case 'divide':
			return function divide(firstNumberDivide, secondNumberDivide) {
				if (secondNumberDivide === 0) {
					console.log('Error when dividing by zero');
				} else {
					console.log(`Divide ${firstNumberDivide} / ${secondNumberDivide} = ${firstNumberDivide / secondNumberDivide}`);
				}
			};
		default:
			return console.log('No information');
	}
};

let calculatorFn = (firstNumber, secondNumber, chooseOperation) => {
	chooseOperation(firstNumber, secondNumber);
}

calculatorFn(2, 3, selectedOperation('summ'));
calculatorFn(20, 5, selectedOperation('subtract'));
calculatorFn(5, 5, selectedOperation('multiply'));
calculatorFn(30, 5, selectedOperation('divide'));
calculatorFn(30, 0, selectedOperation('divide'));
calculatorFn(30, 0, selectedOperation('smth'));
*/
//=============== Task 2: Callback function. ==================================
/*
let randomNumberArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let doubleNumberArray = [];

let doubleNumber = (number) => number * 2;


let modifyArray = (array, modifyFn) => {
	for (let iterator of array) {
		doubleNumberArray.push(modifyFn(iterator));
	}
}

modifyArray(randomNumberArray, doubleNumber);
console.log(doubleNumberArray);
*/
//=============== Task 3: forEach to create an array containing only unique elements. ==================================
/*
let numericArray = [10, 20, 30, 20, 10];
let uniqueArr = [];

numericArray.forEach((item) => {
	if (!uniqueArr.includes(item)) {
		uniqueArr.push(item);
	}
});

console.log(uniqueArr);
*/
//=============== Task 4: Array and callback function that selects even numbers. ==================================
/*
let numArraay = [10, 20, 30, 20, 10, 9, 8, 7, 6, 5, 4, 8, 7, 6, 3, 2];
let evenNumArray = [];
console.log(numArraay);

let containEvenNumbers = (number) => {
	number % 2 === 0 && !evenNumArray.includes(number) ? evenNumArray.push(number) : false;
};

let checkArray = (array, parityCheck) => {
	for (const item of array) {
		parityCheck(item);
	}
};

checkArray(numArraay, containEvenNumbers);

console.log(evenNumArray);
*/