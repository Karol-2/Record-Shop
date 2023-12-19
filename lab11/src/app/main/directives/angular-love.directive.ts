import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAngularLove]'
})
export class AngularLoveDirective {


  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.textContent = "Kocham Angulara"

  }

  

}
