import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Iproduct} from '../iproduct';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products: Array<Iproduct> = [];

  constructor(private productService: ProductService) {
    this.showAllProduct();
  }


  ngOnInit(): void {
  }

  showAllProduct() {
    // this.products =  this.productService.getAllProduct();
    this.productService.getAllProduct().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }
}
