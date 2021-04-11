import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Iproduct} from '../iproduct';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  sub: Subscription;
  product: Iproduct = {
    price: 0,
    name: '',
    id: 0,
    description: ''
  };

  constructor(private router: Router,
              private productService: ProductService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  private getProductById(id: number) {
    this.product =  this.productService.getProductById(id);
  }

  updateProduct() {
    this.productService.updateProduct(this.product);
    this.router.navigate(['/']);
  }
}
