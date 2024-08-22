import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'; 
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component'; 
import { ContactComponent } from './components/pages/contact/contact.component'; 
import { ProjetProComponent } from './components/pages/projet-pro/projet-pro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projetPro', component: ProjetProComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
