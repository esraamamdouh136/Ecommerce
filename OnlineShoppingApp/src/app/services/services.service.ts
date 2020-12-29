import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { navbar } from '../model/navbar'; 
import { sliders } from '../model/sliders'; 
import { DropdownList } from '../model/Search'; 
import { Product } from '../model/product'; 
import { item } from '../model/item'; 

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  _UrlNavbar = "../assets/JsonFiles/navbar.json"
  _Urlsliders = "../assets/JsonFiles/slider.json"
  _UrlSearch = "../assets/JsonFiles/Search.json"
  _UrlProduct = "../assets/JsonFiles/Products.json"
  _OneProduct : item[] = [];


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
  addItem(_OneProduct: item) {
    this._OneProduct.push(_OneProduct);
}
}
