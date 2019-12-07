import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
    make: any;
    selectedOptions: any;
    carMakes: any;
  constructor(private http: HttpClient) { }
    baseUrl = 'http://localhost/server';
    getAllMakes() {
        return this.http.get(this.baseUrl + '/initapi.php');
  }
    getModelsForMake(makeId) {
        console.log(makeId);
        return this.http.get(this.baseUrl + '/modelapi.php?make=' + makeId);
    }

    getList(formValue) {
      return this.http.get(this.baseUrl + '/listapi.php?make=' + formValue.value.carMake +
      '&model=' + formValue.value.model + '&fregfrom=' + formValue.value.startYear + '&fregto=' + formValue.value.endYear +
      '&pricefrom=' + formValue.value.priceFrom + '&priceto=' + formValue.value.priceTo);

    }
    addDetailsService(url) {
        return this.http.get(this.baseUrl + '/adddetails.php?url=' + url);
    }

    updateList(selectedOptions: string) {

        if (selectedOptions !== undefined) {
            this.selectedOptions = selectedOptions;
        }
        else
            selectedOptions = '';
        console.log(selectedOptions);
    }

}
