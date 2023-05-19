import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo: "home",pathMatch: "full",},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "blog/create", component: BlogFormComponent},
  {path: "blog/edit/:id", component: BlogFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
