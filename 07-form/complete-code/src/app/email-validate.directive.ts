import { Directive } from '@angular/core';
import { Validator, FormGroup, ValidationErrors, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[appEmailValidate]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidateDirective, multi: true}]
})
export class EmailValidateDirective implements Validator {

  validate(form: FormGroup): ValidationErrors {
    const value = form.value;
    const reg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    const valid = reg.test(value);
    if (valid) {
      return;
    }
    return {
      email: {
        message: 'xxxx'
      }
    };
  }

}
