import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  make = 'bmw';
  private selectedOptions = '' ;
  constructor( private http: HttpClient) {
    this.selectedOptions = 'bmw';
  }
    getCars(make) {
      return this.http.get('http://auto-val.com/server/listapi.php?make=' + make);
    }
    updateList(selectedOptions: string) {

    if (selectedOptions !== undefined) {
       this.selectedOptions = selectedOptions;
    }
    else
      selectedOptions = '';
    console.log(selectedOptions);
    }
    getList() {
        console.log('ok');
    }
}
