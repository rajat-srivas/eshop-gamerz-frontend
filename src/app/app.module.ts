import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { TrendingComponent } from './trending/trending.component';
import { GameCardComponent } from './game-card/game-card.component';
import { ServicesComponent } from './services/services.component';
import { ConsoleComponent } from './console/console.component';
import { GameFlexComponent } from './game-flex/game-flex.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      SliderComponent,
      TrendingComponent,
      GameCardComponent,
      ServicesComponent,
      ConsoleComponent,
      GameFlexComponent,
      FooterComponent,
      HomeComponent,
      ProductsComponent,
      AuthComponent,
      RegisterComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
