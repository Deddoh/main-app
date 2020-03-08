import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface InvoiceElements {
  invoicenumber: number;
  date: string;
  customer: string;
  description: string;
  amount: string;
  daysoutstanding: string;
  thirtydays: string;
  sixtydays: string;
  nintydays: string;
  
}

const ELEMENT_DATA: InvoiceElements[] = [
  {invoicenumber: 1001, date: '20/12/2019', customer: 'CustomerA', description: 'Invoice1001', amount:'$1,916.18', daysoutstanding:'31', thirtydays:'$0.00', sixtydays:'$1,916.18', nintydays:'$0.00'},
  {invoicenumber: 1001, date: '20/12/2019', customer: 'CustomerB', description: 'Invoice1001', amount:'$1,916.18', daysoutstanding:'31', thirtydays:'$0.00', sixtydays:'$1,916.18', nintydays:'$0.00'},
  {invoicenumber: 1001, date: '20/12/2019', customer: 'CustomerA', description: 'Invoice1001', amount:'$1,916.18', daysoutstanding:'31', thirtydays:'$0.00', sixtydays:'$1,916.18', nintydays:'$0.00'},
  {invoicenumber: 1001, date: '20/12/2019', customer: 'CustomerC', description: 'Invoice1001', amount:'$1,916.18', daysoutstanding:'31', thirtydays:'$0.00', sixtydays:'$1,916.18', nintydays:'$0.00'},
];


@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  displayedColumns: string[] = ['invoicenumber', 'date', 'customer', 'description', 'amount', 'daysoutstanding', 'thirtydays', 'sixtydays', 'nintydays'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
