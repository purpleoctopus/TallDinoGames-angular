import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private accepted: boolean = false
  
  public get cookiesPolicy(){
    return this.accepted
  }

  public set setCookies(value : boolean){
    localStorage.setItem('cookies-allowed', value == true ? 'true':'false')
    this.accepted = true
  }

  constructor() { 
    this.accepted = localStorage.getItem('cookies-allowed') == 'true'
  }

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
