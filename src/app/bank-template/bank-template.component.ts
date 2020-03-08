import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bank-template',
  templateUrl: './bank-template.component.html',
  styleUrls: ['./bank-template.component.css']
})
export class BankTemplateComponent implements OnInit {

  datasource: MatTableDataSource<any>;

  dataColumns = [
    'branch_name',
    'account_name',
    'account_number',
    
  ];
  
  labels = [
    'Branch Name',
    'Account Name',
    'Account Number'
    
  ];
  
  data = [
    {
      branch_name: 'Equity Branch, Nairobi',
      account_name: 'Afyakit',
      account_number: '115739789256'
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