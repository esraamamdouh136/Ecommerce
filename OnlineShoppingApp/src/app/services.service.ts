import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { navbar } from './../assets/JsonFiles/navbar'; 
import { sliders } from './../assets/JsonFiles/sliders'; 
import { DropdownList } from './../assets/JsonFiles/Search'; 
import { Product } from './../assets/JsonFiles/product'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  _UrlNavbar = "../assets/JsonFiles/navbar.json"
  _Urlsliders = "../assets/JsonFiles/slider.json"
  _UrlSearch = "../assets/JsonFiles/Search.json"
  _UrlProduct = "../assets/JsonFiles/Products.json"




  constructor(public Http : HttpClient) { }

  getNavbar ():Observable<navbar[]> {
    return this.Http.get<navbar[]>(this._UrlNavbar);
  }
  getsliders ():Observable<sliders[]> {
    return this.Http.get<sliders[]>(this._Urlsliders);
  }
  getSearch ():Observable<DropdownList[]> {
    return this.Http.get<DropdownList[]>(this._UrlSearch);
  }
  getProduct ():Observable<Product[]> {
    return this.Http.get<Product[]>(this._UrlProduct);
  }
}
