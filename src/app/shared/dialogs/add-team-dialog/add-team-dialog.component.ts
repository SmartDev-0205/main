import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.scss'],
})
export class AddTeamDialogComponent implements OnInit {

  private newTeamName = "";
  constructor(
    private dialogRef: MatDialogRef<AddTeamDialogComponent>,
    private  teamService:TeamService,
    @Inject(MAT_DIALOG_DATA) data
    ) 
  {}
  ngOnInit() {}
  async add(){
    if(this.newTeamName != ""){
      this.dialogRef.close();
      await this.teamService.addTeam(this.newTeamName);
    }
      
  }
  close(){
    this.dialogRef.close();
  }
}
