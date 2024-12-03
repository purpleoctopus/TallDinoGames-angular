import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[responsiveImage]',
  standalone: true
})
export class ResponsiveImageDirective implements OnInit {
  @Input('responsiveImage') imgUrls: { [key: number]: string } = {};

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const screenWidth = window.innerWidth

    const sortedWidths = Object.keys(this.imgUrls)
    .map(width => parseInt(width, 10))
    .sort((a, b) => a - b);

    let selectedUrl = '';
    for (const width of sortedWidths) {
      if (screenWidth <= width) {
        selectedUrl = this.imgUrls[width];
        break;
      }
    }

    if (!selectedUrl) {
      selectedUrl = this.imgUrls[sortedWidths[sortedWidths.length - 1]];
    }

    if (selectedUrl) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', selectedUrl)
    }
  }
}
