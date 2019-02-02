import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable, Observer, from, fromEvent, of, timer, combineLatest } from 'rxjs';
import { concat, debounceTime, filter, map, switchMap, tap,  } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  observable$: Observable<boolean>;

  constructor(
    private el: ElementRef
  ) {
    this.observable$ = new Observable((observer: Observer<boolean>) => {
      observer.next(true);
      observer.next(true);
      observer.error(new Error('xx'));
      observer.next(false);
    });
  }

  ngOnInit() {
    this.observable$.subscribe({
      next: (a) => {
        console.log(a);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('is complete');
      }
    });

    from([1, 2, 3, 4]).subscribe({
      next: (num) => {
        console.log(num);
      }
    });

    fromEvent((<HTMLElement>this.el.nativeElement).querySelector('input'), 'keyup').subscribe({
      next: (event: KeyboardEvent) => {
        // console.log((event.target as HTMLInputElement).value);
      }
    });

    this.concatExample();
    this.combineLatestExample();
    this.debounceTimeExample();
    this.transformationExample();
  }

  public combineLatestExample() {
    // timerOne emits first value at 1s, then once every 4s
    const timerOne = timer(1000, 4000);
    // timerTwo emits first value at 2s, then once every 4s
    const timerTwo = timer(2000, 4000);
    // timerThree emits first value at 3s, then once every 4s
    const timerThree = timer(3000, 4000);

    // when one timer emits, emit the latest values from each timer as an array
    const combined = combineLatest(timerOne, timerTwo, timerThree);

    const subscribe = combined.subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        /*
          Example:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
        console.log(
          `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
        );
        if (timerValThree === 5) {
          subscribe.unsubscribe();
        }
      }
    );
  }

  public concatExample() {
    const sourceOne = of(1, 2, 3);
    // emits 4,5,6
    const sourceTwo = of(4, 5, 6);
    // emit values from sourceOne, when complete, subscribe to sourceTwo
    const example = sourceOne.pipe(concat(sourceTwo));
    // output: 1,2,3,4,5,6
    const subscribe = example.subscribe(val =>
      console.log('Example: Basic concat:', val)
    );

  }

  public debounceTimeExample() {
    fromEvent((<HTMLElement>this.el.nativeElement).querySelector('input'), 'keyup')
    .pipe(
      debounceTime(500),
      filter((event: KeyboardEvent) => (event.target as HTMLInputElement).value.length % 2 === 0)
    )
    .subscribe({
      next: (event: KeyboardEvent) => {
        console.log((event.target as HTMLInputElement).value);
      }
    });
  }

  public transformationExample() {
    fromEvent((<HTMLElement>this.el.nativeElement).querySelector('input'), 'keyup')
    .pipe(
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      tap((a) => console.log(a)),
      switchMap((value: string) => of(value.length % 2 === 0))
    )
    .subscribe({
      next: (isEven: boolean) => {
        console.log(isEven);
      }
    });
  }
}
