import {ShoppingBag} from './modules/display.js';



(function () {
    const bagOne = new ShoppingBag(0)
    bagOne.addProduct(5, 100);
    bagOne.deleteProduct(1, 250);
    bagOne.totalCost();
    

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
                    
                    input.type = `number`;
                    input.name = `amount`;
                    input.min = 1;
                    input.max = 15;

                    section.appendChild(newDiv);
                    newDiv.appendChild(h1);
                    newDiv.appendChild(h2);
                    newDiv.appendChild(img);
                    newDiv.appendChild(p2);
                    newDiv.appendChild(input);
                    newDiv.appendChild(btn1);
                }
            }
        )
    }

    const shopping = document.querySelector('.shoppingbag')
    shopping.addEventListener('click', function(){
        console.log(bagOne.totalCost());
        for(let i=0; i<bagOne.totalAmount; i++){
            const products = document.createElement('p');
            shopping.appendChild(products)
            products.innerText=`Produkt ${[i]}`;
        }
        const summa = document.createElement('p');
        shopping.appendChild(summa)
        summa.innerText=`Summa: ${bagOne.totalCost()}`;
        const buyNow = document.createElement('button');
        shopping.appendChild(buyNow);
        buyNow.innerText=`Buy`;

        buyNow.addEventListener('click', ()=>{
            bagOne.buy();
            summa.innerText=`Tack för ditt köp`;
            buyNow.style.display='none';
        })
    })
    
})();
