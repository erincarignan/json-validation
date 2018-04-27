import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Ajv from 'ajv';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  theForm: FormGroup;

  schemaText = {
    '$id': 'http://example.com/schemas/user.json',
    'type': 'object',
    'definitions': {},
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'properties': {
      'name': {
        'title': 'Name',
        'type': 'string',
        'description': 'Users full name supporting unicode but no emojis.',
        'maxLength': 20,
        'minLength': 4
      },
      'email': {
        'title': 'Email',
        'description': 'Like a postal address but for computers.',
        'type': 'string',
        'format': 'email',
        'pattern': '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
      },
      'date_of_birth': {
        'title': 'Date Of Birth',
        'type': 'string',
        'description': 'Date of uses birth in the one and only date standard: ISO 8601.',
        'format': 'date',
        'example': '1990–12–28'
      }
    },
    'required': [
      'name'
    ]
  };

  jsonText = {
    'name': 'Lucrezia Nethersole',
    'email': 'l.nethersole@hotmail.com',
    'date_of_birth': '2007–01–23'
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

    // map the data model (json) properties to the form model
    this.theForm.setValue({
      name: this.jsonText.name,
      email: this.jsonText.email,
      dateofbirth: this.jsonText.date_of_birth
    });
  }

  createForm(): any {
    this.theForm = this.fb.group({
      name: ['', [
        Validators.minLength(this.schemaText.properties.name.minLength),
        Validators.maxLength(this.schemaText.properties.name.maxLength)]
      ],
      email: ['', Validators.pattern(this.schemaText.properties.email.pattern)],
      dateofbirth: ['']
    });
  }

  validate(schema, data) {

    const ajv = new Ajv();

    return ajv.validate(schema, data)
      ? true : ajv.errors;
  }

  onSubmit() {
    const formModel = this.theForm.value;

    console.log(this.validate(this.schemaText, formModel));

  }
}
