import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private _sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this._sellers.push(seller);
      seller.setMediator = this;
    });
  }

  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this._sellers.length; i++) {
      product = this._sellers[i].sell(id);

      if (product) {
        console.log(
          'Here"s your product',
          product.id,
          product.name,
          product.price,
        );
        return;
      }
    }

    console.log('Product not found');
  }

  showProduct(): void {
    this._sellers.forEach((seller) => seller.showProducts());
  }
}
