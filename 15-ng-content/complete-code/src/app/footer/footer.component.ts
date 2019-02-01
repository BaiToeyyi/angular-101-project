import { Component, OnInit, ContentChild, ViewContainerRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterContentInit {

  @ContentChild('contentFooter', { read: ViewContainerRef }) contentFooter: ViewContainerRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.contentFooter);
  }

}
