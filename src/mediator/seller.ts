import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private _products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this._products.forEach((product) =>
      console.log(product.id, product.name, product.price),
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this._products.push(product));
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this._products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) {
      return;
    }

    const product = this._products.splice(productIndex, 1);
    return product[0];
  }

  set setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}
