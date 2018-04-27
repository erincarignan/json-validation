import { Component, OnInit } from '@angular/core';
import * as Ajv from 'ajv';
import { IModel } from './model';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  model: IModel;

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

  constructor() { }

  ngOnInit() {
    this.model = this.jsonText;


  }

  validate(schema, data) {

    const ajv = new Ajv();

    return ajv.validate(schema, data)
      ? true : ajv.errors;
  }

  onSubmit() {

    console.log(this.validate(this.schemaText, this.model));

  }

}

