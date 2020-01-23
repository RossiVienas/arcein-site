import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('nav', {static: true})
  private nav : ElementRef<HTMLUListElement>;
  private isHovered : boolean = false;

  constructor() { }

  ngOnInit() 
  {
    this.nav.nativeElement.onmouseover = () =>
    {
      this.isHovered = true;
      this.nav.nativeElement.style.opacity = "1.0";
    }

    this.nav.nativeElement.onmouseleave = () =>
    {
      this.isHovered = false;
      if(pageYOffset < document.documentElement.clientHeight * 1.0 - 60)
      {
        this.nav.nativeElement.style.opacity = "0.7";
      }
    }

    window.addEventListener('scroll', () => 
    {
      
      if(pageYOffset < document.documentElement.clientHeight * 1.0 - 60)
      {
        if(!this.isHovered) this.nav.nativeElement.style.opacity = "0.7";
      }
      else this.nav.nativeElement.style.opacity = "1.0";
      
    });
  }

}
