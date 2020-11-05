import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {GuardLoggedInToMainMenu, GuardUnauthorizedToSignin} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "translator",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule),
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
    path: "forgotten-password",
    loadChildren: () =>
      import("./pages/signin/forgotten-password/forgotten-password.module").then(
        m => m.ForgottenPasswordPageModule
      ),
    canActivate: [GuardLoggedInToMainMenu]
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module').then( m => m.ProjectPageModule),
    canActivate: [GuardUnauthorizedToSignin]
    
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./pages/project/detail/detail.module').then( m => m.DetailPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'job/:id',
    loadChildren: () => import('./pages/project/job/job.module').then( m => m.JobPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  
  {
    path: 'invite',
    loadChildren: () => import('./pages/email/invite/invite.module').then( m => m.InvitePageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then( m => m.InboxPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'trans-Memory',
    loadChildren: () => import('./pages/trans-memory/trans-memory.module').then( m => m.TransMemoryPageModule)
  },
  {
    path: 'translator',
    loadChildren: () => import('./pages/home/translator/translator.module').then( m => m.TranslatorPageModule)
  },
  {
    path: 'transcriber',
    loadChildren: () => import('./pages/home/transcriber/transcriber.module').then( m => m.TranscriberPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/home/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
