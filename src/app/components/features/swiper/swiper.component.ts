import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnDestroy, OnInit, AfterViewInit {
  swiper: Swiper | undefined;
  static swiper_counter: number;
  public counter: number = 0

  @Input() config?: SwiperOptions | null
  @Input() extended: boolean = false
  private swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Autoplay, Pagination, Navigation],
  };

  constructor() {
  }
  ngOnInit(): void {
    if(isNaN(SwiperComponent.swiper_counter)) 
      SwiperComponent.swiper_counter = 0
    this.counter = SwiperComponent.swiper_counter
    SwiperComponent.swiper_counter++
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper(`#swiper-container${this.counter}`,
       {...this.swiperConfig, ...this.config});
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
