import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tenisMayus'
})
export class TenisMayusPipe implements PipeTransform {

  transform(value:string):string  {
    if(!value){
        return '';
    }else{      
      return value.toUpperCase();

    }
  }

}
