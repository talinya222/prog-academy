const sendBtn = document.querySelector('.registration__button');
const form = [
	{
		input: document.getElementById('userName'),
		regExp: /^([a-z]{2}[a-z0-9-_]{1,13}|[а-яїієґ]{2}[а-яїієґ0-9-_]{1,13})$/i,
		validCondition: "Ім'я користувача має містити:\nвід 3 до 15 символів\nдопустимі числа та\nзнаки: тире - '-', нижнє підкреслення - '_'",
	},
	{
		input: document.getElementById('userPass'),
		regExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,20}$/,
		validCondition: "Пароль має бути латинськими літерами і містити:\nпринаймні одну велику літеру\nодну маленьку літеру\nодну цифру\nодин спеціальний символ (!@#$%^&*)\nі мати довжину від 8 до 20 символів.",
	},
	{
		input: document.getElementById('userPassMatch'),
		regExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,20}$/,
	},
	{
		input: document.getElementById('userMail'),
		regExp: /^[a-z0-9_.+-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.\w+$/i,
	},
	{
		input: document.getElementById('usertel'),
		regExp: /^([+]?[0-9\s\-\(\)]{10,20})*$/,
	},
];


window.addEventListener('load', () => {
	document.querySelector('form').reset();
});

for (const obj of form) {
	//required =====================================================================================================================
	if (obj.input.required) {
		obj.validCondition ? obj.input.title = obj.validCondition : obj.input.title = 'Будь ласка заповніть це поле';
	}

	//oninput =====================================================================================================================
	obj.input.oninput = (e) => {
		const value = e.target.value;

		if (value.length >= 0) {
			e.target.nextElementSibling.style.opacity = '0';
		}
		obj.regExp.test(value) ? e.target.parentElement.classList.add('_valid') : e.target.parentElement.classList.remove('_valid');

		if (e.target.closest('#userPassMatch')) {
			if (obj.regExp.test(value) && document.getElementById('userPass').value === value) {
				e.target.parentElement.classList.add('_valid');
			} else {
				e.target.parentElement.classList.remove('_valid');
			}
		}
	}

	//onblur =====================================================================================================================
	obj.input.onblur = (e) => {
		const value = e.target.value;
		value.length == 0 ? e.target.nextElementSibling.style.opacity = '1' : e.target.nextElementSibling.style.opacity = '0';

		if (!obj.regExp.test(value)) {
			e.target.style.borderColor = "#ff0000";
		} else {
			e.target.style.borderColor = "#fff";
		}
		if (e.target.closest('#userPassMatch')) {
			if (!obj.regExp.test(value) || document.getElementById('userPass').value !== value) {
				e.target.style.borderColor = "#ff0000";
			} else {
				e.target.style.borderColor = "#fff";
			}
		}

		//sendBtn activation =====================================================================================================================
		if (e.target.required) {
			const [...requiredInputs] = document.querySelectorAll('input[required]');
			let checkedRequiredInputs = requiredInputs.map(input => checkValid(input));
			let everyValue = checkedRequiredInputs.every(el => el === true);

			sendBtn.disabled = everyValue ? false : "disabled";
		}

	}

	//onfocus =====================================================================================================================
	obj.input.onfocus = (e) => {
		e.target.nextElementSibling.style.opacity = '0';
	}
}

//showPassword =====================================================================================================================
let [...eyeIcons] = document.querySelectorAll('.registration__img');
for (const icon of eyeIcons) {
	icon.addEventListener("click", showPassword);
};

function showPassword(e) {
	let input = e.target.parentElement.querySelector('input');

	if (input.length !== 0 && input.type == "password") {
		input.type = "text";
		e.target.setAttribute('src', "img/free-icon-open-eye-829117.png");
		e.target.setAttribute('alt', "icon-eye");
	} else {
		input.type = "password";
		e.target.setAttribute('src', "img/free-icon-eye-6107590.png");
		e.target.setAttribute('alt', "hidden-icon-eye");
	}
};

//Validation =====================================================================================================================
function checkValid(el) {
	return el.parentElement.classList.contains('_valid');
}

//Sending data =====================================================================================================================
sendBtn.addEventListener('click', e => {
	e.preventDefault();
	if (sendBtn.disabled === false) {
		showPopup();
		removePopup();
	};
});

function showPopup() {
	document.documentElement.classList.add("lock");
	if (document.documentElement.classList.contains('lock')) {
		document.body.classList.add("popup-show");
		let popup = `
		<div class="popup">
			<div class="popup__wrapper">
				<div class="popup__content popup__content_loader"></div>
			</div>
		</div>
		`;
		document.body.insertAdjacentHTML('beforeend', popup);
		setTimeout(function () {
			if (document.querySelector('.popup')) {
				const popupContent = document.querySelector('.popup__content');
				if (popupContent.classList.contains('popup__content_loader')) {
					popupContent.classList.remove('popup__content_loader');
					popupContent.innerText = 'Send';
					popupContent.parentElement.style.cssText = `
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
				`;
					popupContent.style.cssText = `
					font-size: 2rem;
					font-weight: 600;
					color: #000;
				`;
				}
			}
		}, 5000);
	}
};
function removePopup() {
	setTimeout(function () {
		if (document.querySelector('.popup')) {
			document.body.removeChild(document.querySelector('.popup'));
			document.body.classList.remove("popup-show");
		}
		if (document.documentElement.classList.contains('lock')) {
			document.documentElement.classList.remove('lock');
		}
		document.querySelector('form').submit();
	}, 6000);
};