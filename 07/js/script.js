let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}

let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {

		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {

		setTimeout(() => {
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
// меню (бургер) ==========================================================================================================================
function menuInit() {
	let iconMenu = document.querySelector(".icon-menu");
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			if (bodyLockStatus) {
				bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
			}
		});
	};
}

menuInit();

// onclick ================================================================================================================================
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір.
// Можете використати функцію яка генерує різний колір
// Модифікація: при кліку на маланький чайник змініюється колір бекграунду, великий напис та великий чайник
let bgContainer = document.querySelector('.page');
let bgTextContainer = document.querySelector('.main-block__decor');
let kettlesContainer = document.querySelector('.main-block__kettles');
let bigImageContainer = document.querySelector('.main-block__image img');

let imagesInfo = [
	{ img: '01.png', backgroundText: "../img/blue.svg", altText: "blue SMEG kettle", bigImg: 'smeg-blue-kettle.png' },
	{ img: '02.png', backgroundText: "../img/red.svg", altText: "red SMEG kettle", bigImg: 'smeg-red-kettle.png' },
	{ img: '03.png', backgroundText: "../img/pink.svg", altText: "pink SMEG kettle", bigImg: 'smeg-pink-kettle.png' },
	{ img: '04.png', backgroundText: "../img/beige.svg", altText: "beige SMEG kettle", bigImg: 'smeg-beige-kettle.png' }
]

const colors = ['#95CFD5', '#C42129', '#E0ADC5', '#F5C7B3'];
const [blue, red, pink, beige] = colors;


bgContainer.style.backgroundColor = pink;

//========================================================================================================================================
function getImages() {
	imagesInfo.forEach(pic => {
		const pictureName = pic.img;
		const altTextToPic = pic.altText;

		let kettlesHTML = `
	<a href="#" class="main-block__item">
		<img src="img/kettles/${pictureName}" alt="${altTextToPic}">
	</a>
	`
		return kettlesContainer.insertAdjacentHTML('beforeend', kettlesHTML);
	});
}
getImages();

//виділення активного елемента + встановлення дата-атрибутів ============================================================================

let [...kettlesCollection] = document.querySelectorAll('.main-block__item');
let [...kettlesImgCollection] = document.querySelectorAll('.main-block__item img');

let activeEl = kettlesCollection[kettlesCollection.length - 2];
if (activeEl) {
	activeEl.classList.add('main-block__item_active');
}

kettlesCollection = kettlesCollection.map((el, index) => {
	return el.dataset.targetId = index;
})
kettlesImgCollection = kettlesImgCollection.map((el, index) => {
	return el.dataset.id = index;
})

// зміна активного елементу (маленький чайник)=========================================================================================
const showIcon = (item) => {
	const elContainer = item.closest('.main-block__kettles');
	if (item.classList.contains('main-block__item_active')) {
		return;
	}
	const targetId = item.dataset.targetId;

	const elCompare = elContainer.querySelector(`.main-block__item img[data-id="${targetId}"]`);
	if (elCompare) {
		const elBtnActive = elContainer.querySelector('.main-block__item_active');
		elBtnActive.classList.remove('main-block__item_active');


		item.classList.add('main-block__item_active');
	}
}
// подія клік ======================================================================================================================

document.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target && !e.target.closest('.main-block__item')) {
		return;
	}
	const elBtn = e.target.closest('.main-block__item');
	showIcon(elBtn);

	// зміна великих елементів ===============================================================================================================
	let showBigElements = (arr) => {
		arr.map((el, index) => {
			if (index == elBtn.dataset.targetId) {
				bgTextContainer.style.backgroundImage = `url(${el.backgroundText})`;
				bigImageContainer.src = `img/${el.bigImg}`;
			}
		})
	}
	showBigElements(imagesInfo);

	// зміна бекграунда ===============================================================================================================

	let currentBgColor = (arr) => {
		arr.map((el, index) => {
			if (index == elBtn.dataset.targetId) {
				bgContainer.style.backgroundColor = el;
			}
		})
	}
	currentBgColor(colors);

});
//========================================================================================================================================
// ondblclick ============================================================================================================================
//Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).
// Модифікація: маленькі чайники при подвійному кліку збільшуються.

kettlesContainer.addEventListener('dblclick', (e) => {
	e.preventDefault();
	const kettleBtn = e.target.closest('.main-block__item img');

	kettleBtn.classList.toggle('_double-size');

	if (kettleBtn.classList.contains('_double-size')) {
		kettleBtn.style.transform = 'scale(2)';
	} else {
		kettleBtn.style.transform = 'scale(1)';
	}
	showIcon(kettleBtn);
});

//========================================================================================================================================
// addEventListener і removeEventListener ==============================================================================================
//Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1.
//Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.
let counterBody = document.querySelector('.counter-block__body');
let counterBtn = document.querySelector('.counter-block__btn');

let count = 0;

function increaseCount() {
	count++;
	counterBody.innerText = count;
	if (count >= 10) {
		counterBtn.removeEventListener('click', increaseCount);
		counterBtn.setAttribute("disabled", "disabled");
	}

}

counterBtn.addEventListener('click', increaseCount);
//========================================================================================================================================
//Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div).
//Підключіть обробник події onclick до кожного елементу.
//Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки
let textBlockContainer = document.querySelector('.text-remove__container');

for (let i = 0; i < 5; i++) {
	let textHTML = `
	<div class="text-remove__block" style="margin-bottom: 15px;">
	<p class="text-remove__text" style="margin-bottom: 15px; line-height: 200%;">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus ea non quaerat modi nam voluptates, possimus maiores alias velit libero sit laborum unde itaque aliquam iusto error veritatis vitae.
	</p>
	<button class="text-remove__btn btn">Remove ${i + 1}</button>
</div>
	`
	textBlockContainer.insertAdjacentHTML('beforeend', textHTML);
}

let [...textBlockBtn] = document.querySelectorAll('.text-remove__btn');

textBlockBtn.forEach(item => {
	item.addEventListener('click', (e) => {
		item.parentElement.remove();
	})
})
//========================================================================================================================================
//Завдання 'onMouseOver' і 'onMouseOut' ==================================================================================================
//Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується.
//Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

//Використаний h1 Kettles при наведенні підсвічується

let titleBody = document.querySelector('.main-block__content');
let title = document.querySelector('.main-block__title');

title.onmouseover = title.onmouseout = showIllumination;

function showIllumination(e) {
	if (e.type == 'mouseover') {
		e.target.style.textShadow = `0 0 6px rgba(202, 228, 225, 0.92), 
		0 0 30px rgba(202, 228, 225, 0.34), 
		0 0 12px rgba(191, 226, 255, 0.52), 
		0 0 21px rgba(191, 226, 255, 0.92), 
		0 0 34px rgba(191, 226, 255, 0.78), 
		0 0 54px rgba(191, 226, 255, 0.92)`;
		e.target.style.transition = 'text-shadow 0.8s ease 0s';
		// e.relatedTarget.style.backgroundColor = 'green';
	}
	if (e.type == 'mouseout') {
		e.target.style.textShadow = 'none';
		// e.relatedTarget.style.backgroundColor = 'orange';
	}
}

//========================================================================================================================================
//Завдання 'onContextMenu ==================================================================================================
//Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню.
//Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

//Використані текстові елементи з завдання про видалення блоків

let [...textBlock] = document.querySelectorAll('.text-remove__block');
// let titleBody = document.querySelector('.main-block__content');

let contextMenuHTML = `
<div class="text-remove__submenu submenu ">
<nav class="submenu__body">
	<ul class="submenu__list">
		<li class="submenu__item"><a href="#" class="submenu__link">Вирівняти текст по лівому краю</a></li>
		<li class="submenu__item"><a href="#" class="submenu__link">Вирівняти текст по центру</a></li>
		<li class="submenu__item"><a href="#" class="submenu__link">Вирівняти текст по правому краю</a></li>
		<li class="submenu__item"><a href="#" class="submenu__link">Приховати елемент</a></li>
	</ul>
</nav>
</div>
`;
textBlockContainer.insertAdjacentHTML('beforeend', contextMenuHTML);
let submenu = document.querySelector('.submenu');
textBlockContainer.oncontextmenu = textBlockContainer.onclick = listenEvent;

function listenEvent(e) {
	e.preventDefault();
	e.stopPropagation();
	let targetElement = e.target.closest('.text-remove__text');
	let targetMenuElement = e.target.closest('.submenu__link');
	let [...textItems] = document.querySelectorAll('.text-remove__text');

	if (targetElement && e.type == 'contextmenu') {
		submenu.style.top = `${e.clientY}px`;
		submenu.style.left = `${e.clientX}px`;
		submenu.classList.add('submenu_active');
		let [...links] = document.getElementsByClassName('submenu__link');
		links.map(el => el.style.backgroundColor = 'transparent');
		document.getElementsByClassName('submenu__link')[0].focus();
		document.querySelector(':focus').style.backgroundColor = generateColor();

	}

	if (e.type == 'click' && !e.target.closest('.submenu__body') || targetMenuElement) {
		submenu.classList.remove('submenu_active');
		let [...links] = document.getElementsByClassName('submenu__link');
		links.map(el => el.style.backgroundColor = 'transparent');

		if (targetMenuElement.innerText.includes('центру')) {
			textItems.forEach(item => item.style.textAlign = 'center');
		} else if (targetMenuElement.innerText.includes('правому')) {
			textItems.forEach(item => item.style.textAlign = 'right');
		} else if (targetMenuElement.innerText.includes('лівому')) {
			textItems.forEach(item => item.style.textAlign = 'left');
		} else if (targetMenuElement.innerText.includes('Приховати')) {
			textItems.forEach(item => item.style.color = 'transparent');
		}
	}
}
//========================================================================================================================================
//Завдання 'keyup': ==================================================================================================
//Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок.
//Рух об'єкта повинен зупинятися, коли клавіша відпущена

let squareContainer = document.querySelector('.square__container');
let square = document.querySelector('.square__body');
let squareRect = square.getBoundingClientRect();
let x = squareRect.x;
let y = squareRect.y;
let squireWidth = squareRect.width;
let squireHeight = squareRect.height;

function moveLeft() {
	if (parseFloat(getComputedStyle(square).left) > squireWidth) {
		x -= squireWidth;
		square.style.left = (x + 'px');
	}
}

function moveRight() {
	if (parseFloat(getComputedStyle(square).left) < squareContainer.getBoundingClientRect().width - squireWidth) {
		x += squireWidth;
		square.style.left = (x + 'px');
	}
}

function moveTop() {
	if (parseFloat(getComputedStyle(square).top) > 0) {
		y -= squireHeight;
		square.style.top = (y + 'px');
	}
}
function moveDown() {
	if (parseFloat(getComputedStyle(square).top) < squareContainer.getBoundingClientRect().height - squireHeight) {
		y += squireHeight;
		square.style.top = (y + 'px');
	}
};
//=========================================================================================================================================


// document.getElementsByClassName('submenu__link')[0].classList.add('submenu__link_focus');

//=======================================================================================================================================
document.onkeydown = function (e) {
	e.preventDefault();

	switch (e.key) {
		case 'ArrowUp': moveTop();

			let navLinksUp = document.getElementsByClassName('submenu__link');
			let numb = [...navLinksUp].indexOf(document.querySelector(':focus'));

			navLinksUp[--numb].focus();
			navLinksUp[++numb].blur();
			navLinksUp[--numb].style.backgroundColor = generateColor();
			navLinksUp[++numb].style.backgroundColor = 'transparent';

			break;
		case 'ArrowRight': moveRight(); break;
		case 'ArrowDown': moveDown();

			let navLinks = document.getElementsByClassName('submenu__link');
			let num = [...navLinks].indexOf(document.querySelector(':focus'));

			navLinks[++num].focus();
			navLinks[--num].blur();
			navLinks[++num].style.backgroundColor = generateColor();
			navLinks[--num].style.backgroundColor = 'transparent';

			break;
		case 'ArrowLeft': moveLeft(); break;
	};

	//=======================================================================================================================================
	//Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: ===========================================================
	//Коли користувач натискає певну клавішу М and ctrl, з'являється  меню ul елемент в якому 3 li
	//При натиску клавіші ctrl K меню зникає.
	//зробити можливість переміщатися по пунктах меню, використовуючи клавіші вгору/вниз змінюючи бекграунд.

	if (e.ctrlKey && ['M', 'm'].includes(e.key)) {
		submenu.classList.add('submenu_active');
		document.getElementsByClassName('submenu__link')[0].focus();
		document.querySelector(':focus').style.backgroundColor = generateColor();
		// document.getElementsByClassName('submenu__link')[0].classList.add('submenu__link_focus');

	} else if (e.ctrlKey && ['K', 'k'].includes(e.key)) {
		submenu.classList.remove('submenu_active');
		let [...links] = document.getElementsByClassName('submenu__link');
		links.map(el => el.style.backgroundColor = 'transparent');
	}

};

//=============== random color function========================================================
function generateColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`
};
//Закрити сабменю при кліку на баді ==============================================================

function closeSubmenu(e) {
	if (!e.target.matches('.submenu_active')) {
		submenu.classList.remove('submenu_active');
		let [...links] = document.getElementsByClassName('submenu__link');
		links.map(el => el.style.backgroundColor = 'transparent');
	}

}

document.body.addEventListener('click', closeSubmenu);

//=======================================================================================================================================
//event.target: ===========================================================
//Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
//Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

let targetBtnContainer = document.querySelector('.target-btn__container');
targetBtnContainer.onclick = getBtn;

function getBtn(e) {
	e.preventDefault();
	e.stopPropagation();
	let targetElement = e.target.closest('.target-btn__btn');
	console.log(targetElement.innerText);
}

//=======================================================================================================================================
//'onMouseDown' і 'onMouseUp': ===========================================================
//Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області,
//використовуючи події натискання та відпускання кнопки миші.

let grabItemContainer = document.querySelector('.square-mouse');
let grabItem = document.querySelector('.square-mouse__body');


function getCoords(elem) {
	return {
		top: elem.getBoundingClientRect().top + scrollY,
		left: elem.getBoundingClientRect().left + scrollX
	};
}

let coordsListener = function (e) {
	let coords = getCoords(grabItem);
	grabItem.style.left = (e.pageX - (e.pageX - coords.left)) + "px";
	grabItem.style.top = (e.pageY - (e.pageY - coords.top)) + "px";
};

grabItem.addEventListener('mousedown', e => {
	document.addEventListener('mousemove', coordsListener);
});

grabItem.addEventListener('mouseup', e => {
	document.removeEventListener('mousemove', coordsListener);
});
