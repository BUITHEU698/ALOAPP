import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class APIFriendService {
  constructor() {}
  private _friends: IFriend[] = [
    {
      id: '0',
      name: 'You',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '1',
      name: 'Bùi Thị Thêu',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '2',
      name: 'Nguyễn Minh Phụng',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '3',
      name: 'Nguyễn Trọng Kim',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '4',
      name: 'Lưu Thị Cẩm Nhiên',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '5',
      name: 'Lê khánh duy',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '6',
      name: 'Trần Quốc Phi',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '7',
      name: 'Ngô Văn Việt',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '8',
      name: 'Nguyễn Minh Thuận',
      avatar: '../../assets/image/avatar.jfif',
    },
    {
      id: '9',
      name: 'Phùng Vũ Hoài Nhơn',
      avatar: '../../assets/image/avatar.jfif',
    },
  ];

  getListFriend$(): Observable<IFriend[]> {
    return of(this._friends);
  }
}

export interface IFriend {
  id: string;
  name: string;
  avatar: string;
}
