import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDComparsas]'
})
export class DComparsasDirective {

  constructor(private el: ElementRef) { }

  
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }

}
