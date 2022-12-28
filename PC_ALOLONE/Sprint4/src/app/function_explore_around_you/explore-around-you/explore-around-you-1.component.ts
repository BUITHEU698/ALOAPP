import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IExplore } from '../api/api-explore.service';
import { ExploreService } from './explore/explore.service';

@Component({
  selector: 'app-explore-around-you-1',
  templateUrl: './explore-around-you-1.component.html',
  styleUrls: ['./explore-around-you-1.component.scss']
})
export class ExploreAroundYou_1Component implements OnInit {
  constructor(private exploreService:ExploreService ){}
  explores:IExplore[]=[];
  ngOnInit(): void {
    this.exploreService.getExplore();
    this.exploreService._explore$.subscribe((data)=>{
      this.explores=data;
    })
  }




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
