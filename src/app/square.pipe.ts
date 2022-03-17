import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    //you can add your logic here//
    return value*value;
  }

}
