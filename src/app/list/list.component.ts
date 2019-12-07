import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
cars: any;
selectedOptions: any;

    @Input() childMessage: string;


  constructor(private  listService: ListService) {
    console.log(this.childMessage);
    //this.listService.updateList(this.selectedOptions);
    // this.listService.getCars(this.selectedOptions).subscribe(cars => {
    //   this.cars = cars;
    //console.log(this.selectedOptions + '1');
  // });
  }
    searchChanged() {
    console.log('change detected');
    }
    getList() {
    //console.log('ok');
    // this.listService.updateList(this.selectedOptions);
    // this.listService.getCars(this.selectedOptions).subscribe(cars => {
    //       this.cars = cars;
    //       console.log(this.selectedOptions + '1');
    //     });
    }

  ngOnInit() {
  }

}
