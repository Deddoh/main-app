import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finance-card',
  templateUrl: './finance-card.component.html',
  styleUrls: ['./finance-card.component.css']
})
export class FinanceCardComponent implements OnInit {
@Input() label: string;
@Input() total: string;
  constructor() { }

  ngOnInit(): void {
  }

}
