import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
    [
      {path:'', component: HomeComponent},
      {path:'page1', component: Page1Component}
    ]
  ) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, Page1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
