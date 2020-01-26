import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component
({
  selector: 'app-monitoring-online',
  templateUrl: './monitoring-online.component.html',
  styleUrls: ['./monitoring-online.component.css']
})
export class MonitoringOnlineComponent implements OnInit, OnDestroy {

  @Input() x              : number = 500;
  @Input() y              : number = 500;
  @Input() radius         : number = 200;
  @Input() stroke         : number = 50;
  @Input() startAngle     : number = -Math.PI/2;
  @Input() color          : string = "rgb(255, 0, 255)";
  @Input() backColor      : string = "rgb(255, 255, 255)";
  @Input() fetchRate      : number = 3000;
  @Input() drawRate       : number = 15;
  @Input() updatePerClock : number = 0.02;
  @Input() accelParam     : number = 0.75;

  @ViewChild('canv', {static: true})
  private canvas      : ElementRef<HTMLCanvasElement>;
  private canvas2d    : CanvasRenderingContext2D;
  private currentValue: number = 0;
  private fetchClock  : number;
  private drawClock   : number;
  private targetValue : number = 0;

  private foo : boolean = true;

  constructor() {}

  private fetchData() : void
  {
    //Fake request
    //this.targetValue = Math.random();
    if(this.foo) {this.targetValue = 0.75; this.foo = false;}
    else{this.targetValue = 0.0; this.foo = true;}
  }

  private updateValue() : void
  {
    let diff : number = Math.pow(Math.abs(this.targetValue - this.currentValue), this.accelParam) * this.updatePerClock;
      if(Math.abs(this.targetValue - this.currentValue) < diff) this.currentValue = this.targetValue;
      else
      {
        if(this.targetValue > this.currentValue) this.currentValue += diff;
        else this.currentValue -= diff;
      }
  }

  private processBar = () =>
  {
    this.updateValue();
    this.drawValue();
  }

  private drawValue() : void
  {
    //Setting degree
    this.currentValue = Math.max(Math.min(1.0, this.currentValue), 0);
    let degree : number = Math.PI * 2 * this.currentValue + this.startAngle;

    //Size
    this.canvas.nativeElement.width  = this.radius * 2 + this.stroke * 2;
    this.canvas.nativeElement.height = this.radius * 2 + this.stroke * 2;

    //Position
    this.canvas.nativeElement.style.top = (this.y - this.radius - this.stroke) + "px";
    this.canvas.nativeElement.style.left = (this.x - this.radius - this.stroke) + "px";
    this.canvas.nativeElement.style.position = "relative";

    //Clear
    this.canvas2d.clearRect(0, 0, this.radius*2, this.radius*2);

    //Set stroke
    this.canvas2d.lineWidth = this.stroke;

    //Draw background circle
    this.canvas2d.strokeStyle = this.backColor;
    this.canvas2d.beginPath();
    this.canvas2d.arc(this.radius + this.stroke, this.radius + this.stroke, this.radius, this.startAngle, 2 * Math.PI, false);
    this.canvas2d.stroke();

    //Draw main circle
    this.canvas2d.strokeStyle = this.color;
    this.canvas2d.beginPath();
    this.canvas2d.arc(this.radius + this.stroke, this.radius + this.stroke, this.radius, this.startAngle, degree, false);
    this.canvas2d.stroke();
  }

  ngOnInit()
  {
    this.canvas2d = this.canvas.nativeElement.getContext('2d');
    if (this.canvas2d == null)
    {
      throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
    }

    this.fetchClock = window.setInterval(() => {this.fetchData();}, this.fetchRate);
    this.drawClock  = window.setInterval(() => {this.processBar();}, this.drawRate);
  }

  ngOnDestroy()
  {
    window.clearInterval(this.fetchClock);
    window.clearInterval(this.drawClock);
  }

  }
