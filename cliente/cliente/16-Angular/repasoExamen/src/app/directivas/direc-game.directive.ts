import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirecGame]'
})
export class DirecGameDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter')
  OnMouseEnter(){
    this.el.nativeElement.style.color= 'red';
  }

  @HostListener('mouseleave')
  OnMouseLeave(){
      this.el.nativeElement.style.color= 'black';
  }

}
