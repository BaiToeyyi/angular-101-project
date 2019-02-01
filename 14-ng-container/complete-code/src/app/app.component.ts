import { Component, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild('helloTemplate', { read: TemplateRef }) helloTemplate: TemplateRef<any>;
  names = [1, 2];

  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.helloTemplate, { body: 'This is vs body' });
  }
}
