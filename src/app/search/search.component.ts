import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    makes: any;
    carLists: any;
    models: any;
    cars: any;
    details: any;

    myForm: FormGroup;
  constructor(private  searchService: SearchService, private fb: FormBuilder) {


      this.searchService.getAllMakes().subscribe(makes => {
          this.makes = makes;
          console.log(makes);
      });

  }

    getMakeModels() {
      this.myForm.patchValue({model: '', priceFrom: '1', startYear: ''});
      this.searchService.getModelsForMake(this.myForm.get('carMake').value).subscribe(models => {
      this.models = models;
      console.log(models);
    });
    }

    addDetails(url) {
        this.searchService.addDetailsService(url).subscribe(details => {
            this.details = details;
            console.log(details);
    });
  }

    // getList() {
    //     console.log('ok');
    //     this.searchService.updateList(this.selectedOptions);
    //     this.searchService.getCars(this.selectedOptions).subscribe(cars => {
    //            this.cars = cars;
    //            console.log(this.selectedOptions);
    //         });
    // }

  ngOnInit() {
      this.myForm = this.fb.group({
          carMake: '',
          model: '',
          priceFrom: '5500',
          priceTo: '',
          startYear: '2010',
          endYear: ''
      });
      this.myForm.valueChanges.subscribe( value => {
          console.log(value);
          this.searchService.getList(this.myForm).subscribe(carLists => {
              this.carLists = carLists;
              console.log(carLists);
          });

      });
      this.searchService.getList(this.myForm).subscribe(carLists => {
          this.carLists = carLists;
          console.log(carLists);
      });
  }

}
