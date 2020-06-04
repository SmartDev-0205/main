import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {GuardLoggedInToMainMenu, GuardUnauthorizedToSignin} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then(
        m => m.ProfilePageModule
      ),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./pages/projects/list/list-projects.module").then(m => m.ListProjectsPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: "projects/add",
    loadChildren: () =>
      import("./pages/projects/add/add-project.module").then(m => m.AddProjectPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./pages/signin/signin.module").then(m => m.SigninPageModule),
    canActivate: [GuardLoggedInToMainMenu]
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then(m => m.SignupPageModule),
    canActivate: [GuardLoggedInToMainMenu]
  },
  {
    path: "signin/forgotten-password",
    loadChildren: () =>
      import("./pages/signin/forgotten-password/forgotten-password.module").then(
        m => m.ForgottenPasswordPageModule
      ),
    canActivate: [GuardLoggedInToMainMenu]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
