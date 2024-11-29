import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[responsiveBackground]',
  standalone: true
})
export class ResponsiveBackgroundDirective {
  @Input('responsiveBackground') backgroundUrls: { [key: number]: string } = {};
  private spanElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createBgElement()
    this.updateBackground();
  }
  
  private createBgElement(): void {
    this.spanElement = this.renderer.createElement('span');
    this.renderer.setStyle(this.spanElement, 'position', 'absolute');
    this.renderer.setStyle(this.spanElement, 'z-index', '-1');
    this.renderer.setStyle(this.spanElement, 'pointer-events', 'none');
    this.renderer.appendChild(this.el.nativeElement, this.spanElement);
  }

  private updateBackground(): void {
    const screenWidth = window.innerWidth;

    const sortedWidths = Object.keys(this.backgroundUrls)
      .map(width => parseInt(width, 10))
      .sort((a, b) => a - b);

    let selectedUrl = '';
    for (const width of sortedWidths) {
      if (screenWidth <= width) {
        selectedUrl = this.backgroundUrls[width];
        break;
      }
    }

    if (!selectedUrl) {
      selectedUrl = this.backgroundUrls[sortedWidths[sortedWidths.length - 1]];
    }

    if (selectedUrl) {
      this.renderer.setStyle(this.spanElement, 'background-image', `url(${selectedUrl})`);
    }
  }
}
