import { Component, OnInit, Input, ContentChild, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormControlName} from '@angular/forms';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
    @ViewChild(MatFormField) _matFormField: MatFormField;

firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
EarlyAccessGroup: FormGroup;
BankDetailsGroup: FormGroup;
Documents: FormGroup;
isOptional: false;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    this.firstFormGroup = this._formBuilder.group({
      company_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      sector: ['', Validators.required],

     
    
    });
    this.secondFormGroup = this._formBuilder.group({
      location: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.maxLength(5)],
    });

    this.EarlyAccessGroup = this._formBuilder.group({
      excel: null,
      written: null,
      qb: null,
      sage: null,
      sap: null,
      other: null,
      value: null,
    });
    this.BankDetailsGroup = this._formBuilder.group({
      banks: ['', Validators.required],
      acc_name: ['', Validators.required],
      acc_number: ['', Validators.required],
      kra: ['', Validators.required]
    });
    // this.Documents = this._formBuilder.group({
    //   company_reg_certificate: ['', Validators.required],
    //   // kra_pin_certificate: ['', Validators.required],
    //   // tax_compliance_certificate: ['', Validators.required],
    //   // cr12: ['', Validators.required]

    // })
   
  }
  // getErrorMessage(){
  //   if(email.hasError('required')){
  //     return 'Please your company email';
  //   }
  //   return email.hasError('email') ? 'Invalid email format' : '';
  // }

  // functions
 

}
