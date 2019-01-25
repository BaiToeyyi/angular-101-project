import { Pipe, PipeTransform } from '@angular/core';
import { CanflyPipe } from './canfly.pipe';

@Pipe({
  name: 'canflyImpure',
  pure: false
})
export class CanflyImpurePipe extends CanflyPipe {

}
