import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule }from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { ConsulterParentComponent } from './consulter-parent/consulter-parent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ConsulterComponent,
    LoginComponent,
    CreateComponent,
    ModifyComponent,
    ConsulterParentComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
