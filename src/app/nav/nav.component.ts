import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isUrl: any;
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
        this.route = location.path().replace('/', '');
        this.isUrl = this.route;
        console.log(this.route);
    });
  }
  ngOnInit() {
  }

}
