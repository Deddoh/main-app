import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { BasicFormDetailsComponent } from './basic-form-details.component';



@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
      ],
    }),
    CommonModule
  ],
  exports:[
    BasicFormDetailsComponent,
  ],
})
export class BasicFormDetailsModule {



  


 }
