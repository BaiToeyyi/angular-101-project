import { AbstractControl } from '@angular/forms';

export function EmailValidation(controls: AbstractControl) {
  const value = controls.value;
  const reg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  const valid = reg.test(value);
  if (valid) {
    return;
  }
  return {
    emailValid: true
  };
}
