import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsComponent } from './windows/windows.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material.module";
import { NewWindowComponent } from './new-window/new-window.component';


@NgModule({
  declarations: [
    WindowsComponent,
    NewWindowComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MaterialModule
  ]
})
export class WindowModule { }
