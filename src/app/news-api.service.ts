import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d2d847b070fb4e09a7b7db3b69857bce";
  constructor(private httpService: HttpClient) { }

  getNews() {
    return this.httpService.get(this.url);
  }
}
