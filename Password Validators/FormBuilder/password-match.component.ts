/**
 *  Example of repeat password validator
 */

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './passwordValidator';

@Component({
  selector: 'app-password-match',
  templateUrl: './password-match.component.html',
  styleUrls: ['./password-match.component.scss']
})
export class PasswordMatchComponent implements OnInit {
  updatePassForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.updatePassForm = fb.group({
      password: ["", Validators.required],
      repeatPassword: ["", Validators.required]
    }, {
        validator: PasswordValidation.MatchPassword // your validation method
      });
  }

  submitForm(event) {
    this.someService.submitForm(updatePassForm).subscribe(
      data => {
      },
      error => {
      }
    )
    // console.log(password);
    console.log(this.updatePassForm);
  }


}
