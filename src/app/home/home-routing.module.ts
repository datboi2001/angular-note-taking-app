import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewComponent} from "./new/new.component";
const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
}, {
  path: 'new',
  component: NewComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
