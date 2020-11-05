import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "./material-modules";
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "./layout/menu";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, MaterialModule, IonicModule, RouterModule],
  providers: [],
  declarations: [MenuComponent],
  exports: [ MenuComponent],
})
export class AppSharedModule {}
