import { ShoppingBag } from './modules/display.js';

const bagOne = new ShoppingBag(0)
bagOne.addProduct(5, 100);
bagOne.deleteProduct(1, 250);
bagOne.totalCost();
bagOne.buy();

(function () {

    getProducts();

    //Funktion för att hämta produkterna från databasen och skriv ut dom i DOM:en
    function getProducts() {
        const url = `https://online-shop-2ccc8-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

        const productPromise = fetch(url);
        console.log(url);

        const jsonPromise = productPromise.then(
            function (promiseValue) {
                return promiseValue.json();
            }
        );

        jsonPromise.then(
            function (promiseValue) {
                console.log(`Variabler`, promiseValue);
                for (let i = 1; i < promiseValue.length; i++) {

                    const section = document.querySelectorAll(`section`)[0];
                    const form = document.createElement(`form`);
                    const btn1 = document.createElement(`button`);
                    const input = document.createElement(`input`);

                    const newDiv = document.createElement(`div`);
                    const h1 = document.createElement(`h1`);
                    const img = document.createElement(`img`);
                    const h2 = document.createElement(`h2`);
                    const p2 = document.createElement(`p`);

                    h1.innerText = promiseValue[i].name;
                    h2.innerText = promiseValue[i].price + `:-`;
                    img.src = `img/` + promiseValue[i].image;
                    p2.innerText = `In stock: ` + promiseValue[i].stock;

                    btn1.innerText = `Add to cart`;
                    btn1.id = `button` + i;
                    btn1.type = `submit`;

                    input.type = `number`;
                    input.name = `amount`;
                    input.min = 1;
                    input.max = 15;

                    section.appendChild(newDiv);
                    newDiv.appendChild(h1);
                    newDiv.appendChild(h2);
                    newDiv.appendChild(img);
                    newDiv.appendChild(p2);
                    newDiv.appendChild(form);
                    form.appendChild(input);
                    form.appendChild(btn1);
                }
            }
        )
    }

    //Måste för tillfället ha en timer för att knapparna ska laddas in innan de kan hämntas från DOM:en funkar endast på första knappen just nu. Resterande knappar hämtar amount från samma input :'( WILL FIX LATER
    setTimeout(function (){ 
        document.getElementById(`button1`).addEventListener("click", getAmount);
        document.getElementById(`button2`).addEventListener("click", getAmount);
        document.getElementById(`button3`).addEventListener("click", getAmount);
        document.getElementById(`button4`).addEventListener("click", getAmount);
        document.getElementById(`button5`).addEventListener("click", getAmount);

        function getAmount(event) {
            const input = document.querySelector(`input`); 
            event.preventDefault();
            console.log(input.value);
        }

    },100);

})();
