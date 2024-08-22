import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component'; 
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component'; 
import { ContactComponent } from './components/pages/contact/contact.component'; 
import { HeaderComponent } from './components/partials/header/header.component'; 
import { NavComponent } from './components/partials/nav/nav.component'; 
import { ProjectCardComponent } from './components/partials/project-card/project-card.component'; 
import { ProjectModalComponent } from './components/partials/project-modal/project-modal.component'; 
import { CarouselComponent } from './components/partials/carousel/carousel.component';
import { ProjetProComponent } from './components/pages/projet-pro/projet-pro.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    NavComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    CarouselComponent,
    ProjetProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
