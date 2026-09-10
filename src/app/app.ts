import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from './products/product.service';
import { Product } from './products/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
  private productService = inject(ProductService);
  private changeDetector = inject(ChangeDetectorRef);

  products: Product[] = [];

  constructor() {
    this.productService.getProducts().subscribe({
      next: products => {
        console.log('API ZWRÓCIŁO:', products);
        console.log('ILE:', products.length);

        this.products = products;

        this.changeDetector.detectChanges();
      },
      error: error => {
        console.error('BŁĄD:', error);
      }
    });
  }
}
