import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

import {AmplifyAngularModule, AmplifyService} from "aws-amplify-angular";
import {MaterialModule} from "./shared/material-modules";
import {AppSharedModule} from "./shared/app-shared-module";
import { HttpModule } from '@angular/http';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AmplifyAngularModule,
    MaterialModule,
    AppSharedModule,
    HttpModule,
  ],
  providers: [
    ChatService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
