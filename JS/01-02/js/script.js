//======================= Homework №1 =====================================================================================================

let userNickname = 'Ville';
let userScore = 10;
//=========================================================================================================================================

let price = Number(prompt("Please enter the purchase price"));
let productsQuantity = Number(prompt("Please enter the number of products"));
let totalAmount = price * productsQuantity;
let discount = totalAmount * 5 / 100;
console.log(
	`
	Ціна покупки: ${price}
	Кількість продуктів: ${productsQuantity}
	Загальна сума до сплати: ${totalAmount}
	Знижка 5%: ${discount}
	`
);

//======================= Homework №2 =====================================================================================================
//=============== Task 1: Comparing the numbers ========================================================
/*
let firstNumber = Number(prompt("Please enter first number"));
let secondNumber = Number(prompt("Please enter second number"));

if (firstNumber > secondNumber) {
	console.log('Перше число більше');
} else if (firstNumber === secondNumber) {
	console.log('Ці числа рівні');
} else {
	console.log('Друге число більше');
};
*/
//=============== Task 2: Parity check ========================================================
/*
let userNumber = Math.round(Number(prompt("Please enter any number")));

if (userNumber % 2 === 0) {
	console.log('Число є парним');
} else {
	console.log('Число є непарним');
};
*/
//=============== Task 3: Determination of birth year ========================================================
/*
let userAge = Number(prompt("How old are you?"));
let currentYear = new Date().getFullYear();
let birthYear = currentYear - userAge;
console.log(birthYear);
*/
//=============== Task 4: Guess the number ========================================================
/*
let givenNumber = 26;
let userСhosenNumber = Number(prompt("Try your luck and enter your number))"));

if (userСhosenNumber > givenNumber) {
	console.log('Занадто велике');
} else if (userСhosenNumber === givenNumber) {
	console.log('Вітаємо, ви вгадали!');
} else {
	console.log('Занадто мале');
};
*/
//=============== Task 5: Classification by grades ========================================================
/*
let userGrade = Number(prompt("What is your rating on a 10-point scale?"));

if (userGrade >= 8 && userGrade <= 10) {
	console.log('Відмінно');
} else if (userGrade >= 5 && userGrade <= 7) {
	console.log('Добре');
} else if (userGrade >= 3 && userGrade <= 4) {
	console.log('Задовільно');
} else if (userGrade < 3) {
	console.log('Незадовільно');
} else {
	alert("You must enter your grade from 1 to 10!!!");
};
*/
//=============== Task 6: Range check ========================================================
/*
let userRangeNumber = Number(prompt("Please enter any number"));

if (userRangeNumber >= 1 && userRangeNumber <= 100) {
	console.log('Число знаходиться в діапазоні');
} else {
	console.log('Число поза діапазоном');
};
*/
//=============== Task 7: Ternary operator ========================================================
/*
let result = '';
let score = 75;

result = score > 50 ? "Пройшов" : "Не пройшов";
console.log(result);

//========================================================================================================================================

let tempResult = "";
let temperature = 30;

tempResult = temperature > 25 ? "Гаряче" : "Прохолодно";
console.log(tempResult);
*/
//=============== Task 8 (additional): A program for checking the user's age and country of residence =====================================
/*
let yourAge = Number(prompt("Вкажіть свій вік"));
let yourCountry = prompt("Вкажіть свою країну народження");
yourCountry = yourCountry.toLowerCase();

console.log(yourAge);
console.log(yourCountry);

if (yourAge >= 18) {
	if (yourCountry === 'україна' || yourCountry === 'ukraine') {
		console.log('Вітаємо, ви маєте право голосу в Україні');
	} else {
		console.log('Перевірте правила голосування у вашій країні');
	}
} else {
	console.log('Ви ще занадто молоді для голосування');
};
*/
