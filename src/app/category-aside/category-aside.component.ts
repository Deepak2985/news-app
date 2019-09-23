import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-category-aside',
  templateUrl: './category-aside.component.html',
  styleUrls: ['./category-aside.component.css']
})
export class CategoryAsideComponent implements OnInit {
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor() { }

  ngOnInit() {
  }

}
