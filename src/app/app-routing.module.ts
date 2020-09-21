import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';


const routes: Routes = [
  { path:'list', component:CustomerListComponent },
  { path:'cities', component:CitiesComponent },
  { path:'grid', component:GridViewComponent },
  { path:'', redirectTo:'grid', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
