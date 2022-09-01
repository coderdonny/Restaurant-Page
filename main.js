(()=>{"use strict";function n(){const n=document.createElement("div");return n.innerHTML='\n    <div class="hero">\n\n        <div class="image-container">\n            <img src="./images/oven-fired-pizza.avif" alt="" srcset="">\n            <div class="content">\n                <h1>Welcome to Tony\'s Pizza</h1>\n                <h3>oven-fired goodness</h3>\n                <div class="button-wrapper">\n                    <button>Order Now</button>\n                    <button class="see-menu">See Menu</button>\n                </div>\n            </div>\n        </div>\n        <div class="image-container">\n            <img src="./images/fancy-pizza.jpeg" alt="" srcset="">\n            <div class="hours-of-operation">\n                <h1>Hours of Operation</h1>\n                <table id="tablehours">\n                    <tr>\n                        <td>Sunday</td>\n                        <td>4:00 PM - 8:30 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Monday</td>\n                        <td>11:00 AM - 8:30 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Tuesday</td>\n                        <td>11:00 AM - 8:30 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Wednesday</td>\n                        <td>11:00 AM - 8:30 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Thursday</td>\n                        <td>11:00 AM - 8:30 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Friday</td>\n                        <td>11:00 AM - 9:00 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Saturday</td>\n                        <td>4:00 PM - 8:30 PM</td>\n                    </tr>\n                </table>\n                <p>Please Call <span class="phone-number">(905) 891-8181</span> For Pick Up and Delivery Orders</p>\n            </div>\n        </div>\n\n    </div>\n\n    <div class="weekend-specials">\n        <h1>Weekend Specials</h1>\n        <div class="specials-wrapper">\n            <div class="special-card">\n                <img src="./images/special-1.webp" alt="" srcset="">\n                <h4>2 Medium Pizzas, 4 Toppings, 10 Wings</h4>\n                <h5>$31.95 CAD</h5>\n            </div>\n            <div class="special-card">\n                <img src="./images/special-2.webp" alt="" srcset="">\n                <h4>2 Large Pizzas, 4 Toppings, 20 Wings</h4>\n                <h5>$43.95 CAD</h5>\n            </div>\n            <div class="special-card">\n                <img src="./images/special-3.webp" alt="" srcset="">\n                <h4>2 Extra Large Pizzas, 4 Toppings, 40 Wings</h4>\n                <h5>$64.95 CAD</h5>\n            </div>\n\n        </div>\n        <button class="see-menu">See full Menu</button>\n    </div>\n\n    <div class="location-info">\n        <h1>Our Location</h1>\n\n        <div class="location-wrapper">\n            <div class="location-content">\n                <div class="location-hours">\n                    <h5>Hours of Operation</h5>\n                    <table id="locationhours">\n                        <tr>\n                            <td>Sunday</td>\n                            <td>4:00 PM - 8:30 PM</td>\n                        </tr>\n                        <tr>\n                            <td>Monday</td>\n                            <td>11:00 AM - 8:30 PM</td>\n                        </tr>\n                        <tr>\n                            <td>Tuesday</td>\n                            <td>11:00 AM - 8:30 PM</td>\n                        </tr>\n                        <tr>\n                            <td>Wednesday</td>\n                            <td>11:00 AM - 8:30 PM</td>\n                        </tr>\n                        <tr>\n                            <td>Thursday</td>\n                            <td>11:00 AM - 8:30 PM</td>\n                        </tr>\n                        <tr>\n                            <td>Friday</td>\n                            <td>11:00 AM - 9:00 PM</td>\n                        </tr>\n                        <tr>\n                            <td>Saturday</td>\n                            <td>4:00 PM - 8:30 PM</td>\n                        </tr>\n                    </table>\n                    <p>Please Call <span class="phone-number">(905) 891-8181</span> For Pick Up and Delivery Orders</p>\n                </div>\n            </div>\n            <div class="location-map">\n                <iframe\n                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.625840899856!2d-79.61719788423535!3d43.5309945683418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4513c06c0a99%3A0xac6010465fd19370!2sTony%E2%80%99s%20Panini%20%26%20Pizza!5e0!3m2!1sen!2sca!4v1662063852708!5m2!1sen!2sca"\n                    style="filter: invert(100%)" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"\n                    referrerpolicy="no-referrer-when-downgrade"></iframe>\n            </div>\n        </div>\n\n    ',n}function e(){const n=document.createElement("div");return n.innerHTML="\n    <footer>\n    <p>Copyright © 2022 Daniel Karpierz</p>\n</footer>\n    ",n}let i="home";const t=document.querySelector("#content");function s(){"menu"!==i&&(a(),t.appendChild(function(){const n=document.createElement("div");return n.innerHTML='\n    <div class="menu-page">\n        <h1>Pizza</h1>\n        <div class="pizza-menu">\n\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Prosciutto Arugula.webp" alt="" srcset="">\n                <h4>Classic Prosciutto Arugula</h4>\n                <h5>from $15.00 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Pepperoni.webp" alt="" srcset="">\n                <h4>Classic Pepperoni</h4>\n                <h5>from $11.00 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Margherita.webp" alt="" srcset="">\n                <h4>Classic Margherita</h4>\n                <h5>from $14.00 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Deluxe.webp" alt="" srcset="">\n                <h4>Classic Deluxe</h4>\n                <h5>from $15.00 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Cheese.webp" alt="" srcset="">\n                <h4>Classic Cheese</h4>\n                <h5>from $12.00 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Chicken Pesto.webp" alt="" srcset="">\n                <h4>Classic Chicken Pesto</h4>\n                <h5>from $13.50 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Hawaiian.webp" alt="" srcset="">\n                <h4>Classic Hawaiian</h4>\n                <h5>from $13.00 CAD</h5>\n            </div>\n            <div class="pizza-card">\n                <img src="./images/pizza menu/Vegetarian.webp" alt="" srcset="">\n                <h4>Classic Vegetarian</h4>\n                <h5>from $15.50 CAD</h5>\n            </div>\n        </div>\n        <h1>Protein</h1>\n        <div class="protein-menu">\n            <div class="protein-card">\n                <img src="./images/protein menu/Wings.jpg" alt="" srcset="">\n                <h4>Classic Prosciutto Arugula</h4>\n                <h5>from $15.00 CAD</h5>\n            </div>\n            <div class="protein-card">\n                <img src="./images/protein menu/Large Homemade Meatballs.webp" alt="" srcset="">\n                <h4>Classic Prosciutto Arugula</h4>\n                <h5>from $15.00 CAD</h5>\n            </div>\n            <div class="protein-card">\n                <img src="./images/protein menu/Chicken Parmigiana.webp" alt="" srcset="">\n                <h4>Classic Prosciutto Arugula</h4>\n                <h5>from $15.00 CAD</h5>\n            </div>\n        </div>\n        <h1>Pasta</h1>\n    </div>\n    ',n}()),t.appendChild(e()),i="menu")}function a(){const n=document.querySelector("#content");for(;n.childNodes.length>1;)n.removeChild(n.lastChild)}document.querySelector(".home"),document.querySelector(".menu"),document.querySelector(".about-us"),t.appendChild(function(){const n=document.createElement("div");return n.innerHTML='\n    <header>\n        <nav>\n        <div class="logo">\n        <img src="./images/pizza-toss.svg" alt="" srcset="">\n        <div class="logo-text-wrapper">\n            <h1>TONY\'S</h1>\n            <h1 class="h1-pizza">PIZZA</h1>\n            <h1>ORIGINAL</h1>\n        </div>\n    </div>\n            <ul>\n                <li class="home">Home</li>\n                <li class="menu">Menu</li>\n                <li class="about-us">About Us</li>\n            </ul>\n        </nav>\n    </header>\n    <script src="./main.js"><\/script>\n    ',n}()),t.appendChild(n()),t.appendChild(e()),window.onload=function(){const r=document.querySelector(".home"),d=document.querySelector(".menu");document.querySelector(".see-menu").addEventListener("click",(function(){s()}),!0),r.addEventListener("click",(function(){"home"!==i&&(a(),t.appendChild(n()),t.appendChild(e()),i="home")}),!0),d.addEventListener("click",(function(){s()}),!0)}})();