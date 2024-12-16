import { Component } from '@angular/core';
import { CookieService } from '../../../services/cookie/cookie.service';

@Component({
  selector: 'app-cookies-warning',
  standalone: true,
  imports: [],
  templateUrl: './cookies-warning.component.html',
  styleUrl: './cookies-warning.component.scss'
})
export class CookiesWarningComponent {
  constructor(private cookies: CookieService) {}
  public close(){
    this.cookies.setCookies = true
  }
}
