import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {

  private firstName = "";
  private lastName = "";
  private email = "";
  private mangerId = "";
  constructor(
    private clientService:ClientService,
    private userService:UserService,
    private dialogRef: MatDialogRef<AddClientComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) 
  {

  }
  async ngOnInit() {
    this.userService.id.subscribe(id=>this.mangerId =  id);
  }
  async add(){
    if(!this.mangerId)
      return;
    let profile = {
      givenName:this.firstName,
      familyName:this.lastName,
      email:this.email
    }
    let newClient ={
      managerId:this.mangerId,
      profile:profile
    }
    this.clientService.createManagerClient(newClient).then(newCreatedClient=>{
      this.dialogRef.close(newCreatedClient);
    })
  }
  close(){
    this.dialogRef.close();
  }
}
