import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSuffix'
})
export class DateSuffixPipe implements PipeTransform {

  transform(value: any): string {
    switch (value) {
      case 1:
      case 21:
      case 31:
        return value + 'st';
      case 2:
      case 22:
        return value + 'nd';
      case 3:
      case 23:
        return value + 'rd';
      default:
        return value + 'th';
    }
  }
}
