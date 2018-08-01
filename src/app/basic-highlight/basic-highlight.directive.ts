import { ElementRef, Directive, OnInit } from '@angular/core';

@Directive(
    {
        selector: '[appBasicHighlight]'
    }
)

// exporting a class called BasicHighlight
export class BasicHighlightDirective implements OnInit {
    // we do inject by adding a constructor, w/c every typescript class has
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        // getting access to the element the directive was place on, and overwritting the style of this element
        this.elementRef.nativeElement.style.backgroundColor = 'green';


    }
}
