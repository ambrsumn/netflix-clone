import { Component } from '@angular/core';
import { movieService } from './services/movieService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'netflix-clone';
  arr: any;
  imgsrc: string = 'https://media.themoviedb.org/t/p/w220_and_h330_face';
  showImg: boolean = false;

  constructor(private movieService: movieService) {}

  async temp() {
    await this.movieService.getMovie('upcoming').subscribe((res) => {
      console.log(res);
      // return res;
      this.arr = res;
    });
  }

  show() {
    console.log(this.arr.results[0].original_title);
    this.imgsrc = this.imgsrc.concat(
      this.arr.results[0].poster_path.toString()
    );
    console.log(this.imgsrc);
    this.showImg = true;
  }
}
