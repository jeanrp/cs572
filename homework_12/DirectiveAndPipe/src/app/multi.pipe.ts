import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
 
    let aux = value;
    value = "";

    for (let index = 0; index < args; index++){
      value = value + " " + aux; 
    } 

    return value;
  }

}
