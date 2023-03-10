import { IFriend } from './../api/frends.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ExploreAroundYouService } from './explore-around-you.service';
import { IExplore } from './../api/api-explore.service';


@Component({
  selector: 'app-explore-around-you',
  templateUrl: './explore-around-you.component.html',
  styleUrls: ['./explore-around-you.component.scss'],
})
export class ExploreAroundYouComponent {
  checkScollEvent: boolean = false;
  @ViewChild('scollEvent', { static: true, read: ElementRef }) scollEvent:
    | ElementRef
    | undefined;

  _friends: IFriend[] = [];

  _explores: IExplore[] = [];
  element: any;
  constructor(private exploreAroundYouService: ExploreAroundYouService) {}
  ngOnInit(): void {
    this.exploreAroundYouService.getListFriend();
    this.exploreAroundYouService._friends$.subscribe((u) => {
      this._friends = Object.assign([], u);
    });

    this.exploreAroundYouService.getExplore();
    this.exploreAroundYouService._explore$.subscribe((data) => {
      this._explores = data;
    });

    const scollEvent = this.scollEvent?.nativeElement;
    scollEvent.addEventListener('wheel', (event: WheelEvent) => this.wheelEventVerticalToHorizontal(event));
  }
  wheelEventVerticalToHorizontal(event: WheelEvent) {
    throw new Error('Method not implemented.');
  }
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (!this.element) return;
    const scrollableElement_ref = this.element.nativeElement;

    if (this.checkScollEvent == true) {
      if (event.deltaY > 0) {
        scrollableElement_ref.scrollLeft -= 40;
      } else {
        scrollableElement_ref.scrollLeft += 40;
      }
    }
  }
}
