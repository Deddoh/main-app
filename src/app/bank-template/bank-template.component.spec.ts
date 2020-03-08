import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTemplateComponent } from './bank-template.component';

describe('BankTemplateComponent', () => {
  let component: BankTemplateComponent;
  let fixture: ComponentFixture<BankTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
