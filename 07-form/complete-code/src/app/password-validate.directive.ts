import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidate]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: PasswordValidateDirective, multi: true
    }
  ]
})
export class PasswordValidateDirective implements Validator {

  // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$

  validate(form: FormControl): ValidationErrors {
    const reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'g');
    const value = form.value;
    const valid = reg.test(value);
    if (valid) {
      return;
    }

    return {
      'password': {
        message: 'Error'
      }
    };
  }

}
