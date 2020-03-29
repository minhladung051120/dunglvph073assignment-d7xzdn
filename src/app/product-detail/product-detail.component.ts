import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css',
              '../css/global.css',
              '../css/style.css',
              '../css/easy-responsive-tabs.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product; 
  constructor(
    private productService : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
        this.product = data;
      })
    });
  }

}