import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css'],
})
export class PharmacyPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  search = true; //true
  page = false; //false
  Search() {
    this.search = false;
    this.page = true;
  }
}
