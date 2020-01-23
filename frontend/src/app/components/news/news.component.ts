import { Component, OnInit, OnDestroy } from '@angular/core';

class NewsElement{
  author : string;
  publicationDate : Date;
  views : number;
  text : string;
  pictureURL : string;
  fullURL : string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() 
  {
    
  }
  
  ngOnDestroy()
  {
    
  }

}
