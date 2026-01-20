import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSergiMierder]'
})
export class SergiMierderDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'yellow';
    /* this.element.nativeElement.style.textTransform = ' capitalice'; */
  }

}
