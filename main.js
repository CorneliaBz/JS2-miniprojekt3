import { ShoppingBag, BagItem, deleteItems, StoreItem } from './modules/display.js';

(function () {
    const shoppingBag = new ShoppingBag(0);

    let storeProducts = [];

    getProducts()

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
                while(storeProducts.length < 1){
                    for (let i = 1; i < promiseValue.length; i++) {
                        const item = new StoreItem(
                            promiseValue[i].name,
                            promiseValue[i].price,
                            promiseValue[i].stock,
                            promiseValue[i].imageLink
                        )
                        console.log(item);
                        storeProducts.push(item);
                        console.log(storeProducts);
                    }
                }
                renderProductCards();
            }
        )
    }

    
    function renderProductCards() {
            console.log('storeProducts length: ', storeProducts.length)
            for(let i = 0; i < storeProducts.length; i++){
                let item = storeProducts[i];
                const section = document.querySelectorAll('section')[0];
                const addToCartButton = document.createElement('button');
                const input = document.createElement('input');

                const newDiv = document.createElement('div');
                const h1 = document.createElement('h1');
                const img = document.createElement('img');
                const h2 = document.createElement('h2');
                const p2 = document.createElement('p');
                newDiv.classList.add('product-card')
                h2.classList.add("price");
                p2.classList.add("stock");
                h1.innerText = item.name;
                h2.innerText = item.price + ':-';
                img.src = 'img/' + item.image;
                p2.innerText = item.stock + ` items in stock`;

                addToCartButton.innerText = 'Add to cart';
                addToCartButton.id = 'add-to-cart-button';
                addToCartButton.type = 'submit';

                input.type = 'number';
                input.name = 'amount';
                input.min = 1;
                input.max = 15;

                section.appendChild(newDiv);
                newDiv.appendChild(h1);
                newDiv.appendChild(h2);
                newDiv.appendChild(img);
                newDiv.appendChild(p2);
                newDiv.appendChild(input);
                newDiv.appendChild(addToCartButton);
            }
    }

    document.addEventListener('click', event => addItemsToShoppingBag(event))

    function addItemsToShoppingBag(event) {
        console.log('kallade på eventet för fan!')
        if(event.target.id.includes('add-to-cart-button')){
            resetShoppingBagElements();
            let numberOfSelectedItems = document.querySelector('input');
            console.log(numberOfSelectedItems.value)
            let productCard = event.target.parentElement.parentElement;
            for(let i = 0; i < numberOfSelectedItems.value; i++){
                let chosenItem = new BagItem(
                    productCard.querySelector('h1').innerText,
                    productCard.querySelector('h2').innerText,
                )
                shoppingBag.addProduct(chosenItem);

                for(let product in storeProducts){
                    if(chosenItem.name === product.name){
                        product.stock = product.stock - 1;
                        productCard.querySelector('h2').innerText = product.stock;
                    }
                }
            }
            renderShoppingBag();
            numberOfSelectedItems.value = 0;
            storeProducts[0].stock = 1;
            resetProductCards();
        }
    }

    function resetProductCards() {
        const productCard = document.querySelectorAll('.product-cards');
        for(let i = 0; i < productCard.length; i++){
            productCard[i].remove();
        }
        renderProductCards();
    }

    function renderShoppingBag() {
        if(!shoppingBag.produktList.length === 0){
            console.log('isNotZero');
            resetShoppingBagElements();
        }
        const shopping = document.querySelector('.shoppingbag')
        for(let i=0; i<shoppingBag.produktList.length; i++){
            const products = document.createElement('p');
            const removeButton = document.createElement('button');
            shopping.appendChild(products);
            shopping.appendChild(removeButton)
            products.innerText= shoppingBag.produktList[i].name;
            products.appendChild(removeButton);
            removeButton.classList.add(`remove-item-from-shoppingbag-${i}`)
            removeButton.innerText = 'remove';
        }
    }

    function resetShoppingBagElements() {
        const shopping = document.querySelector('.shoppingbag');
        const allShopP = shopping.querySelectorAll('p');
        const allShopbutton = shopping.querySelectorAll('button');
        for(let i = 0; i<shoppingBag.produktList.length; i++){
            allShopP[0].remove();
            allShopbutton[0].remove();
        }
    }

    // REMOVE ITEM FROM SHOPPING BAG
    document.addEventListener('click', function(event){
        event.preventDefault();
        if(event.target.className.includes('remove-item-from-shoppingbag')){
            let productCard = event.target.parentElement;
            let chosenItem = productCard.querySelector('h1').innerText;
            console.log(productCard);
            console.log(chosenItem);
            console.log(shoppingBag.produktList[0].name)
            console.log('className: ', event.target.className);
        
            console.log('testar1')
            for(let i = 0; i < shoppingBag.produktList.length; i++){
                console.log('testar2', i)
                if(shoppingBag.produktList[i].name === chosenItem){
                    shoppingBag.produktList.splice(i, 1);
                    console.log('new product list: ', shoppingBag.produktList)
                }
            }
        }
    })
})();               
  
//Måste för tillfället ha en timer för att knapparna ska hinna laddas in innan de kan hämtas från DOM:en - Finns säkert ett bättre/finare sätt att skriva denna funktionen på....
//     setTimeout(function getAmount() {
//         // document.getElementById('addToCartButton0').addEventListener("click", getAmount1);
//         // document.getElementById('button1').addEventListener("click", getAmount2);
//         // document.getElementById('button2').addEventListener("click", getAmount3);
//         // document.getElementById('button3').addEventListener("click", getAmount4);
//         // document.getElementById('button4').addEventListener("click", getAmount5);

//         function getAmount1(event) {
//             event.preventDefault();
            
//             const input1 = document.querySelectorAll('input')[0];
//             const price1 = document.getElementsByClassName('price')[0];
//             const stock1 = document.getElementsByClassName('stock')[0];
//             const amount = parseInt(input1.value);
//             let item = new BagItem(
//                 storeProducts[0].name,
//                 storeProducts[0].price
//             )

//             // item.removeStock(amount);
//             // stocked.innerText = product.stock

//             // deleteItems();
//             if (amount > storeProducts[0].stock) {
//                 stock1.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
//                 stock1.style.color = `red`;
//             } else {
//                 for (let i = 0; i < amount; i++) {
//                     shoppingBag.addProduct(item);
//                 }
//                 storeProducts[0].stock = (storeProducts[0].stock) - amount;
//                 stock1.innerText = `${storeProducts[0].stock} items in stock`
//             } 

            
             
//         };

        

        

//         function getAmount2(event) {
//             event.preventDefault();
//             const input2 = document.querySelectorAll('input')[1];
//             const price2 = document.getElementsByClassName('price')[1];
//             const stock2 = document.getElementsByClassName('stock')[1];

//             const amount = parseInt(input2.value);
//             const price = parseInt(price2.innerText);
//             const stock = parseInt(stock2.innerText);

//             const productName = document.querySelectorAll('h1')[1].innerText;

            
//             console.log(amount, product.amount, 'amount')
//                 deleteItems();            
//             if (amount > stock) {
//                 stock2.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
//                 stock2.style.color = `red`;
//             } else {
//                 for (let i = 0; i < amount; i++) {
//                     let sum = stock-amount;
//                     stock2.innerText = `${sum} items in stock`
//                     shoppingBag.addProduct(product);
//                 }
//             }
//             for(let i=0; i<shoppingBag.produktList.length; i++){
//                 const products = document.createElement('p');
//                 shopping.appendChild(products);
//                 console.log(shoppingBag.produktList)
//                 products.innerText= shoppingBag.produktList[i].name;

//                 const remove = document.createElement('button');
//                 products.appendChild(remove);
//                 remove.innerText = '-'

//                 remove.addEventListener('click', ()=>{
//                 shoppingBag.deleteProduct(shoppingBag.produktList[i], i);
//             })
//         }
//         }

//         function getAmount3(event) {
//             event.preventDefault();
//             const input3 = document.querySelectorAll('input')[2];
//             const price3 = document.getElementsByClassName('price')[2];
//             const stock3 = document.getElementsByClassName('stock')[2];

//             const amount = parseInt(input3.value);
//             const price = parseInt(price3.innerText);
//             const stock = parseInt(stock3.innerText);

//             const productName = document.querySelectorAll('h1')[2].innerText;
//             const product = new Product(productName, price, stock)
//             console.log(amount, product.amount, 'amount')
//             deleteItems();            
//             if (amount > stock) {
//                 stock3.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
//                 stock3.style.color = `red`;
//             } else {
//                 for (let i = 0; i < amount; i++) {
//                     let sum = stock-amount;
//                     stock3.innerText = `${sum} items in stock`
//                     shoppingBag.addProduct(product);
//                 }
//             }
//             for(let i=0; i<shoppingBag.produktList.length; i++){
//                 const products = document.createElement('p');
//                 shopping.appendChild(products);
//                 console.log(shoppingBag.produktList)
//                 products.innerText= shoppingBag.produktList[i].name;

//                 const remove = document.createElement('button');
//                 products.appendChild(remove);
//                 remove.innerText = '-'

//                 remove.addEventListener('click', ()=>{
//                 shoppingBag.deleteProduct(shoppingBag.produktList[i], i);
//             })
            
//         }
//         }

//         function getAmount4(event) {
//             event.preventDefault();
//             const input4 = document.querySelectorAll('input')[3];
//             const price4 = document.getElementsByClassName('price')[3];
//             const stock4 = document.getElementsByClassName('stock')[3];

//             const amount = parseInt(input4.value);
//             const price = parseInt(price4.innerText);
//             const stock = parseInt(stock4.innerText);

//             const productName = document.querySelectorAll('h1')[3].innerText;
//             const product = new Product(productName, price, stock)
//             console.log(amount, product.amount, 'amount')
//             deleteItems();            
//             if (amount > stock) {
//                 stock4.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
//                 stock4.style.color = `red`;
//             } else {
//                 for (let i = 0; i < amount; i++) {
//                     let sum = stock-amount;
//                     stock4.innerText = `${sum} items in stock`
//                     shoppingBag.addProduct(product);
//                 }
//             }
//             for(let i=0; i<shoppingBag.produktList.length; i++){
//                 const products = document.createElement('p');
//                 shopping.appendChild(products);
//                 console.log(shoppingBag.produktList)
//                 products.innerText= shoppingBag.produktList[i].name;

//                 const remove = document.createElement('button');
//                 products.appendChild(remove);
//                 remove.innerText = '-'

//                 remove.addEventListener('click', ()=>{
//                 shoppingBag.deleteProduct(shoppingBag.produktList[i], i);
//             })
            
//         }
//         }

//         function getAmount5(event) {
//             event.preventDefault();
//             const input5 = document.querySelectorAll('input')[4];
//             const price5 = document.getElementsByClassName('price')[4];
//             const stock5 = document.getElementsByClassName('stock')[4];

//             const amount = parseInt(input5.value);
//             const price = parseInt(price5.innerText);
//             const stock = parseInt(stock5.innerText);

//             const productName = document.querySelectorAll('h1')[4].innerText;
//             const product = new Product(productName, price, 5)
//             console.log(amount, product.amount, 'amount')
//             deleteItems();            
//             if (amount > stock) {
//                 stock5.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
//                 stock5.style.color = `red`;
//             } else {
//                 for (let i = 0; i < amount; i++) {
//                     let sum = stock-amount;
//                     stock5.innerText = `${sum} items in stock`
//                     shoppingBag.addProduct(product);
//                 }
//             }
//             for(let i=0; i<shoppingBag.produktList.length; i++){
//                 const products = document.createElement('p');
//                 shopping.appendChild(products);
//                 console.log(shoppingBag.produktList)
//                 products.innerText= shoppingBag.produktList[i].name;

//                 const remove = document.createElement('button');
//                 products.appendChild(remove);
//                 remove.innerText = '-'
                

//                 remove.addEventListener('click', function(product){
//                 shoppingBag.deleteProduct(shoppingBag.produktList[i], i);
//                 console.log('stoc', product.addStock())
//                 product.addStock();
//                 })
//             }
//         }

//     }, 1000);

    
//     // shopping.addEventListener('click', () => {
//     //     deleteItems();
//     //     console.log(shoppingBag.totalCost());
//     //     for (let i = 0; i < shoppingBag.produktList.length; i++) {
//     //         const products = document.createElement('p');
//     //         shopping.appendChild(products);
//     //         console.log(shoppingBag.produktList)
//     //         products.innerText = shoppingBag.produktList[i].name;

//     //         const remove = document.createElement('button');
//     //         products.appendChild(remove);
//     //         remove.innerText = '-'

//     //         remove.addEventListener('click', () => {
//     //             shoppingBag.deleteProduct(shoppingBag.produktList[i], i);
//     //         })
//     //     }
//     //     const summa = document.createElement('p');
//     //     shopping.appendChild(summa)
//     //     summa.innerText = `Summa: ${shoppingBag.totalCost()}`;
//     //     const buyNow = document.createElement('button');
//     //     shopping.appendChild(buyNow);
//     //     buyNow.innerText = `Buy`;

//     //     buyNow.addEventListener('click', () => {
//     //         shoppingBag.buy();
//     //         summa.innerText=`Tack för ditt köp`;
//     //         buyNow.style.display='none';
//     //     })
//     // })

// })();
