import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.page.html',
  styleUrls: ['./workflow.page.scss'],
})
export class WorkflowPage implements OnInit {

  private projectId;
  constructor() { }

  ngOnInit() {
    this.getProjectId();
  }
  getProjectId(){
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/file');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
  }


}
