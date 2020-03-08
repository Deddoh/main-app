import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 

sideBarOpen = true;


  constructor() { }

  ngOnInit() {}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}





