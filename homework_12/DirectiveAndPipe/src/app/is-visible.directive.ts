import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {

  @Input('appIsVisible') value:boolean; 

  constructor(private element: ElementRef, private renderer2: Renderer2) {

  }

  ngOnInit(): void {
     if (this.value)
      this.displayElement();
    else
      this.hideElement();
  }

  displayElement() {
    this.renderer2.setStyle(this.element.nativeElement, 'display', 'block');
  }

  hideElement() {
    this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');

  }

}
