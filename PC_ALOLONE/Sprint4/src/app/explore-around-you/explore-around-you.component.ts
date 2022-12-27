import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-explore-around-you',
  templateUrl: './explore-around-you.component.html',
  styleUrls: ['./explore-around-you.component.scss'],
})
export class ExploreAroundYouComponent {
  checkScollEvent: boolean = false;
  @ViewChild('scollEvent') element: ElementRef | undefined;

  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (!this.element) return;
    if (this.checkScollEvent == true) {
      if (event.deltaY > 0) {
        this.element.nativeElement.scrollLeft -= 100;
      } else {
        this.element.nativeElement.scrollLeft += 100;
      }
    }
  }
}
