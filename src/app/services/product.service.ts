import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { Observable } from 'rxjs';
import {Product} from '../interfaces/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL: string = `http://localhost:3000`;
  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/apiMercaddito/v1/mercaditto/`);
  }
  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/apiMercaddito/v1/mercaditto/${id}`)
  }

  postProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(`${this.BASE_URL}/apiMercaddito/v1/mercaditto/`, product)
  }
  deleteProduct(id:number): Observable<Product>{

    return this.http.delete<Product>(`${this.BASE_URL}/apiMercaddito/v1/mercaditto/${id}`)
  }
  updateProduct(id:number, product:Product): Observable<Product>{
    return this.http.patch<Product>(`${this.BASE_URL}/apiMercaddito/v1/mercaditto/${id}`, product)
  }
}
