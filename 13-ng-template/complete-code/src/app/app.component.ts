import { Component, ViewChild, TemplateRef, OnInit, AfterViewInit, AfterViewChecked, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('loading', { read: TemplateRef }) loadingTemplate: TemplateRef<any>;
  // @ViewChild('defaultTemplate', { read: TemplateRef }) defaultTemplate: TemplateRef<any>;
  // @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  public header = 'header';
  public isTemplate = false;
  // public title = 'title';

  // public ctx = {
  //   title: this.title
  // };


  ngOnInit() {
  //   console.log(this.loadingTemplate);
    setTimeout(() => {
      this.header = 'xxxx';
    }, 4000);
  }

  // ngAfterViewInit() {
  //   console.log(this.loadingTemplate);
  //   // this.defaultTemplate.createEmbeddedView(this.loadingTemplate);
  //   // this.loadingTemplate.createEmbeddedView(this.defaultTemplate);
  //   // this.vc.createEmbeddedView(this.defaultTemplate, {title: 'xxx'});
  // }

  // ngAfterViewChecked() {
  //   console.log(this.loadingTemplate);

  // }
}
