import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SharedComponent, NavbarComponent, HomeComponent, HeaderComponent, ProductComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedComponent,
    CommonModule
  ]    
})
export class SharedModule { }
