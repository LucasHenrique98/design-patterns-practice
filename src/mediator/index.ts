import { Customer } from './customer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 't-shirt', price: 15 });
seller1.addProduct({ id: '2', name: 'blouse', price: 30 });

seller2.addProduct({ id: '3', name: 'dress', price: 45.3 });
seller2.addProduct({ id: '4', name: 'shirt', price: 10.99 });

mediator.addSeller(seller1, seller2);

const customer = new Customer(mediator);

customer.viewProducts();
customer.buy('2');
customer.buy('4');
customer.viewProducts();
