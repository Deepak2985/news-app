import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
newsList = [];
  constructor(private newsApiService: NewsApiService) { }

  ngOnInit() {
    this.newsApiService.getNews()
    .subscribe(
      (res) => {this.newsList = res.articles;
        console.log(res.status)});
  }

}
