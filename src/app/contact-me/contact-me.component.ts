import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm:FormGroup|any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      name:["", [Validators.required, Validators.minLength(8)]],
      email:["",[Validators.required, Validators.email]],
      message:["",[Validators.required, Validators.minLength(12)]],
    })
  }
sendMessage(){
if (this.contactForm.valid==true){
  window.open('https://wa.me/' + 2215115721 + '?text=Hi Sebastian! My name is '+ this.contactForm.value.name + '. My email is '+ this.contactForm.value.email +'. I wanna contact you beacuse: ' + this.contactForm.value.message, '_blank');
}
}
}
