import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component
({
  selector: 'app-monitoring-online',
  templateUrl: './monitoring-online.component.html',
  styleUrls: ['./monitoring-online.component.css']
})
export class MonitoringOnlineComponent implements OnInit {

  @Input() x         : number = 100;
  @Input() y         : number = 100;
  @Input() radius    : number = 100;
  @Input() stroke    : number = 10;
  @Input() startAngle: number = -Math.PI/2;
  @Input() color     : string = "rgb(255, 0, 255)";
  @Input() backColor : string = "rgb(255, 255, 255)";
  
  @ViewChild('canv', {static: true})
  canvas      : ElementRef<HTMLCanvasElement>;
  canvas2d    : CanvasRenderingContext2D;
  currentValue: number = 0.4;
  targetValue : number; 

  constructor() 
  {
  }

  drawValue(value: number) : void
  {
    this.canvas.nativeElement.width  = this.radius * 2 + this.stroke * 2;
    this.canvas.nativeElement.height = this.radius * 2 + this.stroke * 2;
    this.canvas.nativeElement.style.top = (this.y) + "px";
    this.canvas.nativeElement.style.left = (this.x) + "px";
    console.log(this.canvas.nativeElement.style.left);
    console.log(this.canvas.nativeElement.style.top);
    this.canvas.nativeElement.style.position = "relative";
    this.canvas2d.clearRect(0, 0, this.radius*2, this.radius*2);
    this.canvas2d.lineWidth = this.stroke;     
    
    this.canvas2d.strokeStyle = this.backColor;
    this.canvas2d.beginPath();
    this.canvas2d.arc(this.radius + this.stroke, this.radius + this.stroke, this.radius, this.startAngle, 2*Math.PI, false);
    this.canvas2d.stroke();

    this.canvas2d.strokeStyle = this.color;
    this.canvas2d.beginPath();
    this.canvas2d.arc(this.radius + this.stroke, this.radius + this.stroke, this.radius, this.startAngle, this.currentValue, false);
    this.canvas2d.stroke();

    
  }

  ngOnInit() 
  {
    this.canvas2d = this.canvas.nativeElement.getContext('2d');
    if (this.canvas2d == null) 
    {
      throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
    }
    this.drawValue(0.2);
  }

  }
