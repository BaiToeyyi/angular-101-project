import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';
  isToggle = true;

  items = [{name: 'item 1'}, {name: 'item 2'}];
  classes = ['class-1', 'class-2'];
}
