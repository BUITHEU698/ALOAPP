import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class APIuserService {
  constructor() {}
  private _friends: IFriend[] = [
    {
      id: '0',
      name: 'You',
      avatar: '../../assets/images/resources/friend-avatar10.jpg',
    },
    {
      id: '1',
      name: 'Bùi Thị Thêu',
      avatar: '../../assets/images/resources/friend-avatar10.jpg',
    },
    {
      id: '2',
      name: 'Nguyễn Minh Phụng',
      avatar: '../../assets/images/resources/friend-avatar11.jpg',
    },
    {
      id: '3',
      name: 'Nguyễn Trọng Kim',
      avatar: '../../assets/images/resources/friend-avatar13.jpg',
    },
    {
      id: '4',
      name: 'Lưu Thị Cẩm Nhiên',
      avatar: '../../assets/images/resources/friend-avatar14.jpg',
    },
    {
      id: '5',
      name: 'Lê khánh duy',
      avatar: '../../assets/images/resources/friend-avatar9.jpg',
    },
    {
      id: '6',
      name: 'Trần Quốc Phi',
      avatar: '../../assets/images/resources/friend-avatar8.jpg',
    },
    {
      id: '7',
      name: 'Ngô Văn Việt',
      avatar: '../../assets/images/resources/friend-avatar7.jpg',
    },
    {
      id: '8',
      name: 'Nguyễn Minh Thuận',
      avatar: '../../assets/images/resources/friend-avatar6.jpg',
    },
    {
      id: '9',
      name: 'Phùng Vũ Hoài Nhơn',
      avatar: '../../assets/images/resources/friend-avatar5.jpg',
    },
  ];

  getListFriend$(data: {
    id: number;
    limit: number;
    position: string;
    keySearch?: string;
  }): Observable<IFriend[]> {
    return of(this._friends);
  }
}

export interface IFriend {
  id: string;
  name: string;
  avatar: string;
}
