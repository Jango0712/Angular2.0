import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(value: number): string {
    let result:string = 'Ref-' + value;
    return result;
  }

}
