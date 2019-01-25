import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSwitchColor]'
})
export class SwitchColorDirective {

  @HostListener('mouseover') onmouseover() {
    (<HTMLElement>this.el.nativeElement).style.color = 'red';
  }

  @HostListener('mouseout') onmouseout() {
    (<HTMLElement>this.el.nativeElement).style.color = '';
  }

  constructor(
    private el: ElementRef
  ) { }

}
