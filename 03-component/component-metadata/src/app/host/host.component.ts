import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  // host: {
  //   '(click)': 'increaseCount()'
  //   '[class.red]': 'count > 5',
  //   '[attr.id]': `'app-host'`
  // }
})
export class HostComponent implements OnInit {
  public count = 0;


  @HostListener('click') onclick() {
    this.increaseCount();
  }

  @HostBinding('class.red') get isRed() { return this.count > 5; }
  @HostBinding('attr.id') get isId() { return 'app-host'; }


  constructor() { }

  ngOnInit() {
  }

  public increaseCount() {
    this.count++;
  }

}
