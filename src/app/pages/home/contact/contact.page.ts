import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private router:Router
  ) { }
  private firstName = "";
  private lastName = "";

  ngOnInit() {
  }
  goto(url){
    this.router.navigateByUrl("/" + url)
  }
}
