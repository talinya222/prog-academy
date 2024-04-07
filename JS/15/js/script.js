//Створіть просту форму з input color налаштуваннями  фону сторінки, і збережіть вибір користувача у localStorage при кліку на кнопку save.
//При наступному відкритті сторінки, або оновлені, застосуйте дос сторінки колір з localStorage.
//====================================================================================================================================

let [...radiobuttonInputs] = document.querySelectorAll('.radiobuttons__input');

radiobuttonInputs.forEach(item => {
	item.addEventListener('change', e => {
		[...e.target.nextElementSibling.children].forEach(span => {
			let bgColor = window.getComputedStyle(span).getPropertyValue('background-color');
			document.body.style.backgroundColor = bgColor;
			window.localStorage.setItem('localBg', bgColor);
		});
	});
	if (item.checked) {
		if (window.localStorage['localBg']) {
			document.body.style.backgroundColor = window.localStorage['localBg'];
		}
	}
});

//Додаткове завдання:
//Реалізуйте простий список завдань (to-do list), де можна додавати і видаляти пункти.
//Зберігайте список у localStorage, щоб після перезавантаження сторінки завдання залишалися доступні.
//====================================================================================================================================
let form = document.querySelector('.todo-list__form');
let inputEl = document.querySelector('#todo-input');
let listGroup = document.querySelector('.todo-list__list-group');
// window.localStorage.toDoItems = '';

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
};
//Form ===============================================================================================================
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
		//localStorage================================================================================================================
		//============================================================================================================================
		toLocalStorage();
		//============================================================================================================================
		//============================================================================================================================

		removeItem();
	}
});

//localStorage================================================================================================================
//============================================================================================================================
if (window.localStorage['toDoItems']) {
	const dataFromLocalStorage = JSON.parse(window.localStorage['toDoItems']);
	for (const obj of dataFromLocalStorage) {
		listGroup.appendChild(createListItemFromStorage(obj));
	}
	removeItem();
}
//createListItemFromStorage ====================================================================================================
function createListItemFromStorage(data) {
	let item = document.createElement('li');
	item.classList.add('list-group-item');
	item.innerHTML = `
	<div class="list-group-user-text">${data.text}</div>
	<div class="list-group-create-date">${data.date}</div>
	<button class="list-group-delete-btn btn">Delete</button>
	`;
	return item;
};
//toLocalStorage ===============================================================================================================
function toLocalStorage() {
	if (listGroup.children.length !== 0) {
		let listItems = [...listGroup.children].map(li => {
			let obj = {
				text: li.querySelector('.list-group-user-text').innerText,
				date: li.querySelector('.list-group-create-date').innerText
			}
			return obj;
		});
		window.localStorage.toDoItems = JSON.stringify(listItems);
	} else {
		window.localStorage.toDoItems = '';
	}
}
//remove and rewrite==========================================================================================================
function removeItem() {
	let deleteBtns = document.querySelectorAll('.list-group-delete-btn');
	[...deleteBtns].forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			e.target.parentElement.remove();
			toLocalStorage();
		});
	});
};
//============================================================================================================================
//============================================================================================================================

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
//============================================================================================================================
//============================================================================================================================
//Зробити сторінку з кнопкою, при натиску на кнопку робиться запит (fetch) до http swapi.dev/api/planets/1/
//виводиться картка (html розмітка довільна) з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href
let pageNumber = 1;
let currentPage = `https://swapi.dev/api/planets/?page=${pageNumber}`;
// let url = 'https://swapi.dev/api/planets/?page=1';
function showContent(page) {
	fetch(page).then(response => response.json()).then(result => {
		let planets = result.results;
		let planetsCount = result.count;

		for (let i = 0; i < planets.length; i++) {

			const planetDataObj = planets[i];
			const planetName = planetDataObj.name;
			const planetRotationPeriod = planetDataObj.rotation_period;
			const planetOrbitalPeriod = planetDataObj.orbital_period;
			const planetDiameter = planetDataObj.diameter;
			const planetClimate = planetDataObj.climate;
			const planetGravity = planetDataObj.gravity;
			const planetTerrain = planetDataObj.terrain;
			const planetSurfaceWater = planetDataObj.surface_water;
			const planetPopulation = planetDataObj.population;
			const planetResidents = planetDataObj.residents;
			const planetFilms = planetDataObj.films;
			const planetCreated = planetDataObj.created;
			const planetEdited = planetDataObj.edited;
			const planetUrl = planetDataObj.url;

			//==========================================================================================================================================
			let residentsHTML = `<div class="item-content__residents">Residents:`
			if (planetResidents.length > 0) {
				planetResidents.forEach(link => {
					residentsHTML = residentsHTML + ` <a href="${link}" class="item-content__resident-link">resident</a>`
				});
			} else {
				residentsHTML = residentsHTML + ` No info`
			}
			residentsHTML = residentsHTML + `</div>`;

			//==========================================================================================================================================

			let filmsHTML = `<div class="item-content__films">Films:`
			if (planetFilms.length > 0) {
				planetFilms.forEach(link => {
					filmsHTML = filmsHTML + ` <a href="${link}" class="item-content__film-link">film</a>`
				});
			} else {
				filmsHTML = filmsHTML + ` No film`
			}
			filmsHTML = filmsHTML + `</div>`;
			//==========================================================================================================================================

			let card = `
		<div class="cards-list__wrap">
			<div class="cards-list__item item-content">
				<div class="item-content__title">${planetName}</div>
				<div class="item-content__body">
					<div class="item-content__info">
						<div class="item-content__rotation-period">Rotation period: ${planetRotationPeriod}</div>
						<div class="item-content__orbital-period">Orbital period: ${planetOrbitalPeriod}</div>
						<div class="item-content__diameter">Diameter: ${planetDiameter}</div>
						<div class="item-content__climate">Climate: ${planetClimate}</div>
						<div class="item-content__gravity">Gravity: ${planetGravity}</div>
						<div class="item-content__terrain">Terrain: ${planetTerrain}</div>
						<div class="item-content__surface-water">Surface water: ${planetSurfaceWater}</div>
						<div class="item-content__population">Population: ${planetPopulation}</div>
					</div>
					<div class="item-content__links">
						${residentsHTML}
						${filmsHTML}
					</div>
					<div class="item-content__footer">
						<div class="item-content__created">Created: ${planetCreated}</div>
						<div class="item-content__edited">Edited: ${planetEdited}</div>
						<a href="#" class="item-content__item-link">Url: ${planetUrl}</a>
					</div>
				</div>
			</div>
		</div>
	`;
			document.querySelector('.cards-list__items').insertAdjacentHTML('beforeend', card);
		}
		//===========================================================================================================================================
		let [...residentsLinks] = document.querySelectorAll('.item-content__resident-link');
		let [...filmsLinks] = document.querySelectorAll('.item-content__film-link');

		residentsLinks.forEach(link => {
			fetch(link.href).then(response => response.json()).then(result => {
				link.innerText = result.name;
			})
				.catch(function (err) {
					log(err.message);
				});
		});
		filmsLinks.forEach(link => {
			fetch(link.href).then(response => response.json()).then(result => {
				link.innerText = result.title;
			})
				.catch(function (err) {
					log(err.message);
				});
		});
		//===========================================================================================================================================
		let lastCard = document.querySelector('.cards-list__wrap:last-child');
		let body = document.querySelector('body');
		let pages = planetsCount / document.querySelectorAll('.cards-list__wrap').length;
		let busy;

		function loader() {
			if (busy) return;
			busy = true;
			body.classList.add("load");
			window.setTimeout(onSuccess, 1000);
		}

		function onSuccess() {
			body.classList.remove("load");

			if (pageNumber <= pages) {
				let nextPageLink = `https://swapi.dev/api/planets/?page=${++pageNumber}`;
				showContent(nextPageLink);
			}

			lastCard = document.querySelector('.cards-list__wrap:last-child');
			busy = false;
		}

		function checkLoading() {
			var bottomCoord = lastCard.getBoundingClientRect().bottom;
			var height = document.documentElement.clientHeight;
			if (height >= bottomCoord) {
				loader();
			}
		}

		window.addEventListener('scroll', function () {
			checkLoading();
		});
	});
}
showContent(currentPage);
//===========================================================================================================================================
