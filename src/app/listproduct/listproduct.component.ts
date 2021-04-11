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
    this.products =  this.productService.getAllProduct();
  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id);
  }
}
