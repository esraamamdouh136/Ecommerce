import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './shared/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
