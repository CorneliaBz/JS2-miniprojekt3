import { ShoppingBag, Product} from './modules/display.js';

(function () {
    const bagOne = new ShoppingBag(0);

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

                for (let i = 1; i < promiseValue.length; i++) {

                    const section = document.querySelectorAll('section')[0];
                    const form = document.createElement('form');
                    const btn1 = document.createElement('button');
                    const input = document.createElement('input');

                    const newDiv = document.createElement('div');
                    const h1 = document.createElement('h1');
                    const img = document.createElement('img');
                    const h2 = document.createElement('h2');
                    const p2 = document.createElement('p');

                    console.log(promiseValue[i])
                    h2.classList.add("price");

                    h1.innerText = promiseValue[i].name;
                    h2.innerText = promiseValue[i].price + ':-';
                    img.src = 'img/' + promiseValue[i].image;
                    p2.innerText = 'In stock: ' + promiseValue[i].stock;

                    btn1.innerText = 'Add to cart';
                    btn1.id = 'button' + i;
                    btn1.type = 'submit';

                    input.type = 'number';
                    input.name = 'amount';
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

    //Måste för tillfället ha en timer för att knapparna ska hinna laddas in innan de kan hämtas från DOM:en - Finns säkert ett bättre/finare sätt att skriva denna funktionen på....
    setTimeout(function getAmount(){ 
        document.getElementById('button1').addEventListener("click", getAmount1);
        document.getElementById('button2').addEventListener("click", getAmount2);
        document.getElementById('button3').addEventListener("click", getAmount3);
        document.getElementById('button4').addEventListener("click", getAmount4);
        document.getElementById('button5').addEventListener("click", getAmount5);

        function getAmount1(event) {
            event.preventDefault();
            const input1 = document.querySelectorAll('input')[0];
            const price1 = document.getElementsByClassName('price')[0];
            
            const amount = parseInt(input1.value);
            const price = parseInt(price1.innerText);
            const productName = document.querySelectorAll('h1')[0].innerText;
            const product = new Product(productName, price, 5)
            console.log(amount, product.amount, 'amount')
            for(let i = 0; i<amount; i++){
                bagOne.addProduct(product);
            }
        }

        function getAmount2(event) {
            event.preventDefault();
            const input2 = document.querySelectorAll('input')[1];
            const price2 = document.getElementsByClassName('price')[1];
            
            const amount = parseInt(input2.value);
            const price = parseInt(price2.innerText);

            const productName = document.querySelectorAll('h1')[1].innerText;
            const product = new Product(productName, price, 5)
            console.log(amount, product.amount, 'amount')
            for(let i = 0; i<amount; i++){
                bagOne.addProduct(product);
            }
        }

        function getAmount3(event) {
            event.preventDefault();
            const input3 = document.querySelectorAll('input')[2];
            const price3 = document.getElementsByClassName('price')[2];
        
            const amount = parseInt(input3.value);
            const price = parseInt(price3.innerText);

            const productName = document.querySelectorAll('h1')[2].innerText;
            const product = new Product(productName, price, 5)
            console.log(amount, product.amount, 'amount')
            for(let i = 0; i<amount; i++){
                bagOne.addProduct(product);
            }
        }

        function getAmount4(event) {
            event.preventDefault();
            const input4 = document.querySelectorAll('input')[3];
            const price4 = document.getElementsByClassName('price')[3];
            
            const amount = parseInt(input4.value);
            const price = parseInt(price4.innerText);

            const productName = document.querySelectorAll('h1')[3].innerText;
            const product = new Product(productName, price, 5)
            console.log(amount, product.amount, 'amount')
            for(let i = 0; i<amount; i++){
                bagOne.addProduct(product);
            }
        }

        function getAmount5(event) {
            event.preventDefault();
            const input5 = document.querySelectorAll('input')[4];
            const price5 = document.getElementsByClassName('price')[4];
            
            const amount = parseInt(input5.value);
            const price = parseInt(price5.innerText);

            const productName = document.querySelectorAll('h1')[4].innerText;
            const product = new Product(productName, price, 5)
            console.log(amount, product.amount, 'amount')
            for(let i = 0; i<amount; i++){
                bagOne.addProduct(product);
            }
        }

    },1000);

    const shopping = document.querySelector('.shoppingbag')
    shopping.addEventListener('click', ()=>{
        console.log(bagOne.totalCost());
            for(let i=0; i<bagOne.produktList.length; i++){
                const products = document.createElement('p');
                shopping.appendChild(products);
                console.log(bagOne.produktList)
                products.innerText= bagOne.produktList[i].name;

                const remove = document.createElement('button');
                products.appendChild(remove);
                remove.innerText = '-'

                remove.addEventListener('click', ()=>{
                bagOne.deleteProduct(bagOne.produktList[i], i);
            })
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
