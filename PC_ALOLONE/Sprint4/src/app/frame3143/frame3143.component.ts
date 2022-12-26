import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-frame3143',
  templateUrl: './frame3143.component.html',
  styleUrls: ['./frame3143.component.scss'],
})
export class Frame3143Component {
  constructor() {}
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
