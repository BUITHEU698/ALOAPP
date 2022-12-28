import { IFriend } from './../api/frends.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { APIFriendService } from '../api/frends.service';

@Injectable({
  providedIn: 'root',
})
export class ExploreAroundYouService {
  constructor(private apiFriendService: APIFriendService) {}
  private readonly $_friends = new BehaviorSubject<IFriend[]>([]);
  readonly _friends$ = this.$_friends.asObservable();
  getListFriend(): void {
    this.apiFriendService
      .getListFriend$()
      .pipe(take(1))
      .subscribe((u) => this.$_friends.next(u));
  }
}
