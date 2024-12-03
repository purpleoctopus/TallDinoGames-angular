import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/features/header/header.component";
import { FooterComponent } from "./components/features/footer/footer.component";
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TallDinoGames-angular';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ua', 'en']);
    this.translate.setDefaultLang('ua');
    this.translate.use('ua');
  }
}
