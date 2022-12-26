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
    console.log(this.checkScollEvent);
    if (!this.element) return;
    if (event.deltaY > 0 && this.checkScollEvent == true) {
      this.element.nativeElement.scrollLeft -= 50;
    } else {
      this.element.nativeElement.scrollLeft += 50;
    }
  }
}
