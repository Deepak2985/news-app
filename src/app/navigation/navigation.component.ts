import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed = false;
  countries =  [
    {name: 'India', abbrev: 'in'},
    {name: 'USA', abbrev: 'us'},
    {name: 'Russia', abbrev: 'ru'},
    {name: 'China', abbrev: 'cn'},
    {name: 'Israel', abbrev: 'il'},
    {name: 'Argentina', abbrev: 'ar'},
  ];
  constructor() { }

  ngOnInit() {
  }

  getNewsByCountry(abbrev: string) {
    console.log(abbrev);
  }

  searchNews(searchText: string) {
    console.log(searchText);
  }
}
