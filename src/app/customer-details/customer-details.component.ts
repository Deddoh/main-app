import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
datasource: MatTableDataSource<any>;

dataColumns = [
  'company_name',
  'email',
  'phone',
  'kra',
  'sector'
];

labels = [
  'Company Name',
  'Email',
  'Phone',
  'Tax_ID (KRA)',
  'Sector',
];

data = [
  {
    company_name: 'AfyaKit',
    email: 'info@afyakit.com',
    phone: '+254 739 78 9256',
    kra: 'A110E457Y8',
    sector:'Health'
  }
];

displayedColumns = [];
  constructor() { 
    this.transpose();
    this.fillLabels();
  }



  ngOnInit(): void {
  }

  transpose() {
    let transposedData = [];
    for (let column = 0; column < this.dataColumns.length; column++) {
      transposedData[column] = {
        label: this.labels[column]
      };
      for (let row = 0; row < this.data.length; row++) {
        transposedData[column][`column${row}`] = this.data[row][this.dataColumns[column]];
      }
    }
    this.datasource = new MatTableDataSource(transposedData);
  }

  fillLabels() {
    this.displayedColumns = ['label'];
    for (let i = 0; i < this.data.length; i++) {
      this.displayedColumns.push('column' + i);
    }
  }

}
