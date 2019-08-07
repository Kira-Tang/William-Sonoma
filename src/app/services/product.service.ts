import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProductDetails(): Observable<any>{
    return this.http.get("/services/catalog/v4/category/shop/new/all-new/index.json");
  }
  

}
