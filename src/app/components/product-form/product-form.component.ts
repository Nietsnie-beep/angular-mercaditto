import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

import { ProductService } from 'src/app/services/product.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  product: Product = {
   
    name: '',
    sku: 0,
    price: 0
  }

  edit: boolean= false

  constructor( private productService:ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){ }

  ngOnInit() {
      const params = this.activatedRoute.snapshot.params;

      if (params) {
        console.log('params',params);
        this.productService.getProduct(params['id']).subscribe(
          res => {
            console.log('res', res);
            this.product = res;
            this.edit = true
            
          }
        )

        
      }
      
  }

  submitProduct(){
    // console.log(this.product);
    this.productService.postProduct(this.product).subscribe(
      res =>  {
        console.log(res);
        
        this.router.navigate(['/product'])},
      err =>  console.log('err',err)
      
    )
  }

  updateProduct(){
    delete this.product.deleteadAt;
    if (this.product.id !== undefined) {
      console.log("estoy aqui", this.product.id);
      
      this.productService.updateProduct(this.product.id, this.product).subscribe(
      res => {
        console.log("respuesta",res)
        this.router.navigate(['/product'])
        
      },
      err => console.log("error",err)
      
      );
    } else {
      // Manejar el caso en el que this.product.id es undefined, por ejemplo, mostrar un mensaje de error.
    }
  }

}
