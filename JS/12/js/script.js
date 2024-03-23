//Форма з вибором улюбленого кольору:
//Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
//Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.
//====================================================================================================================================

let [...radiobuttonInputs] = document.querySelectorAll('.radiobuttons__input');

radiobuttonInputs.forEach(item => {
	item.addEventListener('change', e => {
		[...e.target.nextElementSibling.children].forEach(span => {
			let bgColor = window.getComputedStyle(span).getPropertyValue('background-color');
			document.body.style.backgroundColor = bgColor;
		});
	});
});
//====================================================================================================================================
//Форма для вибору хобі з чекбоксами:
//Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
//Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.
//====================================================================================================================================
let [...checkboxInputs] = document.querySelectorAll('input[type="checkbox"]');

checkboxInputs.forEach(item => {
	item.addEventListener('change', e => {

		if (e.target.checked) {
			document.querySelector('.form__textarea').value += e.target.nextElementSibling.innerText + '\n';

			// let div = document.createElement('div');
			// div.innerText = e.target.nextElementSibling.innerText;
			// div.classList.add('hobbies-item');
			// document.querySelector('.form').appendChild(div);

		} else {
			let str = document.querySelector('.form__textarea').value;
			str = str.replace(e.target.nextElementSibling.innerText, '');
			str = str.trim();

			document.querySelector('.form__textarea').value = str + '\n';

			// let hobbiesItems = document.getElementsByClassName('hobbies-item');
			// [...hobbiesItems].forEach(item => {
			// 	if (item.innerText == e.target.nextElementSibling.innerText) {
			// 		item.remove();
			// 	}
			// })

		}
	});
});
//====================================================================================================================================
//Форма з вибором країни із випадаючого списку:
//Створіть випадаючий список з назвами країн.
//Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення,
//в іншому елементі на сторінці.
//====================================================================================================================================

let countryInfo = [
	{ name: "Australia", capital: "Canberra", population: 23_470_145 },
	{ name: "England", capital: "London", population: 56_36_419 },
	{ name: "USA", capital: "Washington", population: 334_914_895 },
	{ name: "Ukraine", capital: "Kyiv", population: 41_167_335 }
];

let countrySelect = document.querySelector('.form__select-block');

for (let i = 0; i < countryInfo.length; i++) {
	let element = countryInfo[i];
	let selected;

	selected = element.name == "Australia" ? "selected" : "";

	let optionTag = `<option value="${element.name}" ${selected}>${element.name}</option>`;
	countrySelect.insertAdjacentHTML("beforeend", optionTag);

	if (countrySelect.children[0].selected) {
		document.querySelector('.form__country-info').innerText = `Capital: ${countryInfo[0].capital}, Population: ${countryInfo[0].population}`;
	}

	countrySelect.addEventListener("change", e => {
		if (element.name == e.target.value) {
			document.querySelector('.form__country-info').innerText = `Capital: ${element.capital}, Population: ${element.population}`;
		}
	});
};

//====================================================== HW - 13 =====================================================================
//Створіть групу радіокнопок для оцінки від 1 до 5.
//Додайте обробник події onchange для виявлення вибору користувача,
//а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").
//====================================================================================================================================

const [...starRaiting] = document.querySelectorAll(".rating__item");

starRaiting.forEach(star => {
	if (star.checked) {
		document.querySelector(".form__count").innerText = star.value;
	}
	star.addEventListener("change", e => {
		document.querySelector(".form__count").innerText = e.target.value;

		if (e.target) {
			alert('Краще бути не може 😁\nДякуємо за вашу оцінку!');
		}
	});
});
//====================================================================================================================================
//Знайдіть всі великі літери в тексті і збереження їх в масив
//====================================================================================================================================

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

// const hasCapital = (str) => !/^[a-z]*$/.test(str);

let regCapitals = /[A-Z]/g;
let capitalsArray = textStr.match(regCapitals);
console.log(capitalsArray);
//====================================================================================================================================
//Знаходження слів із певною кількістю символів:
//Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв
//====================================================================================================================================
let regLetters = /\w{5}/g;

let wordsArray = textStr.match(regLetters);
console.log(wordsArray);
//====================================================================================================================================
//Створити регулярний вираз, який видаляє всі HTML теги з рядка.
//Наприклад, після обробки рядка <p>Це - простий <b>текст</b>.</p> має залишитися Це - простий текст.
//====================================================================================================================================
let testString = '<p>Це - простий <b>текст</b>.</p>';

let regTag = /[<\w>\/]/g;

let testArray = testString.match(regTag);
let testResult = testString.replace(regTag, "");
console.log(testArray);
console.log(testResult);
//====================================================================================================================================
//Розробити регулярний вираз для перевірки сили пароля.
//Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру, один спеціальний символ (!@#$%^&*) і мати довжину від 8 до 20 символів.
//====================================================================================================================================

let testPassword1 = '1234Password&^-$+3.3';
let testPassword2 = '1@Pword';
let testPassword3 = 'itspass123';
let testPassword4 = '<p>Its - text1@ <b>';

let regPasswod = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,20}$/;

let testResult1 = regPasswod.test(testPassword1);
let testResult2 = regPasswod.test(testPassword2);
let testResult3 = regPasswod.test(testPassword3);
let testResult4 = regPasswod.test(testPassword4);

console.log('Пароль 1:', testResult1);
console.log('Пароль 2:', testResult2);
console.log('Пароль 3:', testResult3);
console.log('Пароль 4:', testResult4);

//=======================================================================================================================================
//'onMouseDown' і 'onMouseUp': ===========================================================
//Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області,
//використовуючи події натискання та відпускання кнопки миші.

let grabItemContainer = document.querySelector('.square-mouse__container');
let grabItem = document.querySelector('.square-mouse__body');
//========================================================================================================================================
// В принципі вийшло непогано, але всеодно шось не те.
// квадрат рухається в межах контейнера, але курсор рухається відносно сторінки(((
// із закоментованими координатами шось теж не так працює як треба.
// Скиньте мені будь ласка рішення, дуже цікаво.
//========================================================================================================================================

let coordsListener = function (e) {
	let x = e.clientX * 100 / window.innerWidth + "%";
	let y = e.clientY * 100 / window.innerHeight + "%";
	grabItem.style.transform = "translate(-" + x + ", -" + y + ")";
	//версія координат =====================================================
	// let width = document.querySelector('.square-mouse__container').getBoundingClientRect().width;
	// let height = document.querySelector('.square-mouse__container').getBoundingClientRect().height;
	// x = (e.clientX - width - grabItem.offsetWidth / 2) + 'px';
	// y = (e.clientY - window.innerHeight + height + grabItem.offsetHeight + grabItem.offsetHeight / 2) + 'px';
	//=====================================================================
	grabItem.style.left = x;
	grabItem.style.top = y;
	e.stopPropagation();
};

grabItem.addEventListener('mousedown', e => {
	document.addEventListener('mousemove', coordsListener);

	grabItem.addEventListener('mouseup', function mouseUpHandler() {
		document.removeEventListener('mousemove', coordsListener);
		grabItem.removeEventListener('mouseup', mouseUpHandler); // очистка обробника
		alert('Done');
	});
});