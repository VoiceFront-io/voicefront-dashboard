import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbyDate'
})
export class OrderbyDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newVal = value.sort((a: any, b: any) => {
        let date1 = new Date(a.updated_at);
        let date2 = new Date(b.updated_at);

        if (date1 > date2) {
            return -1;
        } else if (date1 < date2) {
            return 1;
        } else {
            return 0;
        }
    });

    return newVal;
}

}
