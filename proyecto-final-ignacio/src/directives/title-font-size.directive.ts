import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleFontSize]',
})

//*- Directiva Personalizada :
export class TitleFontSizeDirective {
  constructor(public ER: ElementRef, public R2: Renderer2) {
    this.R2.setStyle(this.ER.nativeElement, 'font-size', '20px');
  }
}
