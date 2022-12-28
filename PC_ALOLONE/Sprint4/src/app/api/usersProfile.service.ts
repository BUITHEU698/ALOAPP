// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class APIuserService {
//   constructor() {}
//   private _users: IUser[] = [
//     {
//       id: '0',
//       name: 'You',
//       avatar: '../../assets/images/resources/friend-avatar10.jpg',
//     },
//     {
//       id: '1',
//       name: 'Bùi Thị Thêu',
//       avatar: '../../assets/images/resources/friend-avatar10.jpg',
//     },
//     {
//       id: '2',
//       name: 'Nguyễn Minh Phụng',
//       avatar: '../../assets/images/resources/friend-avatar11.jpg',
//     },
//     {
//       id: '3',
//       name: 'Nguyễn Trọng Kim',
//       avatar: '../../assets/images/resources/friend-avatar13.jpg',
//     },
//     {
//       id: '4',
//       name: 'Lưu Thị Cẩm Nhiên',
//       avatar: '../../assets/images/resources/friend-avatar14.jpg',
//     },
//     {
//       id: '5',
//       name: 'Lê khánh duy',
//       avatar: '../../assets/images/resources/friend-avatar9.jpg',
//     },
//     {
//       id: '6',
//       name: 'Trần Quốc Phi',
//       avatar: '../../assets/images/resources/friend-avatar8.jpg',
//     },
//     {
//       id: '7',
//       name: 'Ngô Văn Việt',
//       avatar: '../../assets/images/resources/friend-avatar7.jpg',
//     },
//     {
//       id: '8',
//       name: 'Nguyễn Minh Thuận',
//       avatar: '../../assets/images/resources/friend-avatar6.jpg',
//     },
//     {
//       id: '9',
//       name: 'Phùng Vũ Hoài Nhơn',
//       avatar: '../../assets/images/resources/friend-avatar5.jpg',
//     },
//   ];

//   getListFriend$(data: {
//     id: number;
//     limit: number;
//     position: string;
//     keySearch?: string;
//   }): Observable<_users[]>

// }

// export interface IUser {
//   id: string;
//   name: string;
//   avatar: string;
// }

// // export interface IUser {
// //   user_id: number;
// //   avatar: string;
// //   full_name: string;
// //   nick_name: string;
// //   identification: number;
// //   address: string;
// //   no_of_follow: number;
// //   view: number;
// //   cover: string;
// //   phone: number;
// //   gender: number;
// //   birthday: string;
// //   first_name: number;
// //   last_name: number;
// //   no_of_friend: number;
// //   description: string;
// //   website: string;
// //   email: string;
// //   user_interests: string;
// //   is_notify: number;
// //   is_dark_mode: number;
// //   view_about: number;
// //   view_life_event: number;
// //   view_friend: number;
// //   view_media: number;
// //   is_request_friend: number;
// //   timestamp: string;
// //   city: {
// //     id: number;
// //     name: string;
// //   };
// //   district: {
// //     id: number;
// //     name: string;
// //   };
// //   ward: {
// //     id: number;
// //     name: string;
// //   };
// //   country: {
// //     id: number;
// //     name: string;
// //   };
// //   contact_type: number;
// //   is_display_name: number;
// //   is_enable_gender: number;
// //   is_enable_birthday: number;
// //   is_enable_phone: number;
// //   is_enable_email: number;
// //   is_enable_address: number;
// //   is_enable_city: number;
// //   is_enable_district: number;
// //   is_enable_ward: number;
// //   no_of_alo_point: number;
// //   mutual_friend: number;
// // }
