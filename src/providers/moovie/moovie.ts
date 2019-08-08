import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3/"

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMoovies() {
    return this.http.get(this.baseApiPath + "movie/latest");
  }

}
