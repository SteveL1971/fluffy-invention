import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CvComponent } from './views/cv/cv.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
