import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "src/app/services/auth.service";
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: "menu",
  templateUrl: "./menu.html",
  styleUrls: ["./menu.scss"]
})
export class MenuComponent implements OnInit {

  appPages: any = [
    {
      title: "Projects",
      url: "/projects",
      icon: "document"
    },
    {
      title: "Add Project",
      url: "/projects/add",
      icon: "add-circle"
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "person"
    }
  ];

  constructor(
    private router: Router,
    private auth: AuthService,
    public user: UserService  
  ) {}

  ngOnInit() {
  }

  public async signOut() {
    await this.auth.signOut();
    this.router.navigateByUrl("/signin");
  }

}
