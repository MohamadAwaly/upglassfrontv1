import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatNativeDateModule} from "@angular/material/core";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSortModule} from "@angular/material/sort";
import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";


const MATERIALS = [
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatSliderModule,
  MatInputModule,
  MatRadioModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatChipsModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatListModule,
];

@NgModule({
  imports: [MATERIALS],
  exports: [MATERIALS]
})
export class MaterialModule {
}
