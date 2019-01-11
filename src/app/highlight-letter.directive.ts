import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightLetter]'
})
export class HighlightLetterDirective {
  @Input() size: number;
  @Input() color: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.size, this.color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
    this.el.nativeElement.style.fontSize = this.size+'px';
    this.highlight(this.color, this.size, '2px');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.highlight('inherit', '1em', 0)
  }

  private highlight(color, size, padding) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontSize = size;
    this.el.nativeElement.style.padding = padding;
  }
}
