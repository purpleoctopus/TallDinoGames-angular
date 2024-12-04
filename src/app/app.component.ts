import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/features/header/header.component";
import { FooterComponent } from "./components/features/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';

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
    this.translate.addLangs(['uk', 'en']);
    this.translate.setDefaultLang('uk');
    this.translate.use('uk');
  }
}
