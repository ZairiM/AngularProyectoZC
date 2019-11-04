import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { NotFOundComponent } from './not-found/not-found.component';
import { GitSearchUserComponent } from './git-search-user/git-search-user.component';


const routes: Routes = [
  {path: '',
    component: HomeComponent},
    {path: 'search',
   redirectTo: '/search/angular',
  pathMatch: 'full'},
    {path:'search/:query',
   component: GitSearchComponent,
   data:{
     title: 'Busqueda'
   }},
   {path:'searchUser', redirectTo: '/searchUser/ZairiM', pathMatch: 'full'},
   {path:'searchUser/:query', component: GitSearchUserComponent},
   {path:'**', component: NotFOundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }