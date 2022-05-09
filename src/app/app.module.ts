import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DirectivesComponent } from './Notes/directives.component';
import { BasicBorderDirective } from './Notes/basic-border.directive';
import { ClickDirective } from './Notes/click.directive';
import { HomeComponent } from './Pages/home.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent}, 
  {path: "directive", component: DirectivesComponent }
]

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(appRoutes), ],
  exports: [RouterModule],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    DirectivesComponent, 
    HomeComponent,
    BasicBorderDirective,
    ClickDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
