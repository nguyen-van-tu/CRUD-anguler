import {Injectable} from '@angular/core';
import {Iproduct} from './iproduct';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
const URL_BACKEND = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProduct(): Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(URL_BACKEND + 'product');
  }
  getProductById(id: number): Observable<Iproduct> {
    // tslint:disable-next-line:prefer-for-of
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id === id) {
    //     return this.products[i];
    //   }
    // }
    // return null;
    return this.httpClient.get<Iproduct>('http://localhost:8080/product/' + `${id}`);
  }

  // tslint:disable-next-line:typedef
  addNewProduct(product: Iproduct) {
  //   let id = Math.floor(Math.random() * 9999999999);
  //   product.id = id;
  //   this.products.push(product);
  }

  updateProduct(id: number , p: Iproduct): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>('http://localhost:8080/product/edit/' + id , p);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id === id) {
    //     this.products.splice(i, 1);
    //   }
    // }
  }

  constructor(private httpClient: HttpClient) {

  }
}
