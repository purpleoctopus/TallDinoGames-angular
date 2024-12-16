import { Component, inject, OnInit} from '@angular/core';
import { SwiperComponent } from "../../features/swiper/swiper.component";
import { SwiperOptions } from 'swiper/types';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../../models/reviews.model';
import { firstValueFrom } from 'rxjs';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { PluralPipe } from '../../../pipes/plural.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SwiperComponent, TranslatePipe, PluralPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  swiperConfig: SwiperOptions;
  public reviews: Review[] = []

  constructor(private http: HttpClient, private lang: TranslateService) {
    this.swiperConfig = {
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        960: { slidesPerView: 3, slidesPerGroup: 3},
        720: { slidesPerView: 2, slidesPerGroup: 2},
        360: { slidesPerView: 1, slidesPerGroup: 1}
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<div class="${className}"></div>`;
        }
      }
    };
  }

  async ngOnInit(): Promise<void> {
    this.reviews = (await firstValueFrom(this.http.get<any>('/assets/content/reviews.json')))[this.lang.currentLang];
  }
}
