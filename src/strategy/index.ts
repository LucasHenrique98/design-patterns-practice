import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-cart';

const cart = new ECommerceShoppingCart();
cart.productDiscount = new DefaultDiscount();
cart.addProduct({ name: 'Produto 1', price: 50 });
cart.addProduct({ name: 'Produto 2', price: 50 });
cart.addProduct({ name: 'Produto 3', price: 50 });
console.log(cart.getTotalWithDiscount());
