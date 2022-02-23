import {ShoppingBag} from './modules/display.js';

const bagOne = new ShoppingBag(0)
bagOne.addProduct(5, 100);
bagOne.deleteProduct(1, 250);
bagOne.totalCost();
bagOne.buy()

