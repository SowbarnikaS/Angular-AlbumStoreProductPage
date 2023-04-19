import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http'
import { map } form 'rxjs/add/operator/map'
import { Observable } form 'rxjs/Observable'

@Injectable()
export class ProductService{
  private _albumUrl = '../assets/albums.json'
    constructor(private _http: Http){

  }

  getAlbum(id: number): Observable<any>{
    this._http.get(this._albumUrl).map(response=>{response.json()})


  }
}
