import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[backgroundImage]'
})
export class BackgroundImageDirective {

  @Input() backgroundImage: string;
  element: HTMLElement;
  image;

  constructor(element: ElementRef, public renderer: Renderer2){
    this.element = element.nativeElement;
  }

  ngAfterViewInit() {
    if(this.backgroundImage) {
      this.renderer.addClass(this.element, 'background-image-container');
      this.renderer.addClass(this.element, 'background-image-not-loader');
    }
    // image.onload = () => {
    //   this.renderer.removeClass(this.element, 'background-image-not-loader');
    //   this.renderer.addClass(this.element, 'background-image-loaded');
    //   this.renderer.setStyle(this.element, 'background-image', `url(${this.backgroundImage}`);
    //   console.log("CALLED!");
    //   this.renderer.removeChild(this.element, image);
    // };
    this.renderer.setAttribute(this.image, 'src', this.backgroundImage);
  }

  ngOnChanges() {
    if(this.element && this.backgroundImage) {
      this.image = this.renderer.createElement('img');
      this.renderer.setStyle(this.image, 'visible', 'false');
      this.renderer.appendChild(this.element, this.image);
    }
    if(!this.backgroundImage) {
      this.renderer.removeClass(this.element, 'background-image-loaded');
      this.renderer.removeStyle(this.element, 'background-image');
      this.renderer.addClass(this.element, 'background-image-not-loader');
    }
  }

}
