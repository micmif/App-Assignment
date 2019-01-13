import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  transform(timestamp: number, format: string)
  {
    return moment(timestamp * 1000).format(format);
  }
}
