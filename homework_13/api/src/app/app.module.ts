import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { myRoutes } from "./app.routes";

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http'
import { DataService } from './data.service';
import { ErrorComponent } from './error.component';
 

@NgModule({
  declarations: [
    AppComponent, ErrorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, myRoutes
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
