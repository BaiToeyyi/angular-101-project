import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  @Input() set appDisplay(condition: boolean) {
    if (condition) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }


}
