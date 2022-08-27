export default function homePage() {
	console.log('homepage module test');

	const h1 = document.createElement('h1');

	h1.textContent = 'Hello, this is a test from the homepage';

	return h1;
}
