import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-basic-form-details',
  templateUrl: './basic-form-details.component.html',
  styleUrls: ['./basic-form-details.component.css']
})
export class BasicFormDetailsComponent implements OnInit {
  activedStep = 0;
createform = new FormGroup({});
  model = {};
  steps: StepType[] = [
    {
      label: 'Profile data',
      fields: [
        {
          key: 'companyname',
          type: 'input',
          templateOptions: {
            label: 'Company Name',
            attributes:{
              class: 'custom-input-class',
            },
            required: true,
          },
        },

        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Email',
            required: true,
          },
        },

        {
          key: 'phone',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Email',
            required: true,
          },
        },

        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Email',
            required: true,
          },
        },

        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Email',
            required: true,
          },
        },

        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'input',
            label: 'Email',
            required: true,
          },
        },

      ],
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        },
      ],
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }
  

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}
