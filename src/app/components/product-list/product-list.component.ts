import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => this.products = res,
      err => console.log(err),
      
    )
  }

  deleteProduct(id:number){
    console.log('delete');
    
    this.productService.deleteProduct(id).subscribe(
      res => {this.getProducts()},
      err => console.log(err),
      
    )
  }

}
