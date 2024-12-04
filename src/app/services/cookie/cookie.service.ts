import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public get lang(){
    const cookies = document.cookie.split('; ');
    const myCookie = cookies.find(cookie => cookie.startsWith('lang='));
    const lang = myCookie ? myCookie.split('=')[1] : 'uk';

    return lang
  }
  public set lang(value: string){
    document.cookie = `lang=${value}; path=/; max-age=2592000`;
  }
}
