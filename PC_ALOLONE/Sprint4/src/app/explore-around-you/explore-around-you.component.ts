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
  @ViewChild('scollEvent') element: ElementRef | undefined;
  _friends: IFriend[] = [];
  _explores: IExplore[] = [];
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
  }
  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (!this.element) return;
    if (this.checkScollEvent == true) {
      if (event.deltaY > 0) {
        this.element.nativeElement.scrollLeft -= 40;
      } else {
        this.element.nativeElement.scrollLeft += 40;
      }
    }
  }
}
