import { Component, OnInit } from '@angular/core';
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  visibleSingUp: boolean = false;

  constructor() { }

  ngOnInit() {}

  private toggleVisibleSignUp(): void {
    this.visibleSingUp = !this.visibleSingUp;
  }
}
