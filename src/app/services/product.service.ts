import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../commons/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseUrl:string="https//externalAPI.com";
  getAllProducts(){
    return this.http.get<Product[]>(this.baseUrl+'/getAllProducts')
  }
  getSortedProducts(category:number)
  {
    return this.http.get<Product[]>(this.baseUrl+'/getAllProducts')
  }
  saveProduct(product:Product){
    return this.http.post(this.baseUrl+'/saveProduct',product);
  }
  editProduct(product:Product){
    return this.http.post(this.baseUrl+'/updateProduct',product);
  }
}
