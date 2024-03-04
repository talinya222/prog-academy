//======================= Homework №7 ====================================================================================================
//=============== Task 1: Split method, String toUpperCase() Method ========================================================

const str = 'Це рядок який містить слова розділені пробілами';
console.log(str);
let arrayOfStrings = str.split(" ");

arrayOfStrings = arrayOfStrings.map(item => {
	if (item == 'рядок') {
		item = 'масив';
	}
	return item.toUpperCase();
});

console.log(arrayOfStrings);

//=============== Task 2: Leap Year check ========================================================
/*
function checkLeapYear(year) {

	const leap = new Date(year, 1, 29).getDate();

	if (leap === 29) {
		console.log(`${year} is a leap year`);
	} else {
		console.log(`${year} is not a leap year`);
	}
}

checkLeapYear(2024);
checkLeapYear(2023);
checkLeapYear(2022);
checkLeapYear(2021);
checkLeapYear(2020);
*/
//=============== Task 3: Getting the Name of the Month ========================================================
/*
function getMonthInEnglish(date) {
	return date.toLocaleString('en', {
		month: 'long'
	});

};


console.log(getMonthInEnglish(new Date()));
*/
//=============== Task 3:v2. ========================================================
/*
const months = {
	01: "January",
	02: "February",
	03: "March",
	04: "April",
	05: "May",
	06: "June",
	07: "July",
	08: "August",
	09: "September",
	10: "October",
	11: "November",
	12: "December"
}

function getMonthName(date) {
	let monthNumber = date.getMonth() + 1;

	for (const key in months) {
		if (key == monthNumber) {
			return months[key];
		}
	}

};

console.log(getMonthName(new Date()));
*/
//=============== Task 4: Adding Days to a Date ========================================================
/*
function getNewDate(numberOfAddedDays) {
	const currentDate = new Date();
	const currentDateInMs = Date.now();
	let newDay = currentDateInMs + 86400000 * numberOfAddedDays;
	return console.log(`New date in ${numberOfAddedDays} days from ${currentDate.toDateString()}: ${new Date(newDay)}`);

};

getNewDate(1);
getNewDate(5);
getNewDate(8);
*/
//=============== Task 5-6: querySelector, querySelectorAll ========================================================
/*
//Для цього завдання використувую список із задачами що в html

let firstLiEl = document.querySelector('li:first-child');
let lastLiEl = document.querySelector('.hw__list > li:last-child');
let thirdLiEl = document.querySelector('li:nth-child(3)');

console.log(firstLiEl);
console.log(lastLiEl);
console.log(thirdLiEl);
console.log('-------------------------------');

let liList = document.querySelectorAll('.hw__item');
let liList2 = document.querySelectorAll('.hw__item > ul > li');
let liList3 = document.querySelectorAll('.hw__item > ul > li> ul > li');
let liListAdditional = document.querySelectorAll('.additional > ol > li');

console.log(liList);
console.log([...liList]);
console.log('-------------------------------');
console.log(liList2);
console.log([...liList2]);
console.log('-------------------------------');
console.log(liList3);
console.log([...liList3]);
console.log('-------------------------------');
console.log(liListAdditional);
console.log([...liListAdditional]);
*/
//=====================================================================================================================================
//=====================================================================================================================================
//=====================================================================================================================================
//=============== Additional work ====================================================
//=============== Task 1: Word Frequency in a Line. ==================================
/*
let string = 'Це рядок розділені пробілами такий рядок це містить рядок який містить слова розділені пробілами рядок який містить слова розділені пробілами такий рядок це містить рядок який містить';

function getWordFrequency(str, word) {
	const strArray = str.split(' ');
	let counter = 0;
	for (let i = 0; i < strArray.length; i++) {
		const element = strArray[i];
		if (element === word) {
			counter++;
		}

	}
	return console.log(`The number of word ${word.toUpperCase()} in a line: ${counter}`);
};

getWordFrequency(string, 'рядок');
getWordFrequency(string, 'містить');
getWordFrequency(string, 'слова');
*/
//=============== Task 2: Replacing the first letter of each word with a capital letter ==================================
/*
let string = '   Це рядок      який містить всі слова з       великої літери розділені пробілами ';

function getEveryWordCapitalLetter(str) {
	return str.split(' ').filter(word => word !== '').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

console.log(getEveryWordCapitalLetter(string));
*/