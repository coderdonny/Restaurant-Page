import renderNavBar from './nav-bar';
import homePage from './home';

console.log('test');

const content = document.querySelector('#content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const aboutUs = document.querySelector('.about-us');

content.appendChild(renderNavBar());

window.onload = function () {
	const home = document.querySelector('.home');
	home.addEventListener(
		'click',
		function () {
			content.appendChild(homePage());
		},
		true
	);
};
