import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[d-scroll-show-hide]',
  standalone: true,
})
export class scrollShowHide implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    const srcollEvent = this.elementRef.nativeElement as HTMLElement;
    srcollEvent.style.display = 'block';
    srcollEvent.style.flexDirection = 'column';
  }
  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    const srcollEvent = this.elementRef.nativeElement as HTMLElement;

    if (event.deltaY > 0) {
      srcollEvent.style.overflowY = 'scroll';
      srcollEvent.style.overflowY = 'smooth';
      setTimeout(function () {
        if (event.deltaY == 0) {
          srcollEvent.style.overflowY = 'hidden';
          console.log(event.deltaY);
          return;
        }
      }, 1000);
    }
  }
}
