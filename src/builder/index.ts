import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
