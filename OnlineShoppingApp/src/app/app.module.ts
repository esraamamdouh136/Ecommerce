import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductComponent } from './components/shared/product/product.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from'@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './components/shared/shared-routing.module';
import {AccountRoutingModule} from './components/account/account-routing.module';
import { LoginComponent } from './components/account/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent, HeaderComponent ,
    LoginComponent,
    ProductComponent,
    

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule , 
    RouterModule.forRoot([]),
    SharedRoutingModule,
    AccountRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
