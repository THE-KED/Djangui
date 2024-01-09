import {Injectable} from "@angular/core";
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CacheResolverService{


    private cache = new Map<String, [Date,HttpResponse<any>]>();

    private lats="";


  constructor() {}

  set (key:string, value:HttpResponse<any>, timeToLive:number|null = null){
    console.log("Set cache key ",key);

    if(timeToLive){
      const expiresIn = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds()+timeToLive);
      this.cache.set(key,[expiresIn,value]);
    }else {
      this.cache.set(key,[new Date(),value]);

    }
  }

  get (key:string) {
    console.log("Get cache key ",key);

    const tuple =this.cache.get(key);

    if(!tuple) return null;

    const expiresIn = tuple[0];
    const httpSavedResponse = tuple[1];
    const now = new Date();

    if( expiresIn && expiresIn.getTime()<now.getTime()){
      this.cache.delete(key);
      return null;
    }

    return httpSavedResponse;
  }



  map(route:string):number{

    if(route.endsWith("/Tontine/types"))
      return 6400;
    if(route.endsWith("/membre/user"))
      return 360;
    if(route.includes("participation/"))
      return 60;
    return 0;


  }
}
