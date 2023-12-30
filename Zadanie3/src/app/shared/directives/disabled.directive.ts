import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {

  @Input() appDisabled: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appDisabled']) {
      this.updateDisabledState();
    }
  }

  private updateDisabledState(): void {
    if (this.appDisabled) {
      this.renderer.addClass(this.el.nativeElement, 'disabled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'disabled');
    }
  }

}
