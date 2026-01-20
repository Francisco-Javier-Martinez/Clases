import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nuevapipe'
})
export class NuevapipePipe implements PipeTransform {

  transform(valor : string | undefined): string {
      return valor?.toUpperCase() || "";
  }

}
