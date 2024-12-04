import { TranslateService } from '@ngx-translate/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from '../services/cookie/cookie.service';

export const translationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const lang = route.paramMap.get('lang');
  const urlSegments = state.url.split('/');
  const lastSegment = urlSegments[urlSegments.length - 1];
  if(lang == null){
    const router = inject(Router)
    const cookies = inject(CookieService)
    
    router.navigate([`/${cookies.lang}/${lastSegment}`])
    return false
  }
  else if (lang && ['uk', 'en'].includes(lang)) {
    const translate = inject(TranslateService);
    translate.use(lang);
    if(lastSegment == lang){
      const router = inject(Router)
      router.navigate([`${lang}/home`])
      return false
    }else return true;
  } else {
    const router = inject(Router);
    router.navigate(['/uk']);
    return false;
  }
};