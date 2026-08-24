import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //constructor(private readonly httpClient: HttpClient) {}

  private httpClient: HttpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    const products = this.httpClient.get<Product[]>(`${environment.apiUrl}products`);

    return products;
  }
}
