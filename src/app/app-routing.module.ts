import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ConsulterParentComponent } from './consulter-parent/consulter-parent.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifyComponent } from './modify/modify.component';


const routes: Routes = [
  {component:HomeComponent,path:'home'},
  {component:AddComponent,path:'add'},
  {component:ConsulterParentComponent,path:'consulter'},
  {component:LoginComponent,path:'login'},
  {component:HomeComponent,path:''},
  {component:CreateComponent,path:'create'},
  {component:ModifyComponent,path:'modify/:id'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
