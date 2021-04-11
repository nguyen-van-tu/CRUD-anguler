import {Injectable} from '@angular/core';
import {Iproduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Iproduct> = [
    {
      id: 1,
      name: 'Iphone X',
      price: 10000,
      description: 'new'
    },
    {
      id: 2,
      name: 'Iphone 11',
      price: 15000,
      description: 'new'
    },
    {
      id: 3,
      name: 'Iphone 11 ProMax',
      price: 17000,
      description: 'new'
    },
    {
      id: 4,
      name: 'Iphone 12',
      price: 20000,
      description: 'new'
    },

  ];

  getAllProduct(): Array<Iproduct> {
    return this.products;
  }

  getProductById(id: number): Iproduct {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    return null;
  }

  // tslint:disable-next-line:typedef
  addNewProduct(product: Iproduct) {
    let id = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      let max = 0;
      if (this.products[i].id >= max) {
        max = this.products[i].id;
        id = max + 1;
      }
    }
    product.id = id;
    this.products.push(product);
  }

  updateProduct(p: Iproduct): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === p.id) {
        this.products[i] = p;
      }
    }
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);

      }
    }
  }

  constructor() {
  }
}
