import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiExploreService {
  constructor() {}
  private _explore: IExplore[] = [
    {
      id_explore: 0,
      image:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
      name: 'Nhà hàng 0',
      distance: '0.2km',
      address: '303 phạm văn đồng',
      rate: 4.9,
    },
    {
      id_explore: 1,
      image:
        'https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=',
      name: 'Nhà hàng 1',
      distance: '2km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 2,
      image:
        'https://cdn.pixabay.com/photo/2012/12/20/10/13/wine-glass-71380__340.jpg',
      name: 'Nhà hàng 2',
      distance: '5km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 3,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/01/d2/e6/57/pad-thai-shrimp.jpg',
      name: 'Nhà hàng 0',
      distance: '0.2km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 4,
      image:
        'https://th.bing.com/th/id/OIP.d8XxWlLEYAs4AHRy9z9OAgHaFk?pid=ImgDet&w=990&h=745&rs=1',
      name: 'Nhà hàng 1',
      distance: '2km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 5,
      image:
        'https://th.bing.com/th/id/OIP.uHTdNBpaz-xTx074B9NLbAHaFj?pid=ImgDet&w=1280&h=960&rs=1',
      name: 'Nhà hàng 2',
      distance: '5km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 6,
      image:
        'https://image.cookly.me/images/shop-fresh-ingredients-at-a-local-market-to-cook-3-thai-dishes-near-the-famous-wa_ltbc2A3.jpg',
      name: 'Nhà hàng 0',
      distance: '0.2km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 7,
      image:
        'https://static.wixstatic.com/media/aa73e4_6a8be29f156543069cca6334247a94a4~mv2.jpg/v1/fill/w_490,h_327,al_c,q_80,usm_0.66_1.00_0.01/aa73e4_6a8be29f156543069cca6334247a94a4~mv2.jpg',
      name: 'Nhà hàng 1',
      distance: '2km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
    {
      id_explore: 8,
      image:
        'https://th.bing.com/th/id/OIP.KIdL_Bs7q3p2IgcIwAPBXQHaFY?pid=ImgDet&rs=1',
      name: 'Nhà hàng 2',
      distance: '5km',
      address: '303 phạm văn đồng',
      rate: 4.5,
    },
  ];

  getExplore$(): Observable<IExplore[]> {
    return of(this._explore);
    console.log(this._explore);

  }
}
export interface IExplore {
  id_explore: number;
  image: string;
  name: string;
  distance: string;
  address: string;
  rate: number;
}
