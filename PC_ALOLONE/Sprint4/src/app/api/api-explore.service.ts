import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiExploreService {
  constructor() { }
private _explore:IExplore[]=[
  { id_explore:0,image:"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",name:"Nhà hàng 0",distance:"0.2km",address:"303 phạm văn đồng",rate:4.5},
  { id_explore:1,image:"https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",name:"Nhà hàng 1",distance:"2km",address:"303 phạm văn đồng",rate:4.5},
  { id_explore:2,image:"https://cdn.pixabay.com/photo/2012/12/20/10/13/wine-glass-71380__340.jpg",name:"Nhà hàng 2",distance:"5km",address:"303 phạm văn đồng",rate:4.5}
]

  getExplore$():Observable<IExplore[]>{
  return of (this._explore);
  }
}
export interface IExplore{
  id_explore:number;
  image:string;
  name:string;
  distance:string;
  address:string;
  rate:number;
}


