import {Routes} from "@angular/router";
import {WindowsComponent} from "./features/window/windows/windows.component";


export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'windows',component: WindowsComponent},

]
