import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/modules/material.module";
import {HeaderComponent} from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {SideNavComponent} from "./features/sidnav/side-nav/side-nav.component";
import {WindowModule} from "./features/window/window.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    WindowModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
