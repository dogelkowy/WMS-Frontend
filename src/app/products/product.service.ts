import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5188/api/products';

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
