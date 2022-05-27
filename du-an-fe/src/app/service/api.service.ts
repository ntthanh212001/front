import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Products } from '../product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:3000/product";

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<Products>("http://localhost:3000/product")
    .pipe(map((res:Products)=>{
      return res;
    }))
  }
  getProductById(id: number): Observable<Products>{
    return this.http.get<Products>(`${this.baseURL}/${id}`);
  }

  createProduct(product:Products):Observable<Object>{
    return this.http.post(`${this.baseURL}`, product);
  }

  updateProduct(id: number, product: Products):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
