import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withOption'
})
export class WithOptionPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value, args);
    return value;
  }

}
