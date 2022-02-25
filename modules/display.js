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

class BagItem{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    removeStock(e){
        let newStock = this.stock-e
        console.log('stock', newStock)
        this.stock=newStock
    }

    addStock(){
        console.log('stockadd', this.stock);
        let newStock =+ (this.stock) + 1
        this.stock=newStock
        console.log('stockadd', this.stock);
        return newStock;
    }
}

class StoreItem {
    constructor(name, price, stock, imageLink){
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.imageLink = imageLink;
    }
}

function deleteItems(){
    
}


export {ShoppingBag, BagItem, StoreItem, deleteItems}