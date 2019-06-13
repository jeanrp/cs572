import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective implements OnInit {

  @Input('appMakeBigger') initialFontSize: string;


  constructor(private element: ElementRef, private renderer2: Renderer2) {

  }

  ngOnInit(): void {
    this.renderer2.setStyle(this.element.nativeElement, 'fontSize', this.initialFontSize);
  }


  @HostListener('click') mouseEnter() {
    let currentFontSizeString : string = this.element.nativeElement.style.fontSize;
    let currentSizeInt : number  = parseInt(currentFontSizeString.replace("px",""));
    currentSizeInt += 2;
    currentFontSizeString = currentSizeInt + "px";
    this.renderer2.setStyle(this.element.nativeElement, 'fontSize', currentFontSizeString);
  }

}
