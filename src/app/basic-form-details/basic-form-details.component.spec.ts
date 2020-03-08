import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormDetailsComponent } from './basic-form-details.component';

describe('BasicFormDetailsComponent', () => {
  let component: BasicFormDetailsComponent;
  let fixture: ComponentFixture<BasicFormDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
