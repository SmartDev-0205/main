import {Component, OnInit, Input} from "@angular/core";

import {ProlocalizeDB} from 'src/app/services/prolocalize-database.service';

@Component({
  selector: "project-card",
  templateUrl: "./project-card.html",
  styleUrls: ["./project-card.css"]
})
export class ProjectCard implements OnInit {
  @Input() projectDetails: any;

  clientName: string;

  constructor(
    private prolocalizeDB: ProlocalizeDB
  ) {}

  async ngOnInit() {
    // if (!this.prolocalizeDB.getCurrentUserNames()[this.projectDetails.clientID]) {
    //   this.prolocalizeDB
    //     .getUserName(this.projectDetails.clientID)
    //     .then(name => (this.clientName = name));
    // } else {
    //   this.clientName = this.getCurrentUserNames()[
    //     this.projectDetails.clientID
    //   ];
    // }
  }

}
