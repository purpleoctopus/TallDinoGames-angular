import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponsiveBackgroundDirective } from '../../../directives/responsive-background.directive';
import { SwiperComponent } from "../../features/swiper/swiper.component";
import { ResponsiveImageDirective } from '../../../directives/responsive-image.directive';
import { _, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PluralPipe } from '../../../pipes/plural.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ResponsiveBackgroundDirective,
    ResponsiveImageDirective, 
    SwiperComponent, 
    CommonModule,
    TranslatePipe,
    PluralPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent{
  public get isMobile(): boolean{
    return window.innerWidth <= 720 
  }

  constructor() {
  }
}
