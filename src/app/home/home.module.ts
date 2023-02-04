import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { NewComponent } from './new/new.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule

  ],
  exports: [
    HomeRoutingModule,
    //HomeComponent
  ]
})
export class HomeModule { }
