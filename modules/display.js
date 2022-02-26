class ShoppingBag{
    constructor(totalPrice){
        this.totalPrice = totalPrice
        this.produktList = []
    }

    addProduct(product){
        let addPrice=product.price;
        this.produktList.push(product);
        console.log('productList', this.produktList)
        
        this.totalPrice=addPrice+this.totalPrice
        console.log('totalPrice', this.totalPrice)
        
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
        console.log(`${this.totalPrice}`)
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

    removeProduct(price){
        this.stock = this.stock+1
    }

    addItem(i){
        this.stock =this.stock-i
    }
}

function deleteItems(){
    const allShopH3 = document.querySelectorAll('.shoppingbag h3');
    const allShopbutton = document.querySelectorAll('.shoppingbag button');
    
    allShopH3.forEach(h3=>{
        h3.remove();
    });
    allShopbutton.forEach(button=>{
        button.remove();
    })
    
}


export {ShoppingBag, Product, deleteItems}