import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { TeamInviteService } from 'src/app/services/team-invite.service';
import { MenuController } from '@ionic/angular';
import { toUnicode } from 'punycode';
@Component({
  selector: 'app-team-invite',
  templateUrl: './team-invite.page.html',
  styleUrls: ['./team-invite.page.scss'],
})
export class TeamInvitePage implements OnInit {
  private isDisabled = false;
  private currentTeamInvite;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamInviteService:TeamInviteService,
    private menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(false);
   }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    let teamInvite = await this.teamInviteService.getTeamInvite(id);
    if(!teamInvite)
      this.router.navigateByUrl("/project/list");
    let status = teamInvite.status;
    this.currentTeamInvite = teamInvite;
    delete (this.currentTeamInvite as any).__typename;
    delete (this.currentTeamInvite as any).createdAt;
    delete (this.currentTeamInvite as any).user;
    delete (this.currentTeamInvite as any).updatedAt;
    if(status == "pending")    
      this.isDisabled = false;
    else
      this.isDisabled = true;
  }
  accept(){
    
    this.currentTeamInvite.status = "Accepted";
    this.isDisabled = true;
    delete (this.currentTeamInvite as any).__typename;
    delete (this.currentTeamInvite as any).team;
    delete (this.currentTeamInvite as any).user;
    console.log(this.currentTeamInvite);
    this.teamInviteService.updateTeamInvite(this.currentTeamInvite);
  }
  reject(){
    console.log(this.currentTeamInvite);
    this.currentTeamInvite.status = "Rejected";
    this.isDisabled = true;
    this.teamInviteService.updateTeamInvite(this.currentTeamInvite);
  }
}
