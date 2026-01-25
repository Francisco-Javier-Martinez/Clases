import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profesPipe',
  standalone: false,
})
export class ProfesPipePipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return '';
    }
    return value.toUpperCase();
  }

}
