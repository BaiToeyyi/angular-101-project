import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
