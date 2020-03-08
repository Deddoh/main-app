import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBarChartComponent } from './invoice-bar-chart.component';

describe('InvoiceBarChartComponent', () => {
  let component: InvoiceBarChartComponent;
  let fixture: ComponentFixture<InvoiceBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
