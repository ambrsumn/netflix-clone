import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-movie-detail',
  templateUrl: './banner-movie-detail.component.html',
  styleUrl: './banner-movie-detail.component.css',
})
export class BannerMovieDetailComponent {
  @Input() detailArray: any;
}
