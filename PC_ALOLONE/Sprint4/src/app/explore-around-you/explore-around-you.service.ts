import { IFriend } from './../api/frends.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { APIFriendService } from '../api/frends.service';
import { ApiExploreService, IExplore } from '../api/api-explore.service';

@Injectable({
  providedIn: 'root',
})
export class ExploreAroundYouService {
  constructor(
    private apiFriendService: APIFriendService,
    private apiExploreService: ApiExploreService
  ) {}


  private readonly $_friends = new BehaviorSubject<IFriend[]>([]);
  private readonly $_explore = new BehaviorSubject<IExplore[]>([]);


  readonly _friends$ = this.$_friends.asObservable();
  readonly _explore$ = this.$_explore.asObservable();

  getListFriend(): void {
    this.apiFriendService
      .getListFriend$()
      .pipe(take(1))
      .subscribe((u) => this.$_friends.next(u));
  }

  getExplore(): void {
    this.apiExploreService
      .getExplore$()
      .pipe(take(1))
      .subscribe((_explore) => this.$_explore.next(_explore));
  }
}
