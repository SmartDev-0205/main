import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private selectedProjectId;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.selectedProjectId = params['id']; 
      this.router.navigateByUrl("project/" + this.selectedProjectId + "/file");
   });
  }
  

}
