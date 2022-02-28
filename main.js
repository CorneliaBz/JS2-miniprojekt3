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


//ToDo Koppla in alla produkterna


    
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
    }

    

    // button8.addEventListener('click', function(event){
    // event.preventDefault();
    // console.log(product2);
    // addItemToCart(product2);
    // })
    
    

    // function getAmount1(event){
    //     event.preventDefault();
        
    //     const price1 = document.getElementsByClassName('price')[0];
    //     const stock1 = document.getElementsByClassName('stock')[0];

    //     const amount = parseInt(input0.value);
    //     const price = parseInt(price1.innerText);
    //     const stock = parseInt(stock1.innerText);

    //     const productName = document.querySelectorAll('h1')[0].innerText;
    //     const product = new Product(productName, price, stock)
    //     console.log(amount, product.amount, 'amount')
    //     deleteItems();
       
    //     for(let i=0; i<bagOne.produktList.length; i++){
    //         const products = document.createElement('p');
    //         shopping.appendChild(products);
    //         console.log(bagOne.produktList)
    //         products.innerText= bagOne.produktList[i].name;

    //         const remove = document.createElement('button');
    //         products.appendChild(remove);
    //         remove.innerText = '-'

    //         remove.addEventListener('click', ()=>{
    //         bagOne.deleteProduct(bagOne.produktList[i], i);
    //     })
        
    // }};

    // setTimeout(function getAmount() {
    //     document.getElementById('button1').addEventListener("click", getAmount1);
    //     document.getElementById('button2').addEventListener("click", getAmount2);
    //     document.getElementById('button3').addEventListener("click", getAmount3);
    //     document.getElementById('button4').addEventListener("click", getAmount4);
    //     document.getElementById('button5').addEventListener("click", getAmount5);

        

    //     function getAmount2(event) {
    //         event.preventDefault();
    //         const input2 = document.querySelectorAll('input')[1];
    //         const price2 = document.getElementsByClassName('price')[1];
    //         const stock2 = document.getElementsByClassName('stock')[1];

    //         const amount = parseInt(input2.value);
    //         const price = parseInt(price2.innerText);
    //         const stock = parseInt(stock2.innerText);

    //         const productName = document.querySelectorAll('h1')[1].innerText;

            
    //         console.log(amount, product2.stock, 'amount')
    //             deleteItems();            
    //         if (amount > product2.stock) {
    //             stock2.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
    //             stock2.style.color = `red`;
    //         } else {
    //             product2.addItem(amount);

    //                 stock2.innerText = `${product2.stock} items in stock`
    //             for (let i = 0; i < amount; i++) {
                    
    //                 bagOne.addProduct(product2);
    //             }
    //         }
    //         for(let i=0; i<bagOne.produktList.length; i++){
    //             const products = document.createElement('p');
    //             shopping.appendChild(products);
    //             products.innerText= bagOne.produktList[i].name;
        
    //             const remove = document.createElement('button');
    //             remove.className = `${i}`
    //             products.appendChild(remove);
    //             remove.innerText = '-'
    //             console.log('innertext', product2.stock)

    //             remove.addEventListener('click', function(){
    //                 bagOne.deleteProduct(bagOne.produktList[i], i);
                    
    //                 if(this.className.includes (`${i}`)){
    //                     product2.removeProduct();

                        
    //                     stock2.innerText = `${product2.stock} items in stock`
    //                     console.log('innertext', product2.stock)
    //                 }
                
    //         })}
    //     }

    //     function getAmount3(event) {
    //         event.preventDefault();
    //         const input3 = document.querySelectorAll('input')[2];
    //         const price3 = document.getElementsByClassName('price')[2];
    //         const stock3 = document.getElementsByClassName('stock')[2];

    //         const amount = parseInt(input3.value);
    //         const price = parseInt(price3.innerText);
    //         const stock = parseInt(stock3.innerText);

    //         const productName = document.querySelectorAll('h1')[2].innerText;
    //         const product = new Product(productName, price, stock)
    //         console.log(amount, product.amount, 'amount')
    //         deleteItems();            
    //         if (amount > stock) {
    //             stock3.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
    //             stock3.style.color = `red`;
    //         } else {
    //             for (let i = 0; i < amount; i++) {
    //                 let sum = stock-amount;
    //                 stock3.innerText = `${sum} items in stock`
    //                 bagOne.addProduct(product);
    //             }
    //         }
    //         for(let i=0; i<bagOne.produktList.length; i++){
    //             const products = document.createElement('p');
    //             shopping.appendChild(products);
    //             console.log(bagOne.produktList)
    //             products.innerText= bagOne.produktList[i].name;

    //             const remove = document.createElement('button');
    //             products.appendChild(remove);
    //             remove.innerText = '-'

    //             remove.addEventListener('click', ()=>{
    //             bagOne.deleteProduct(bagOne.produktList[i], i);
    //         })
            
    //     }
    //     }

    //     function getAmount4(event) {
    //         event.preventDefault();
    //         const input4 = document.querySelectorAll('input')[3];
    //         const price4 = document.getElementsByClassName('price')[3];
    //         const stock4 = document.getElementsByClassName('stock')[3];

    //         const amount = parseInt(input4.value);
    //         const price = parseInt(price4.innerText);
    //         const stock = parseInt(stock4.innerText);

    //         const productName = document.querySelectorAll('h1')[3].innerText;
    //         const product = new Product(productName, price, stock)
    //         console.log(amount, product.amount, 'amount')
    //         deleteItems();            
    //         if (amount > stock) {
    //             stock4.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
    //             stock4.style.color = `red`;
    //         } else {
    //             for (let i = 0; i < amount; i++) {
    //                 let sum = stock-amount;
    //                 stock4.innerText = `${sum} items in stock`
    //                 bagOne.addProduct(product);
    //             }
    //         }
    //         for(let i=0; i<bagOne.produktList.length; i++){
    //             const products = document.createElement('p');
    //             shopping.appendChild(products);
    //             console.log(bagOne.produktList)
    //             products.innerText= bagOne.produktList[i].name;

    //             const remove = document.createElement('button');
    //             products.appendChild(remove);
    //             remove.innerText = '-'

    //             remove.addEventListener('click', ()=>{
    //             bagOne.deleteProduct(bagOne.produktList[i], i);
    //         })
            
    //     }
    //     }

    //     function getAmount5(event) {
    //         event.preventDefault();
    //         const input5 = document.querySelectorAll('input')[4];
    //         const price5 = document.getElementsByClassName('price')[4];
    //         const stock5 = document.getElementsByClassName('stock')[4];

    //         const amount = parseInt(input5.value);
    //         const price = parseInt(price5.innerText);
    //         const stock = parseInt(stock5.innerText);

    //         const productName = document.querySelectorAll('h1')[4].innerText;
    //         const product = new Product(productName, price, stock)
    //         console.log(amount, product.amount, 'amount')
    //         deleteItems();            
    //         if (amount > stock) {
    //             stock5.innerText = `Stop hoarding, we dont have ${amount} items in stock`;
    //             stock5.style.color = `red`;
    //         } else {
    //             for (let i = 0; i < amount; i++) {
    //                 let sum = stock-amount;
    //                 stock5.innerText = `${sum} items in stock`
    //                 bagOne.addProduct(product);
    //             }
    //         }
    //         for(let i=0; i<bagOne.produktList.length; i++){
    //             const products = document.createElement('p');
    //             shopping.appendChild(products);
    //             console.log(bagOne.produktList)
    //             products.innerText= bagOne.produktList[i].name;

    //             const remove = document.createElement('button');
    //             products.appendChild(remove);
    //             remove.innerText = '-'

    //             remove.addEventListener('click', ()=>{
    //             bagOne.deleteProduct(bagOne.produktList[i], i);
    //             })
    //         }
    //     }

    // }, 1000);

    
    // shopping.addEventListener('click', () => {
    //     deleteItems();
    //     console.log(bagOne.totalCost());
    //     for (let i = 0; i < bagOne.produktList.length; i++) {
    //         const products = document.createElement('p');
    //         shopping.appendChild(products);
    //         console.log(bagOne.produktList)
    //         products.innerText = bagOne.produktList[i].name;

    //         const remove = document.createElement('button');
    //         products.appendChild(remove);
    //         remove.innerText = '-'

    //         remove.addEventListener('click', () => {
    //             bagOne.deleteProduct(bagOne.produktList[i], i);
    //         })
    //     }
    //     const summa = document.createElement('p');
    //     shopping.appendChild(summa)
    //     summa.innerText = `Summa: ${bagOne.totalCost()}`;
    //     const buyNow = document.createElement('button');
    //     shopping.appendChild(buyNow);
    //     buyNow.innerText = `Buy`;

    //     buyNow.addEventListener('click', () => {
    //         bagOne.buy();
    //         summa.innerText=`Tack för ditt köp`;
    //         buyNow.style.display='none';
    //     })
    // })

})();
