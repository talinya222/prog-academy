//======================= Homework №7 ====================================================================================================
//=============== Task 1,2: Create A tags in the header ========================================================
const menuData = [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about' },
	{ name: 'Services', url: '/services' },
	{ name: 'Portfolio', url: '/portfolio' },
	{ name: 'Contact', url: '/contact' }
];

const menuBody = document.querySelector('.menu__body');
const ul = document.createElement('ul');
ul.setAttribute("class", "menu__list");

menuBody.appendChild(ul);

for (let i = 0; i < menuData.length; i++) {
	const element = menuData[i];

	let li = document.createElement('li');
	li.setAttribute("class", "menu__item");

	let link = document.createElement('a');
	link.setAttribute("class", "menu__link");
	link.setAttribute("href", element.url);

	link.innerText = element.name;

	li.appendChild(link);
	ul.appendChild(li);
}

document.querySelector('.header').style.cssText = `
	padding: 50px 0px;
	background-color: #bcc328;
`;

//=============== Task 3: filling the table with data from the array ========================================================

const booksArray = [
	{
		title: 'Пригоди Аліси в Країні Див',
		year: 1865,
		rating: 4.5
	},
	{
		title: '1984',
		year: 1949,
		rating: 4.8
	},
	{
		title: 'Гаррі Поттер і філософський камінь',
		year: 1997,
		rating: 4.7
	}
];

let tableContainer = document.querySelector('.table-block__container');

let tableHTML = `
<table>
<caption class="text">Information about books</caption>
<thead>
<tr>
<th>Title</th>
<th>Year</th>
<th>Rating</th>
</tr>
</thead>
<tbody>`

booksArray.forEach(item => {
	tableHTML = tableHTML + `
	<tr>
		<td>${item.title}</td>
		<td>${item.year}</td>
		<td>${item.rating}</td>
	</tr>
		`
});
tableHTML = tableHTML + `</tbody></table>`;

tableContainer.innerHTML = tableHTML;

//=============== Task 4: In the middle of a block of 50 div blocks using js ========================================================
const page = document.querySelector('.page');

function builBlock(newblockClassName, parentElement) {
	let block = document.createElement('div');
	block.setAttribute("class", newblockClassName);
	parentElement.appendChild(block);
}
//=============== set-of-blocks ========================================================

builBlock('page__colored-blocks set-of-blocks', page);
const pageSetOfBlocks = document.querySelector('.set-of-blocks');

pageSetOfBlocks.style.cssText = `
padding: 50px 0px;
background-color: ${generateColor()} ;
`;
//=============== set-of-blocks__container ========================================================
builBlock('set-of-blocks__container', pageSetOfBlocks);
const setOfBlocksContainer = document.querySelector('.set-of-blocks__container');

//=============== set-of-blocks__items ========================================================
builBlock('set-of-blocks__items', setOfBlocksContainer);
const setOfBlocksItems = document.querySelector('.set-of-blocks__items');

setOfBlocksItems.style.cssText = `
display: flex;
flex-wrap: wrap;
gap: 10px;
`;
//=============== create Item and add random color ========================================================

function createItem(number, fn) {
	for (let i = 0; i < number; i++) {
		fn();
	}
	let cards = document.querySelectorAll('.set-of-blocks__item');
	cards = [...cards];

	cards = cards.map(el => {
		el.style.cssText = `
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: ${generateColor()} ;
`;
	})

	// for (let i = 0; i < cards.length; i++) {
	// 	const card = cards[i];
	// 	card.style.cssText = `
	// 		width: 50px;
	// 		height: 50px;
	// 		border-radius: 50%;
	// 		background-color: ${generateColor()} ;
	// `;
	// }
}

createItem(50, () => { builBlock('set-of-blocks__item', setOfBlocksItems) });

//=============== random color function========================================================
function generateColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`
};
//========================================================================================================================================
//========================================================================================================================================
//========================================================================================================================================
//=============== Additional work ========================================================
//=============== Task 1 =================================================================
//Створіть HTML-сторінку з контейнером,
//в який будуть додаватися елементи за допомогою JavaScript елемент створюємо по значенню ключа tag
const elementsArray = [
	{ tag: 'p', text: 'Елемент 1' },
	{ tag: 'div', text: 'Елемент 2' },
	{ tag: 'span', text: 'Елемент 3' }
];

builBlock('page__elements tag-elements', page);
const pageTagElements = document.querySelector('.tag-elements');
pageTagElements.style.cssText = `
padding: 50px 0px;
`;
builBlock('tag-elements__container', pageTagElements);
const tagElementsContainer = document.querySelector('.tag-elements__container');
tagElementsContainer.style.cssText = `
text-align: center;
`;

function buildElements(array, parent) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		let block = document.createElement(element.tag);
		block.innerText = `${element.text} тег: ${element.tag}`;
		parent.appendChild(block);
	}
}

buildElements(elementsArray, tagElementsContainer);

//=============== Task 2 =================================================================
//Створіть блок контейнер в html та перебераючи масив за допомогою js
//створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером

const elementsArr = [
	{ text: 'Елемент 1', usePrepend: true },
	{ text: 'Елемент 2', usePrepend: false },
	{ text: 'Елемент 3', usePrepend: true }
];

builBlock('page__elements-location location-elements', page);
const elemLocation = document.querySelector('.location-elements');
elemLocation.style.cssText = `
padding: 50px 0px;
`;
builBlock('location-elements__container', elemLocation);
const elemLocationContainer = document.querySelector('.location-elements__container');
elemLocationContainer.style.cssText = `
text-align: center;
`;

function getElementsLocation(array, parent) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		let block = document.createElement('p');
		block.innerText = `${element.text} ${element.usePrepend}`;
		element.usePrepend ? parent.appendChild(block) : parent.prepend(block);
	}
	let notLastChild = parent.querySelectorAll('p:not(:last-child)');
	notLastChild = [...notLastChild];
	notLastChild = notLastChild.map(el => el.style.marginBottom = '1rem')
}

getElementsLocation(elementsArr, elemLocationContainer);

//=============== Task 3 =================================================================
//Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement,
//встановлює текст елемента та повертає його в контейнер.
//Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

const textElements = [
	{ text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
	{ text: 'Cupiditate, placeat eligendi labore eveniet temporibus sint qui est?' },
	{ text: 'Ex dignissimos hic expedita aperiam dolorum.' },
	{ text: 'Sunt fugit nobis, ullam at rerum, minima odit ratione, animi aspernatur sint eaque sequi veniam!' }
];

builBlock('page__text text-block', page);
const textBlock = document.querySelector('.text-block');
textBlock.style.cssText = `
padding: 50px 0px;
`;
builBlock('text-block__container', textBlock);
const textBlockContainer = document.querySelector('.text-block__container');

function getTextElements(array) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		textBlockContainer.appendChild(document.createElement('p')).innerText = `${i + 1}.${element.text}`;
	}
}

getTextElements(textElements);
