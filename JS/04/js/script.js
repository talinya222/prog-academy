//======================= Homework №4 =====================================================================================================
//=============== Task 1: Callback function ========================================================

const userNames = ['Gabriel', 'Odval', 'Emilija', 'Sou'];

let hiUser = function (user) {
	console.log(`Вітаю ${user}`);
};

// hiUser = (user) => console.log(`Вітаю ${user}`); //Task 2 - arrow function

let wellcomUser = function (array, sayHi) {
	for (let i = 0; i < array.length; i++) {
		sayHi(array[i]);
	}
};

wellcomUser(userNames, hiUser);

//=============== Task 2: Arrow functions ========================================================
/*
const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
	console.log(`multiply ${a}*${b}*${c}: ${a * b * c}`);
}

multiplyValues(2, 2, 2);
*/
//=============== Task 3: Push ========================================================
/*
let animals = [];

animals.push('Albatross');
animals.push(2);
animals.push('Alligator');
animals.push(4);
animals.push('Alpaca');
animals.push(3);
animals.push('Antelope');
animals.push(6);

console.log(animals);

const pushArr = (arr, el) => arr.push(el);

pushArr(animals, 'Ant');

console.log(animals);
*/
//=============== Task 4: Pop ========================================================
/*
let bAnimals = ['Baboon', 'Barracuda', 'Bat', 'Bear', 'Beaver'];

console.log(bAnimals);

bAnimals.pop();
console.log(bAnimals);

const popArr = (arr) => arr.pop();

popArr(bAnimals);
console.log(bAnimals);
*/
//=============== Task 5: Unshift ========================================================
/*
let cAnimals = [];

cAnimals.unshift('Chinchilla');
cAnimals.unshift('Chimpanzee');
cAnimals.unshift('Chicken');
cAnimals.unshift('Caterpillar');

console.log(cAnimals);

const unshiftArr = (arr, el) => arr.unshift(el);

unshiftArr(cAnimals, 'Cat');

console.log(cAnimals);
*/
//=============== Task 5: Shift ========================================================
/*
let dAnimals = ['Deer', 'Dinosaur', 'Dog', 'Dogfish', 'Dolphin'];

console.log(dAnimals);

dAnimals.shift();
console.log(dAnimals);

const shiftArr = (arr) => arr.shift();

shiftArr(dAnimals);
console.log(dAnimals);
*/
//=============== Additional work ========================================================
//=============== Task 1 ========================================================
/*
let keepRemoveArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];

const filteredArray = keepRemoveArray.filter((el) => el !== "Remove");
console.log(filteredArray);
*/
//=============== Task 2 ========================================================
/*
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
console.log(checkArr);

for (let i = 0; i < checkArr.length; i++) {
	const el = checkArr[i];
	if (el < 0) {
		checkArr.splice(checkArr.indexOf(el), 1, 0);
	}
}
console.log(checkArr);
*/
//=============== Task 3 ========================================================
/*
let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідний"];

let getPlans = function (arr1, arr2) {

	for (var i = 0; i < arr1.length; i++) {
		let el1 = arr1.indexOf(arr1[i]);
		for (var j = 0; j < arr2.length; j++) {
			let el2 = arr2.indexOf(arr2[j]);
			if (el2 === el1) {
				console.log(`Сьогодні ${arr1[i]} у вас такі плани ${arr2[j]}`);
			}
		}
	}

};

getPlans(days, plans);
*/
