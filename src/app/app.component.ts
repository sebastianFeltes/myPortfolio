import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zombieDev';

  @ViewChild('aboutMe')aboutMe:ElementRef|any;
  @ViewChild('skills')skills:ElementRef|any;
  @ViewChild('myWork')myWork:ElementRef|any;
  @ViewChild('contactMe')contactMe:ElementRef|any;

}



