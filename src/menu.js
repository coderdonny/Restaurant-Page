export default function menuPage() {
	const menu = document.createElement('div');

	menu.innerHTML = `
    <div class="menu-page">
    <h1>Pizza</h1>
    <div class="pizza-menu">

        <div class="pizza-card">
            <img src="./images/pizza menu/Prosciutto Arugula.webp" alt="" srcset="">
            <h4>Classic Prosciutto Arugula</h4>
            <h5>from $15.00 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Pepperoni.webp" alt="" srcset="">
            <h4>Classic Pepperoni</h4>
            <h5>from $11.00 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Margherita.webp" alt="" srcset="">
            <h4>Classic Margherita</h4>
            <h5>from $14.00 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Deluxe.webp" alt="" srcset="">
            <h4>Classic Deluxe</h4>
            <h5>from $15.00 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Cheese.webp" alt="" srcset="">
            <h4>Classic Cheese</h4>
            <h5>from $12.00 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Chicken Pesto.webp" alt="" srcset="">
            <h4>Classic Chicken Pesto</h4>
            <h5>from $13.50 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Hawaiian.webp" alt="" srcset="">
            <h4>Classic Hawaiian</h4>
            <h5>from $13.00 CAD</h5>
        </div>
        <div class="pizza-card">
            <img src="./images/pizza menu/Vegetarian.webp" alt="" srcset="">
            <h4>Classic Vegetarian</h4>
            <h5>from $15.50 CAD</h5>
        </div>
    </div>
    <h1>Protein</h1>
    <div class="protein-menu">
        <div class="protein-card">
            <img src="./images/protein menu/Wings.jpg" alt="" srcset="">
            <h4>Wings</h4>
            <h5>$9.99 CAD</h5>
        </div>
        <div class="protein-card">
            <img src="./images/protein menu/Large Homemade Meatballs.webp" alt="" srcset="">
            <h4>Large Homemade Meatballs</h4>
            <h5>$11.49 CAD</h5>
        </div>
        <div class="protein-card">
            <img src="./images/protein menu/Chicken Parmigiana.webp" alt="" srcset="">
            <h4>Chicken Parmigiana</h4>
            <h5>$7.99 CAD</h5>
        </div>
    </div>
    <h1>Pasta</h1>
    <div class="pasta-menu">
        <div class="pasta-card">
            <img src="./images/pasta menu/fettuccine-alfredo(cropped).webp" alt="" srcset="">
            <h4>Classic Prosciutto Arugula</h4>
            <h5>$9.99 CAD</h5>
        </div>
        <div class="pasta-card">
            <img src="./images/pasta menu/Cajun-Penne.jpeg" alt="" srcset="">
            <h4>Classic Prosciutto Arugula</h4>
            <h5>from $15.00 CAD</h5>
        </div>
    </div>
    <h1>Sandwich Menu</h1>
    <div class="sandwich-menu">
        <div class="pasta-card">
            <img src="./images/sandwich menu/ Meatball-Sandwich.webp" alt="" srcset="">
            <h4>Classic Prosciutto Arugula</h4>
            <h5>$9.99 CAD</h5>
        </div>
        <div class="pasta-card">
            <img src="./images/sandwich menu/Chicken-Parmigiana-Sandwich.webp" alt="" srcset="">
            <h4>Classic Prosciutto Arugula</h4>
            <h5>$9.99 CAD</h5>
        </div>
    </div>
</div>
    `;

	return menu;
}
