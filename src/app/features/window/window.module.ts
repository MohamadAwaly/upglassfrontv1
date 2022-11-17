import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsComponent } from './windows/windows.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material.module";
import { NewWindowComponent } from './new-window/new-window.component';
import {RouterModule} from "@angular/router";
import { WindowEditComponent } from './window-edit/window-edit.component';
import {WINDOW_ROUTES} from "./window.routes";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    WindowsComponent,
    NewWindowComponent,
    WindowEditComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, RouterModule.forChild(WINDOW_ROUTES), FlexModule
  ]
})
export class WindowModule { }
