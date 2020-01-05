import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = 'https://test-api.inizio.cz/api/products';
  private productDetail: any = null;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  getProduct(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  getProductDetail() {
    return this.productDetail;
  }

  setProductDetail(productDetail) {
    this.productDetail = productDetail;
  }
}
