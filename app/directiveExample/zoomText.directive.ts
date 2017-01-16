import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Directive({
  selector: '[myZoomText]'
})
export class ZoomTextDirective {
    @Input() myZoomText : boolean;

    constructor(private el: ElementRef, private renderer: Renderer, private spinnerService: SpinnerService) { 
     //let container = document.createElement('div');
     //container.className = 'spinner';
     //let componentElement = el.nativeElement;
     //componentElement.appendChild(container);
     
     //const container = this.renderer.createElement(this.el.nativeElement, "div");
     //this.renderer.setElementClass(container, "spinner", true);
    
             const container = this.renderer.createElement(this.el.nativeElement, "div");
     this.renderer.setElementClass(container, "spinner", true);
     this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
     this.renderer.setElementStyle(this.el.nativeElement, 'position', 'relative');
     
          this.spinnerService.getSpinnerService().subscribe(value => {
        if (!value) {
            this.renderer.setElementStyle(container, 'backgroundColor', 'yellow');
        }
        });
        
        this.spinnerService.getErrorSpinnerService().subscribe(value => {
        if (value) {
            this.renderer.setElementStyle(container, 'backgroundColor', 'red');
        }
     });
    
    }
    
    ngOnInit() {
    }

    private previousFontSize = this.el.nativeElement.style.fontSize; 

    @HostListener('mouseenter') onMouseEnter() {
        if (this.myZoomText) {
            this.previousFontSize = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue('font-size'); 
            this.renderer.setElementStyle(this.el.nativeElement, 'font-size', '20px');
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setElementStyle(this.el.nativeElement, 'font-size', this.previousFontSize);
    }
}