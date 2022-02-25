class ShoppingBag{
    constructor(totalPrice){
        this.totalPrice = totalPrice
        this.produktList = []
    }

    addProduct(product){
        let addPrice=product.price;
        this.produktList.push(product);
        console.log(this.produktList)
        
        this.totalPrice=addPrice+this.totalPrice

        
    }

    deleteProduct(product, index){
        let thePrice=product.price
        console.log(this.totalPrice-thePrice)
        this.totalPrice=this.totalPrice-thePrice
        console.log(this.totalPrice)
        this.produktList.splice(index, 1);
        console.log(this.produktList, 'produktList')
    }

    totalCost(){
        console.log(`summa: ${this.totalPrice}`)
        return this.totalPrice
    }

    buy(){
        this.totalPrice=0;
        this.produktList.splice(0, this.produktList.length);
        
    }
}

class Product{
    constructor(name, price, stock){
        this.name = name
        this.price = price
        this.stock = stock
    }
}

function deleteItems(){
    const allShopP = document.querySelectorAll('.shoppingbag p');
    const allShopbutton = document.querySelectorAll('.shoppingbag button');
    for(let i = 0; i<allShopP.length; i++){
        allShopP[i].remove();
        allShopbutton[i].remove();
    }
}


export {ShoppingBag, Product, deleteItems}