export default function homePage() {
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
                    <button class="see-menu">See Menu</button>
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
        <button class="see-menu">See full Menu</button>
    </div>

    <div class="location-info">
        <h1>Our Location</h1>

        <div class="location-wrapper">
            <div class="location-content">
                <div class="location-hours">
                    <h5>Hours of Operation</h5>
                    <table id="locationhours">
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
            <div class="location-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.625840899856!2d-79.61719788423535!3d43.5309945683418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4513c06c0a99%3A0xac6010465fd19370!2sTony%E2%80%99s%20Panini%20%26%20Pizza!5e0!3m2!1sen!2sca!4v1662063852708!5m2!1sen!2sca"
                    style="filter: invert(100%)" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    `;

	return home;
}
