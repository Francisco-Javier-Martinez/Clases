import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pComparsas'
})
export class PComparsasPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.toUpperCase();
  }

}
