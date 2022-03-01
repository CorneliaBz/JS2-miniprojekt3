import { ShoppingBag, Product, deleteItems } from './modules/display.js';

(function () {
    const bagOne = new ShoppingBag(0);
    const product1 = new Product(1, 'K/DA POP/STARS Backpack', 650, 5)
    const product2 = new Product(2, 'Firecracker Teemo Figure', 350, 10)
    const product3 = new Product(3, 'Sugar Rush Poro Figure', 350, 5)
    const product4 = new Product(4, 'Battle Academia Keychain Pack', 450, 3)
    const product5 = new Product(5, 'Little Legends Blind Box Vinyl Figures', 120, 5)

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
                    input.className = `input${i}`;
                    const h2 = document.createElement('h2');
                    const p2 = document.createElement('p');
                    p2.className = `p${i}`
                    const newDiv = document.createElement('div');
                    newDiv.className = 'newDiv';
                    const h1 = document.createElement('h1');
                    const img = document.createElement('img');
                    
                    

                    console.log('promiseValue', promiseValue[i])
                    

                    // h2.classList.add("price");
                    // p2.classList.add("stock");
                    h1.innerText = promiseValue[i].name;
                    h2.innerText = promiseValue[i].price + ':-';
                    img.src = 'img/' + promiseValue[i].image;
                    

                    btn1.innerText = 'Add to cart';
                    btn1.id = `button${i}`;
                    btn1.type = 'submit';

                    input.type = 'number';
                    input.name = 'amount';
                    input.min = 1;
                    input.max = 15;

                    section.appendChild(newDiv);
                    newDiv.appendChild(h1);
                    newDiv.appendChild(h2);
                    newDiv.appendChild(img);
                    newDiv.appendChild(p2)
                    newDiv.appendChild(form);
                    form.appendChild(input);
                    form.appendChild(btn1);
                    
                }addListener1(), addListener2(), addListener3(), addListener4(), addListener5(), showStockInformation1(product1), showStockInformation2(product2), showStockInformation3(product3), showStockInformation4(product4), showStockInformation5(product5)
            }
        )
    }
    
    function showStockInformation1(){
        const stockInformation = document.querySelector('.p1');
        stockInformation.innerText = product1.stock + ` items in stock`;
    }

    function addListener1(){
        document.getElementById('button1').addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(product1);
        checkInputValue1();
        });
    }

    function checkInputValue1(){
        const input = document.querySelector(`.input1`);
        let value = input.value
        console.log('value', value)

        if (product1.stock < value){
            const stockInformation = document.querySelector('.p1');
            stockInformation.innerText = `Can't add ${value} items, we have ${product1.stock} items in stock`;
            stockInformation.style.color = 'red';

        }else{
            deleteItems();
            addItemToCart(product1, value);
            createItemInCart(product1);
            createRegretButton(product1);
            eraseFromStock(product1, value);
            totalSum(product1);
        }
    }
    

// ---------------------------------------------

    function showStockInformation2(){
        const stockInformation = document.querySelector('.p2');
        stockInformation.innerText = product2.stock + ` items in stock`;
    }

    function addListener2(){
        document.getElementById('button2').addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(product2);
        checkInputValue2();    
        });
    }

    function checkInputValue2(){
        const input = document.querySelector(`.input2`);
        let value = input.value
        console.log('value', value)
        
        if (product2.stock < value){
            const stockInformation = document.querySelector('.p2');
            stockInformation.innerText = `Can't add ${value} items, we have ${product2.stock} items in stock`;
            stockInformation.style.color = 'red';

        }else{
            deleteItems();
            addItemToCart(product2, value);
            createItemInCart(product2);
            createRegretButton(product2);
            eraseFromStock(product2, value); 
            totalSum(product2);
        }
    }

// ---------------------------------------------

    function showStockInformation3(){
        const stockInformation = document.querySelector('.p3');
        stockInformation.innerText = product3.stock + ` items in stock`;
    }

    function addListener3(){
        document.getElementById('button3').addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(product3);
        checkInputValue3();    
        });
    }

    function checkInputValue3(){
        const input = document.querySelector(`.input3`);
        let value = input.value
        console.log('value', value)
        
        if (product3.stock < value){
            const stockInformation = document.querySelector('.p3');
            stockInformation.innerText = `Can't add ${value} items, we have ${product3.stock} items in stock`;
            stockInformation.style.color = 'red';

        }else{
            deleteItems();
            addItemToCart(product3, value);
            createItemInCart(product3);
            createRegretButton(product3);
            eraseFromStock(product3, value); 
            totalSum(product3);
        }
    }

// ---------------------------------------------

    function showStockInformation4(){
        const stockInformation = document.querySelector('.p4');
        stockInformation.innerText = product4.stock + ` items in stock`;
    }

    function addListener4(){
        document.getElementById('button4').addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(product4);
        checkInputValue4();    
        });
    }

    function checkInputValue4(){
        const input = document.querySelector(`.input4`);
        let value = input.value
        console.log('value', value)
        
        if (product4.stock < value){
            const stockInformation = document.querySelector('.p4');
            stockInformation.innerText = `Can't add ${value} items, we have ${product4.stock} items in stock`;
            stockInformation.style.color = 'red';

        }else{
            deleteItems();
            addItemToCart(product4, value);
            createItemInCart(product4);
            createRegretButton(product4);
            eraseFromStock(product4, value); 
            totalSum(product4);
        }
    }

// ---------------------------------------------

    function showStockInformation5(){
        const stockInformation = document.querySelector('.p5');
        stockInformation.innerText = product5.stock + ` items in stock`;
    }

    function addListener5(){
        document.getElementById('button5').addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(product5);
        checkInputValue5();    
        });
    }

    function checkInputValue5(){
        const input = document.querySelector(`.input5`);
        let value = input.value
        console.log('value', value)
        
        if (product5.stock < value){
            const stockInformation = document.querySelector('.p5');
            stockInformation.innerText = `Can't add ${value} items, we have ${product5.stock} items in stock`;
            stockInformation.style.color = 'red';

        }else{
            deleteItems();
            addItemToCart(product5, value);
            createItemInCart(product5);
            createRegretButton(product5);
            eraseFromStock(product5, value); 
            totalSum(product5);
        }
    }

     
    // ----------------------------------

    function addItemToCart(product, value){
        for(let i=0; i<value; i++){
            console.log('product', product);
                
            bagOne.addProduct(product);
        }
    }

    function eraseItemFromCart(bagOne, i){
        bagOne.deleteProduct(bagOne.produktList[i], i);
    }

    function eraseFromStock(product, value){
        console.log('value', value)
        product.addItem(value)
        
        showStockInformation1()
        showStockInformation2()
        showStockInformation3()
        showStockInformation4()
        showStockInformation5()
        
    }
    
    

    function putBackInStock(product){
    if(product=product1){
            console.log('ettan')
            product1.removeProductFromCart(product1);
        }else if(product=product2){
            console.log('tvåan')
            product2.removeProductFromCart(product2);
        }
        
    }
    


    function createItemInCart(product){
        console.log('productList', bagOne.produktList)
        for(let i=0; i<bagOne.produktList.length; i++){
            const shopping = document.querySelector('.shoppingbag');
            const cartH3 = document.createElement('h3');
            
            shopping.appendChild(cartH3);
            cartH3.innerText = bagOne.produktList[i].name
            showStockInformation1()
            showStockInformation2()
            showStockInformation3()
            showStockInformation4()
            showStockInformation5()
        }
        
    }

    function createRegretButton(product){
        for(let i=0; i<bagOne.produktList.length; i++){
        let cartH3 = document.querySelectorAll('h3')[i]
        const regretButton = document.createElement('button')
        cartH3.appendChild(regretButton)
        cartH3.className = product.id;
        regretButton.innerText = 'Remove'
        event2(regretButton, i, product)
    }
    
}

function event2(regretButton, i, product){
    regretButton.addEventListener('click', (event)=>{
    event.preventDefault();
    eraseItemFromCart(bagOne, i);
    deleteItems();
    createItemInCart(product);
    createRegretButton(product);
    totalSum();
    
    putBackInStock(product)
    
    
    
    
    showStockInformation1()
    showStockInformation2()
    showStockInformation3()
    showStockInformation4()
    showStockInformation5()
})}

    function totalSum(){
        const shopping = document.querySelector('.shoppingbag');
        const summa = document.createElement('h3');
        summa.classList.add("summa");
        shopping.appendChild(summa);
        let sum = bagOne.totalCost();
        
        console.log('summa', sum)
        summa.innerText = `Summa: ${sum}`;

        buyNow();
        
    }

    function buyNow(){
        const shopping = document.querySelector('.shoppingbag');
        const buyNow = document.createElement('button');
        shopping.appendChild(buyNow);
        buyNow.innerText = `Buy`;

        buyNow.addEventListener('click', () => {
            bagOne.buy();
            alert(`thanks for your purchase, the order will send shortly`);
            location.reload();
    });
}})();
