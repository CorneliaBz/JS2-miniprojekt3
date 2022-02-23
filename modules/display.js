class ShoppingBag{
    constructor(totalAmount, totalPrice){
        this.totalAmount = totalAmount
        this.totalPrice = totalPrice

    }
    addProduct(amount, price){
        console.log(this.totalAmount)
        console.log(`add ${amount} to ${this.totalAmount}`)
        console.log(`${amount+this.totalAmount}`)
        this.totalAmount=amount+this.totalAmount
        console.log(this.totalAmount*price)
        this.totalPrice=price*this.totalAmount
    }
    deleteProduct(amount, price){
        console.log(this.totalAmount)
        console.log(`delete ${amount} from ${this.totalAmount}`)
        console.log(`${this.totalAmount-amount}`)
        this.totalAmount=this.totalAmount-amount
        let thePrice=price*amount
        console.log(this.totalPrice-thePrice)
        this.totalPrice=this.totalPrice-thePrice
        console.log(this.totalPrice)
    }
    totalCost(){
        console.log(`summa: ${this.totalPrice}`)
    }
    buy(){
        this.totalAmount=0 
        this.totalPrice=0
        console.log(this.totalAmount, this.totalPrice)
    }
}



export {ShoppingBag}