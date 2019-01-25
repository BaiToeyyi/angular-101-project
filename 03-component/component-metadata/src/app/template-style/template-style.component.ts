import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-style',
  // templateUrl: './template-style.component.html',
  template: `<div>Hello App Template style</div>`,
  styles: [`
    :host {
      color: blue;
    }
  `],
  // styleUrls: ['./template-style.component.scss']
})
export class TemplateStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
