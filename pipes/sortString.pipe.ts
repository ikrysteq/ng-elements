import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString'
})

export class SortStringPipe implements PipeTransform {
  
  transform(array: Array<any>, orderField: string, orderType: boolean): Array<string> {
    // console.log('PIPE:', typeof array, ', Order:', orderType);
    if (array === undefined) return array;
    array.sort((a: any, b: any) => {
        let ae = a[orderField];
        let be = b[orderField];
        if (ae == undefined && be == undefined) return 0;
        if (ae == undefined && be != undefined) return orderType ? 1 : -1;
        if (ae != undefined && be == undefined) return orderType ? -1 : 1;
        if (ae == be) return 0;
        return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    });
    // console.log('PIPE sort: ', array);
    
    return array;
  }
}

// USAGE:
// in HTML:
//   <tr *ngFor="let obj of objects | sortString : ObjFieldName: OrderByType">
//   <tr *ngFor="let group of (groupsList | sortString: 'lastName': false); let i = index" >
//
// - ObjFieldName: object field name you want to sort;
// - OrderByType: boolean;    true: descending order;   false: ascending;