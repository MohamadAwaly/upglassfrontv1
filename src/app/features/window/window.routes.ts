import {Routes} from "@angular/router";
import {WindowsComponent} from "./windows/windows.component";
import {NewWindowComponent} from "./new-window/new-window.component";
import {WindowEditComponent} from "./window-edit/window-edit.component";


export const WINDOW_ROUTES: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: WindowsComponent},
  {path: 'new', component: NewWindowComponent},


];
