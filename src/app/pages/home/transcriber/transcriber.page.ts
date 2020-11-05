import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transcriber',
  templateUrl: './transcriber.page.html',
  styleUrls: ['./transcriber.page.scss'],
})
export class TranscriberPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {

  }
  goto(url){
    this.router.navigateByUrl("/" + url)
  }
}
