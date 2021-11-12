import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Rice', 5);
    const beans = new Beans('Beans', 10);
    const meat = new Meat('Meat', 25);

    this._meal.addProduct(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Beverage', 4);
    this._meal.addProduct(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Beverage('Dessert', 8);
    this._meal.addProduct(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
