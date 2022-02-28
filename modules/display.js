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
        console.log('total pris', this.totalPrice-thePrice)
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
    constructor(id, name, price, stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }

    removeProductFromCart(product){
        console.log('ID', product.name)
        console.log('stock', product.stock)
        this.stock = product.stock+1
        console.log('nytt Stock', this.stock)
        return this.stock
    }

    addItem(i){
        console.log('ID', this.id)
        this.stock =this.stock-i
        return this.stock
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