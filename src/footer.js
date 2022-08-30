export default function renderFooter() {
	const footer = document.createElement('div');
	footer.innerHTML = `
    <footer>
    <p>Copyright © 2022 Daniel Karpierz</p>
</footer>
    `;

	return footer;
}
