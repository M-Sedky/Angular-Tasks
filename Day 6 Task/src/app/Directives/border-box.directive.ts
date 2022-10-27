import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[BorderBox]',
})
export class BorderBoxDirective implements OnChanges{
  @Input('BorderBox') borderColor: string = 'lightgray';
  @Input() hoverColor: string = 'darkgray';

  constructor(private elemRef: ElementRef) {
  }
  ngOnChanges(): void {
  this.elemRef.nativeElement.style.border = `2px solid ${this.borderColor}`;
  }
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `6px solid ${this.hoverColor}`;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.borderColor}`;

  }
}
