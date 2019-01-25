import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Hello Interpolation';
  public person = {
    name: `BoyI's`
  };

  public customers = [{
    name: 'customer 1'
  }, {
    name: 'customer 2'
  }];

  public randomUrl = 'https://picsum.photos/200/300';
  public isBtnDisabled = true;

  public classes = ['class-1', 'class-2'];
  public isSpecial = true;
  public fontSizePx = 20;

  public onChanged(input: HTMLInputElement) {
    console.log(input.value);
  }

  public onKeyEnter(input: HTMLInputElement) {
    alert(input.value);
  }
}
