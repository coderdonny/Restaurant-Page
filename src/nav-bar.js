export default function renderNavBar() {
	const navbar = document.createElement('div');
	navbar.innerHTML = `
    <header>
        <nav>
        <div class="logo">
        <img src="./images/pizza-toss.svg" alt="" srcset="">
        <div class="logo-text-wrapper">
            <h1>TONY'S</h1>
            <h1 class="h1-pizza">PIZZA</h1>
            <h1>ORIGINAL</h1>
        </div>
    </div>
            <ul>
                <li class="home">Home</li>
                <li class="menu">Menu</li>
                // <li class="about-us">About Us</li>
            </ul>
        </nav>
    </header>
    <script src="./main.js"></script>
    `;

	return navbar;
}
