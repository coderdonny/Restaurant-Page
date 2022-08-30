export default function homePage() {
	console.log('homepage module test');

	const home = document.createElement('div');

	home.innerHTML = `
    <div class="hero">

        <div class="image-container">
            <img src="./images/oven-fired-pizza.avif" alt="" srcset="">
            <div class="content">
                <h1>Welcome to Tony's Pizza</h1>
                <h3>oven-fired goodness</h3>
                <div class="button-wrapper">
                    <button>Order Now</button>
                    <button>See Menu</button>
                </div>
            </div>
        </div>
        <div class="image-container">
            <img src="./images/fancy-pizza.jpeg" alt="" srcset="">
            <div class="hours-of-operation">
                <h1>Hours of Operation</h1>
                <table id="tablehours">
                    <tr>
                        <td>Sunday</td>
                        <td>4:00 PM - 8:30 PM</td>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>11:00 AM - 8:30 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>11:00 AM - 8:30 PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>11:00 AM - 8:30 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>11:00 AM - 8:30 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>11:00 AM - 9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>4:00 PM - 8:30 PM</td>
                    </tr>
                </table>
                <p>Please Call <span class="phone-number">(905) 891-8181</span> For Pick Up and Delivery Orders</p>
            </div>
        </div>

    </div>

    <div class="weekend-specials">
        <h1>Weekend Specials</h1>
        <div class="specials-wrapper">
            <div class="special-card">
                <img src="./images/special-1.webp" alt="" srcset="">
                <h4>2 Medium Pizzas, 4 Toppings, 10 Wings</h4>
                <h5>$31.95 CAD</h5>
            </div>
            <div class="special-card">
                <img src="./images/special-2.webp" alt="" srcset="">
                <h4>2 Large Pizzas, 4 Toppings, 20 Wings</h4>
                <h5>$43.95 CAD</h5>
            </div>
            <div class="special-card">
                <img src="./images/special-3.webp" alt="" srcset="">
                <h4>2 Extra Large Pizzas, 4 Toppings, 40 Wings</h4>
                <h5>$64.95 CAD</h5>
            </div>

        </div>
        <button>See full Menu</button>
    </div>

    <footer>
        <p>Copyright © 2022 Daniel Karpierz</p>
    </footer>

    `;

	return home;
}
