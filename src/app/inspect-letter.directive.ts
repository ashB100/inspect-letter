import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInspectLetter]'
})
export class InspectLetterDirective {
  @Input() size: number;
  @Input() color: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color, `${this.size}px`, '15px');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.highlight('inherit', '1em', 0)
  }

  private highlight(color, size, padding) {
    // this.el.nativeElement.style.backgroundColor = color;
    // this.el.nativeElement.style.fontSize = size;
    // this.el.nativeElement.style.padding = padding;
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor', color );
    this.renderer.setStyle(this.el.nativeElement,'fontSize', size );
    this.renderer.setStyle(this.el.nativeElement,'padding', padding );
  }
}
