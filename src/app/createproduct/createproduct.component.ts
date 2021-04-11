import {Component, OnInit} from '@angular/core';
import {Iproduct} from '../iproduct';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  product: Iproduct = {
    id: 0,
    price: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router,
              private  productService: ProductService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createProduct() {
    this.productService.addNewProduct(this.product);
    this.router.navigate(['/']);
  }
}
