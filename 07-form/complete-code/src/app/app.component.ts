import { Component } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    console.log(ngForm.value);
    console.log(ngForm.valid);
    for (const key in ngForm.controls) {
      if (ngForm.controls[key]) {
        const formControl: FormControl = <FormControl>ngForm.control.get(key);
        console.log(key);
        console.log(formControl.errors);
        console.log(formControl.valid);
      }
    }
  }
}
