import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
