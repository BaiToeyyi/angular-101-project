import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { EmailValidation } from './email_validation';
import { PasswordValidation } from './password_validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'complete-code';
  form: FormGroup;

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get passwordValid(): boolean {
    return this.password.touched && this.password.invalid;
  }

  constructor(
    public fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, EmailValidation])],
      isEmail: [true],
      password: ['', Validators.compose([Validators.required, PasswordValidation])],
      check: [false]
    });

    this.form.get('isEmail').valueChanges.subscribe({
      next: (isEmail: boolean) => {
        let validators = Validators.compose([Validators.required]);
        if (isEmail) {
          validators = Validators.compose([Validators.required, EmailValidation]);
        }
        this.form.get('email').setValidators(validators);
        this.form.get('email').updateValueAndValidity();
      }
    });
  }

  onSubmit(f: FormGroup) {
    console.log(f);
    for (const key in f.controls) {
      if (f.contains(key)) {
        const control: AbstractControl = f.get(key);
        console.log(key, ' : ', control.value, control.valid, control.errors);
        control.markAsTouched();
      }
    }
  }
}
