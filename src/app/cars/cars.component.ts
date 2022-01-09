import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})


export class CarsComponent implements OnInit {
  products: any;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('https://auto-val.com/server/car_data.php').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
}
