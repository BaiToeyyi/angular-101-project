import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly'
})
export class CanflyPipe implements PipeTransform {

  transform(items: {can: boolean}[]): any {
    return items.filter((item) => item.can);
  }

}
