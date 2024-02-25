import { Component, OnInit } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { movieService } from '../../services/movieService.service';
import { SafePipe } from '../../pipes/safe.pipe';
import { Block } from '@angular/compiler';
// import { BannerMovieDetailComponent } from '../../modals/banner-movie-detail/banner-movie-detail.component';}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  logoImage = LOGO_URL;
  popular: any;
  topRated: any;
  upcoming: any;
  nowPlaying: any;
  movieOnBannerId: any;
  movieOnBanner: any;
  movieOnBannerLink: string = 'https://www.youtube.com/embed/';
  movieOnBannerLinkModal: string = 'https://www.youtube.com/embed/';
  movieOnBannerTitle: any;
  movieOnBannerInfo: any;
  openModalVariable: boolean = false;

  movieDetailArray: string[] = [];

  constructor(private movieService: movieService) {}

  async ngOnInit() {
    let temp = Math.floor(Math.random() * 100) % 20;
    // console.log(this.movieOnBannerId);

    await this.movieService.getMovie('now_playing').subscribe((res: any) => {
      console.log(res);
      this.nowPlaying = res.results;
      this.movieOnBannerId = res.results[temp].id;
      this.movieOnBannerTitle = res.results[temp].title;
      this.movieOnBannerInfo = res.results[temp].overview;

      // console.log(this.movieOnBannerTitle);
      this.movieDetailArray.push(this.movieOnBannerTitle);
      this.movieDetailArray.push(this.movieOnBannerInfo);
    });

    await this.movieService
      .getMovieBannerVideo(this.movieOnBannerId)
      .subscribe((res: any) => {
        console.log(this.movieOnBannerId);
        this.movieOnBanner = res.results[0].key;
        this.movieOnBannerLink = this.movieOnBannerLink.concat(
          this.movieOnBanner.toString(),
          `?autoplay=1&mute=1`
        );
        this.movieOnBannerLinkModal = this.movieOnBannerLinkModal.concat(
          this.movieOnBanner.toString()
        );

        this.movieDetailArray.push(this.movieOnBannerLinkModal);
        // console.log(this.movieOnBannerLink);
      });

    await this.movieService.getMovie('popular').subscribe((res: any) => {
      this.popular = res.results;
    });

    await this.movieService.getMovie('top_rated').subscribe((res: any) => {
      this.topRated = res.results;
    });

    await this.movieService.getMovie('upcoming').subscribe((res: any) => {
      this.upcoming = res.results;
    });

    // console.log(this.nowPlaying.results);
    // console.log(this.popular.results);
    // console.log(this.topRated.results);
    // console.log(this.upcoming.results);

    // console.log(this.movieOnBanner);
  }

  openModal() {
    this.openModalVariable = true;
  }

  closeModal() {
    this.openModalVariable = false;
  }
}
