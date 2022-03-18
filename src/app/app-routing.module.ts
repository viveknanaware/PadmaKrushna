import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: 'Contact', component: ContactComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'About', component: AboutusComponent },
{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
