import {
  Component, OnInit, DoCheck, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, Input, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild
} from '@angular/core';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleComponent implements
  OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild(ViewComponent) component: ViewComponent;
  @Input() name = '';
  counter = 0;

  private previousName = '';

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    console.log('constructor');
    this.cdr.detach();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes[propName]) {
        console.log(`ngOnChanges - counter is ${this.counter}`);
      }
    }
  }
  ngOnInit() {
    console.log(`ngOnInit  - counter is ${this.counter}`);
    this.cdr.detectChanges();
  }
  ngDoCheck() {
    console.log(this.previousName, this.name);
    console.log('ngDoCheck');
    if (this.previousName !== this.name) {
      this.previousName = this.name;
      this.cdr.detectChanges();
    }

  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    if (this.component.view === 'update') {
      this.cdr.detectChanges();
    }
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  public increase() {
    this.counter++;
  }

  public decrease() {
    this.counter--;
  }
}
