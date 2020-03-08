import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients-card',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.css']
})
export class ClientsCardComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
