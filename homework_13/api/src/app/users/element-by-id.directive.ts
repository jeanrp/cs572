import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementById]'
})
export class ElementByIdDirective {

  @Input() appElementById;

  @Input() index;

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  ngOnInit(): void 
  {
    if (this.appElementById != this.index)
        this.renderer.setStyle(this.element.nativeElement, "display", "none");
  }


}
