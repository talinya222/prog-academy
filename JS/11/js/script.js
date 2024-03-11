// Завдання 1: Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

let countryCode = { //валюта:країна
	"AUD": "AU",
	"EUR": "AT",
	"GBP": "GB",
	"USD": "US",
	"UAH": "UA"
};
let conversionRates = { //відносно usd
	"AUD": 0.66,
	"EUR": 1.09,
	"GBP": 1.29,
	"USD": 1,
	"UAH": 0.026
};

const dropList = document.querySelectorAll('.form-converter__select');
let fromCurrency = document.querySelector('.form-converter__select_from');
let toCurrency = document.querySelector('.form-converter__select_to');
let fromInput = document.querySelector('.form-converter__input_from');
let toInput = document.querySelector('.form-converter__input_to');
let inputs = document.querySelectorAll('.form-converter__input');

for (let i = 0; i < dropList.length; i++) {
	for (const currencyCode in countryCode) {

		let selected;
		if (i == 0) {
			selected = currencyCode == "AUD" ? "selected" : "";
		} else if (i == 1) {
			selected = currencyCode == "UAH" ? "selected" : "";
		}

		let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
		dropList[i].insertAdjacentHTML("beforeend", optionTag);
	}
	dropList[i].addEventListener("change", e => {
		loadFlag(e.target);
	})
};
// Ф-ія зміни прапора ========================================================================================================
function loadFlag(el) {
	for (const code in countryCode) {
		if (code == el.value) {
			let imgTag = el.parentElement.querySelector('.form-converter__icon');
			imgTag.src = `https://flagsapi.com/${countryCode[code]}/flat/64.png`;
		}
	}
};
// поміняти місцями ========================================================================================================
const exchangeIcon = document.querySelector('.form-converter__exchange-icon');

exchangeIcon.addEventListener("click", e => {
	let tempCode = fromCurrency.value;
	fromCurrency.value = toCurrency.value;
	toCurrency.value = tempCode;
	loadFlag(fromCurrency);
	loadFlag(toCurrency);


	let tempCodeInput = toInput.value;
	fromInput.value = tempCodeInput;
	convert();

});

// Зміна значень в інпуті ========================================================================================================
[...inputs].forEach(item => {
	let amountVal = item.value;

	if (isNaN(amountVal)) {
		return;
	}

	if (amountVal == "" || amountVal <= "0") {
		item.value = "1";
		amountVal = 1;
	}

	item.addEventListener('click', e => {
		e.stopPropagation();

		if (document.hasFocus()) {
			e.target.parentElement.style.boxShadow = "inset 0px 0px 8px 0px rgba(0, 0, 0, 0.35)";
			watchChanges();
		}
		item.onfocus = function () {
			// this.focused = true;
			this.parentElement.style.boxShadow = "inset 0px 0px 8px 0px rgba(0, 0, 0, 0.35)";
			watchChanges();
		};
		item.onblur = function () {
			// this.focused = false;
			this.parentElement.style.boxShadow = "none";
			watchChanges();
		};

		// setInterval(function () {
		// 	item.value = item.focused;
		// });
	});


	item.addEventListener('keydown', function (e) {
		console.log(e.key);
		switch (e.key) {
			case 'ArrowUp':
				item.value++;
				break;
			case 'ArrowDown':
				item.value--;

				if (item.value <= "0") {
					item.value = 1;
				}
				break;
		};
	});
});

function convert() {
	toInput.value = Number(fromInput.value * conversionRates[fromCurrency.value] / conversionRates[toCurrency.value]).toFixed(2);
};


let interval = null;
function watchChanges() {
	interval == null ? setInterval("convert()", 500) : clearInterval(interval);
};
//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================
// Завдання 2: Слайдер
// Мета: Створіть слайдер ( зображення що міняє картинку ) кожні 3 секунди,
// коли курсор наведено на зображення слайдер зупиняється, коли покидає зображення розпочинає роботу.

let sliderImagesName = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let sliderWrapper = document.querySelector('.slider-block__wrapper');


for (let i = 0; i < sliderImagesName.length; i++) {
	const slide = sliderImagesName[i];
	let slideItem = `
	<div class="slider-block__slide swiper-slide">
		<img src="img/slider/${slide}" alt="pic-${i + 1}">
	</div>
	`;
	sliderWrapper.insertAdjacentHTML("beforeend", slideItem);

};

// let sliderItems = [...sliderWrapper.children];
// console.log(sliderItems);

// sliderItems.forEach((item, index) => {
// 	if (index !== 0) {
// 		item.hidden = true;
// 	}

// 	item.dataset.index = index;

// 	item.addEventListener('click', e => {
// 		item.hidden = true;

// 		let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
// 		const nextSlide = sliderWrapper.querySelector(`[data-index = "${nextSlideIndex}"]`);

// 		nextSlide.hidden = false;

// 	});


// });


//=======================================================================================================================================
let indexValue = 0;
let delay;
function showSlide() {
	let sliderItems = [...sliderWrapper.children];
	for (let i = 0; i < sliderItems.length; i++) {
		sliderItems[i].hidden = true;
	}
	indexValue++;
	if (indexValue > sliderItems.length) { indexValue = 1 };
	sliderItems[indexValue - 1].hidden = false;
	delay = setTimeout(showSlide, 4000);
};
showSlide();

sliderWrapper.addEventListener("mouseenter", function (e) {
	clearTimeout(delay);

});

sliderWrapper.addEventListener("mouseleave", function (e) {
	showSlide();

});
//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================
// Завдання 3: Todo list
// Реалізуйте в todo  списку створеному на уроці кнопку видалення
// Реалізуйте сортування за імям ( створіть поле вводу ) і при вводі тексту 
// залишайте тільки ті айтеми туду що мають такеж значення щой в полі пошуку.
let form = document.querySelector('.todo-list__form');
let inputEl = document.querySelector('#todo-input');
let listGroup = document.querySelector('.todo-list__list-group');

function createListEl(userValue) {
	let item = document.createElement('li');
	item.classList.add('list-group-item');

	let dateCreate = new Date().toLocaleDateString('en-us', { weekday: "long", day: "numeric", month: "short" });
	let hourCreate = new Date().getHours();
	let minutesCreate = new Date().getMinutes();
	item.innerHTML = `
	<div class="list-group-user-text">${userValue}</div>
	<div class="list-group-create-date">Time: ${hourCreate}:${minutesCreate} ${dateCreate}</div>
	<button class="list-group-delete-btn btn">Delete</button>
	`;
	return item;
}
form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (inputEl.value.length === 0) {
		inputEl.classList.add('bg-danger');
	}
	else {
		listGroup.appendChild(createListEl(inputEl.value));
		inputEl.value = '';
		if (inputEl.classList.contains('bg-danger')) {
			inputEl.classList.remove('bg-danger');
		}

		let deleteBtns = document.querySelectorAll('.list-group-delete-btn');
		[...deleteBtns].forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault();
				e.target.parentElement.remove();
			});
		});

	}
});

// Search btn =================================================================================================================

let searchBtn = document.querySelector('.todo-list__search');
document.addEventListener('click', (e) => {

	if (e.target.closest('.todo-list__search')) {
		e.preventDefault();
		if (inputEl.value == '' && listGroup.children.length == 0) {
			return console.log('no li yet');
		} else {
			inputEl.value = '';
			inputEl.style.backgroundColor = 'lightblue';
			inputEl.focus();
			search();
		}

	} else {
		inputEl.style.backgroundColor = 'white';
	}
});

function search() {

	let createdTaskItem = document.querySelectorAll('.list-group-user-text');
	inputEl.addEventListener('input', function (e) {
		let value = this.value.trim();
		console.log(this.value);

		if (value !== '') {
			[...createdTaskItem].forEach(item => {
				if (item.innerText.search(value) == -1) {
					item.parentElement.classList.add('_hide');

				}
			});
		} else {
			[...createdTaskItem].forEach(item => {
				item.parentElement.classList.remove('_hide');
			});
		}
	});
};
//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================
// Завдання 4: Видалення усіх вказаних елементів з масиву
//Завдання: Напишіть функцію, яка приймає масив та елемент, який потрібно видалити з масиву.
//Функція повинна повертати новий масив без елементів, що були вказані для видалення.

const userNames = ['Gabriel', 'Odval', 'Emilija', 'Sou'];

function delElement(arr, el) {
	let result = arr.filter((item) => item !== el);
	return result;
};

console.log(delElement(userNames, 'Gabriel'));
console.log(delElement(userNames, 'Emilija'));

//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================
// Завдання 5:
//Напишіть функцію, яка приймає два масиви і повертає новий масив, що містить унікальні елементи з обох масивів (тобто без дублікатів).

let userNames1 = ['Gabriel', 'Odval', 'Emilija', 'Sou', 'Gabriel', 'Odval', 'Odval', 'Emilija'];

let userNames2 = ['Gabriel', 'Odval', 'Emilija', 'Den'];

function getUniqArray(arr1, arr2) {
	let result1 = arr1.filter((item) => arr2.indexOf(item) == -1);
	let result2 = arr2.filter((item) => arr1.indexOf(item) == -1);
	let result = result1.concat(result2);
	return result;
}

console.log(getUniqArray(userNames1, userNames2));
console.log(getUniqArray(userNames2, userNames1));
//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================
// Завдання 6:
//Напишіть функцію, яка приймає масив чисел і повертає об'єкт з двома масивами: перший масив містить парні числа, а другий — непарні.
let numArray = [10, 20, 30, 20, 10, 9, 8, 7, 6, 5, 4, 8, 7, 6, 3, 2];

function getObject(arr) {
	let evenNumArray = [];
	let oddNumArray = [];
	let obj = {};

	arr.filter(number => number % 2 === 0 ? evenNumArray.push(number) : oddNumArray.push(number));

	obj = { evenNumArray, oddNumArray };
	return obj;

};
console.log(getObject(numArray));
