import {Routes} from "@angular/router";


export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'window', pathMatch: 'full'},
  {path: 'window', loadChildren: () => import('./features/window/window.module').then(m => m.WindowModule)},
  // {path: 'windows',component: WindowsComponent},

]
