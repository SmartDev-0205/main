import {NgModule} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMatDatetimePickerModule,NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { 
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatListModule,
  MatMenuModule,
  MatChipsModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatToolbarModule,
} from "@angular/material";

@NgModule({
  exports: [
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
