import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
    selector: '[appBetterHighlightDirective]'
})

export class BetterHighlightDirective implements OnInit {

    // @HostBinding decorator, to bind to the property style on top which this directive is sitting on top of.

   
    @Input() defaultColor: 'transparent';
    @Input() highlightColor: 'blue';

    @HostBinding('style.backgroundColor') backgroundColor = 'this.defaultColor';


    constructor (private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    // @hostlistener decorater that works with mouseover methosd to turn our paragraph to blue whenever it is hovered over
    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = this.highlightColor;
             // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
 }
      //  @hostlistener decorator that works with mouseleave to turn our paragraph to transparent whenever the mosue leaves
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }
}
