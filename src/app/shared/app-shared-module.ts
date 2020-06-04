import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedDialogs} from "./dialogs/shared-dialog";
import {MaterialModule} from "./material-modules";
import {IonicModule} from "@ionic/angular";
import {SharedComponents} from "./components/shared-components.module";
import {MenuComponent} from "./layout/menu";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, MaterialModule, IonicModule, RouterModule],
  providers: [],
  declarations: [...SharedDialogs, ...SharedComponents, MenuComponent],
  exports: [...SharedDialogs, ...SharedComponents, MenuComponent],
  entryComponents: [...SharedDialogs]
})
export class AppSharedModule {}
