import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { myRoutes } from "./app.routes";

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http'
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, myRoutes
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
