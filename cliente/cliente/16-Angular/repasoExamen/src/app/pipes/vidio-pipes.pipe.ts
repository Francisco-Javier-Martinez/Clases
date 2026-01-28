import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vidioPipes'
})
export class VidioPipesPipe implements PipeTransform {

  transform(value:string): string {
    if(!value){
      return '';
    }else{
      return value.toUpperCase();
    }
  }

}
