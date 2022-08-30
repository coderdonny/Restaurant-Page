import renderNavBar from './nav-bar';
import homePage from './home';
import menuPage from './menu';
import renderFooter from './footer';
// import { cli } from 'webpack';

let clicked = 'home';

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

	seeMenuBtn.addEventListener(
		'click',
		function () {
			renderMenuPage;
		},
		true
	);

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
	if (clicked === 'home') {
		return;
	}
	removeLastChild();
	content.appendChild(homePage());
	content.appendChild(renderFooter());
	clicked = 'home';
}

function renderMenuPage() {
	if (clicked === 'menu') {
		return;
	}
	removeLastChild();
	content.appendChild(menuPage());
	content.appendChild(renderFooter());
	clicked = 'menu';
}

//removes page before rendering next one
function removeLastChild() {
	const content = document.querySelector('#content');
	while (content.childNodes.length > 1) {
		content.removeChild(content.lastChild);
	}
}
