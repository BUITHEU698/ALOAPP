import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class APIuserService {
  constructor() {}
}
export interface IUser {
  user_id: 1;
  avatar: 'string';
  full_name: 'string';
  nick_name: 'string';
  identification: 1;
  address: 'string';
  no_of_follow: 1;
  view: 1;
  cover: 'string';
  phone: '033214421';
  gender: 1;
  birthday: 'string';
  first_name: '033214421';
  last_name: '033214421';
  no_of_friend: 1;
  description: 'string';
  website: 'string';
  email: 'string';
  user_interests: 'pending ';
  is_notify: 1;
  is_dark_mode: 1;
  view_about: 1;
  view_life_event: 1;
  view_friend: 1;
  view_media: 1;
  is_request_friend: 1;
  timestamp: 'string';
  city: {
    id: 1;
    name: 'string';
  };
  district: {
    id: 1;
    name: 'string';
  };
  ward: {
    id: 1;
    name: 'string';
  };
  country: {
    id: 1;
    name: 'string';
  };
  contact_type: 0;
  is_display_name: 0;
  is_enable_gender: 0;
  is_enable_birthday: 0;
  is_enable_phone: 0;
  is_enable_email: 0;
  is_enable_address: 0;
  is_enable_city: 0;
  is_enable_district: 0;
  is_enable_ward: 0;
  no_of_alo_point: 0;
  mutual_friend: 10;
}
