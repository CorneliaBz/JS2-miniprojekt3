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
                    const btn1 = document.createElement(`button`);
                    const btn2 = document.createElement(`button`);

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
                    btn2.innerText = `Remove from cart`;

                    section.appendChild(newDiv);
                    newDiv.appendChild(h1);
                    newDiv.appendChild(h2);
                    newDiv.appendChild(img);
                    newDiv.appendChild(p2);
                    newDiv.appendChild(btn1);
                    newDiv.appendChild(btn2);
                }
            }
        )
    }
    
})();