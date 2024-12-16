import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/features/header/header.component";
import { FooterComponent } from "./components/features/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';
import { CookiesWarningComponent } from "./components/features/cookies-warning/cookies-warning.component";
import { CookieService } from './services/cookie/cookie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CookiesWarningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Home - TallDinoGames';
  constructor(private translate: TranslateService, public cookies: CookieService) {
    this.translate.addLangs(['uk', 'en']);
    this.translate.setDefaultLang('uk');
    this.translate.use('uk');
  }
}
