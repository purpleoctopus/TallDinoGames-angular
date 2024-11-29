import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ResponsiveBackgroundDirective } from '../../../directives/responsive-background.directive';
import { SwiperComponent } from "../../features/swiper/swiper.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResponsiveBackgroundDirective, SwiperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
