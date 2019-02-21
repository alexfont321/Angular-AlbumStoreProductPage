import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from 'rxjs/Observable';

import { Album } from './album';
import { Product } from './product';

@Injectable()


export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl : string = '../assets/album.json';
  private _productUrl: string = '../assets/products.json';

  getAlbum(id : number): Observable<Album> {
    return this._http.get(this._albumUrl).map(r => <Album>r.json());
  };

  getProducts() : Observable<Product[]> {
    return this._http.get(this._productUrl).map(r => <Product[]>r.json());
  };




}
