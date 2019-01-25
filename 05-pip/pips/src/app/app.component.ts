import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = 2.718281828459045;
  currency: number = 0.123;
  today: number = Date.now();
  canfly = true;
  flies = [{
    can: true,
    name: 'fly 1'
  }, {
    can: false,
    name: 'fly 2'
  },
  {
    can: false,
    name: 'fly 3'
  }];

  onEnter(input: HTMLInputElement): boolean {
    this.flies = this.flies.concat({
      name: input.value,
      can: this.canfly
    });
    input.value = '';
    return false;
  }

  onEnterImpure(input: HTMLInputElement): boolean {
    this.flies.push({
      name: input.value,
      can: this.canfly
    });
    input.value = '';
    return false;
  }
}
