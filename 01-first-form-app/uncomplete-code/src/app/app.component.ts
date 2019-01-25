import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uncomplete-code';

  public addName(firstName: HTMLInputElement, lastName: HTMLInputElement): boolean {
    alert(`Name : ${firstName.value} ${lastName.value}`);
    return false;
  }
}
