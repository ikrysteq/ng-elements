import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(array: Array<any>, orderField: number): Array<any> {
    if (array === undefined) return array;
    array.sort((a: any, b: any) => {
      if (a[orderField] < b[orderField]) {
        return -1;
      } else if (a[orderField] > b[orderField]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}