import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

import { ShowComponent } from './show/show.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
const routes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path:'form', component:DynamicFormComponent},
  {path:'show/:id', component:ShowComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }