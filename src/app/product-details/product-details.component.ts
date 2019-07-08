import { Component, OnInit } from '@angular/core';
import {Product} from '../_model/product-model';
import {ProductService} from '../_service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productId: string;
  public product$: Observable<Product>;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.product$ = this.productService.getById(this.productId);
  }

}
