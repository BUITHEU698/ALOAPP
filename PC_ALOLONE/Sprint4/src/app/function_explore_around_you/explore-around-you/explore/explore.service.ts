import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ApiExploreService, IExplore } from '../../api/api-explore.service';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private apiExploreService:ApiExploreService) { }
  private readonly $_explore = new BehaviorSubject<IExplore[]>([]);
  readonly _explore$ = this.$_explore.asObservable();
  getExplore():void{
    this.apiExploreService.getExplore$().pipe(take(1)).subscribe((_explore) => this.$_explore.next(_explore));
  }
}

