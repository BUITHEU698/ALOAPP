import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class APIuserService {
  constructor() {}
}
export interface IUser {
  user_id: number;
  avatar: string;
  full_name: string;
  nick_name: string;
  identification: number;
  address: string;
  no_of_follow: number;
  view: number;
  cover: string;
  phone: number;
  gender: number;
  birthday: string;
  first_name: number;
  last_name: number;
  no_of_friend: number;
  description: string;
  website: string;
  email: string;
  user_interests: string;
  is_notify: number;
  is_dark_mode: number;
  view_about: number;
  view_life_event: number;
  view_friend: number;
  view_media: number;
  is_request_friend: number;
  timestamp: string;
  city: {
    id: number;
    name: string;
  };
  district: {
    id: number;
    name: string;
  };
  ward: {
    id: number;
    name: string;
  };
  country: {
    id: number;
    name: string;
  };
  contact_type: number;
  is_display_name: number;
  is_enable_gender: number;
  is_enable_birthday: number;
  is_enable_phone: number;
  is_enable_email: number;
  is_enable_address: number;
  is_enable_city: number;
  is_enable_district: number;
  is_enable_ward: number;
  no_of_alo_point: number;
  mutual_friend: number;
}
