import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input()aboutMe:any;
@Input()skills:any;
@Input()myWork:any;
@Input()contactMe:any;
  constructor() { }

  ngOnInit(): void {

  }

  scrollToAboutMe(){
    this.aboutMe.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline:'nearest'
    })
    $('.personalPhoto').css({'animation-name':'photoAnimation'});
    $('.skillsCard').css({'animation-name':'none'});
    $('.myWorkCard').css({'animation-name':'none'});
    $('.contactCard').css({'animation-name':'none'});


  }
  scrollToMySkills(){
    this.skills.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline:'nearest'
    })
    $('.personalPhoto').css({'animation-name':'none'});
    $('.skillsCard').css({'animation-name':'skillsCardAnimation'});
    $('.myWorkCard').css({'animation-name':'none'});
    $('.contactCard').css({'animation-name':'none'});


  }  scrollToMyWork(){
    this.myWork.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline:'nearest'
    })
    $('.personalPhoto').css({'animation-name':'none'});
    $('.skillsCard').css({'animation-name':'none'});
    $('.myWorkCard').css({'animation-name':'myWorkAnimation'});
    $('.contactCard').css({'animation-name':'none'});


  }  scrollToContactMe(){
    this.contactMe.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline:'nearest'
    })
    $('.personalPhoto').css({'animation-name':'none'});
    $('.skillsCard').css({'animation-name':'none'});
    $('.myWorkCard').css({'animation-name':'none'});
    $('.contactCard').css({'animation-name':'contactAnimation'});

  }
}
