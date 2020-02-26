import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';
import { CountriesListComponent } from './shared/components/countries-list/countries-list.component';
import { CountryComponent } from './shared/components/country/country.component';


const routes: Routes = [
  {path : '', redirectTo : '/main', pathMatch : 'full'},
  {path : 'main', component : MainComponent},
  {path : 'list', component : CountriesListComponent},
  {path : 'list/:name', component : CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
