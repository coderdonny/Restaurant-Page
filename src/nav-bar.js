export default function renderNavBar() {
	const navbar = document.createElement('div');
	navbar.innerHTML = `
    <header>
        <nav>
            <ul>
                <li class="home">Home</li>
                <li class="menu">Menu</li>
                <li class="about-us">About Us</li>
            </ul>
        </nav>
    </header>
    <script src="./main.js"></script>
    `;

	return navbar;
}
