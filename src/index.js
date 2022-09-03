import renderNavBar from './nav-bar';
import homePage from './home';
import menuPage from './menu';
import renderFooter from './footer';
// import { cli } from 'webpack';

// let clicked = 'home';

const content = document.querySelector('#content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const aboutUs = document.querySelector('.about-us');

content.appendChild(renderNavBar());
content.appendChild(homePage());
content.appendChild(renderFooter());

window.onload = function () {
	const home = document.querySelector('.home');
	const menu = document.querySelector('.menu');
	const seeMenuBtn = document.querySelector('.see-menu');

	document.addEventListener('click', function (e) {
		if (e.target.classList.contains('see-menu')) {
			seeMenu();
		}
	});

	home.addEventListener(
		'click',
		function () {
			renderHomePage();
		},
		true
	);

	menu.addEventListener(
		'click',
		function () {
			renderMenuPage();
		},
		true
	);
};

function renderHomePage() {
	removeLastChild();
	content.appendChild(homePage());
	content.appendChild(renderFooter());
}

function renderMenuPage() {
	removeLastChild();
	content.appendChild(menuPage());
	content.appendChild(renderFooter());
}

function seeMenu() {
	removeLastChild();
	content.appendChild(menuPage());
	content.appendChild(renderFooter());
}

//removes page before rendering next one
function removeLastChild() {
	const content = document.querySelector('#content');
	while (content.childNodes.length > 1) {
		content.removeChild(content.lastChild);
	}
}
