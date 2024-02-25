import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class movieService {
  constructor(private http: HttpClient) {}

  url = 'https://api.themoviedb.org/3/movie/';
  api_key = 'd9c83868517169c7d479e6d9c5f8443b';

  getMovie(filter: string) {
    let link = `${this.url}${filter}?api_key=${this.api_key}`;
    // console.log(link);
    return this.http.get(link);
  }

  getMovieBannerVideo(id: string) {
    let link = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    return this.http.get(link, {
      headers: this.header,
    });
  }

  header = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWM4Mzg2ODUxNzE2OWM3ZDQ3OWU2ZDljNWY4NDQzYiIsInN1YiI6IjY1ZDZiZTMwNWNhNzA0MDE3YzBlYjdkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Zbd9-1a2Pq1RszOI7Sx-pIlbUXxHXOwbsNNfESBXM',
  };
}
