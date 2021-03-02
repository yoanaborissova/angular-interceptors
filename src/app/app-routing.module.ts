import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BreedsAllComponent} from './components/breeds-all/breeds-all.component';
import {BreedDetailsComponent} from './components/breed-details/breed-details.component';
import {FavouritesComponent} from './components/favourites/favourites.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: BreedsAllComponent},
  {path: 'breeds/:id', component: BreedDetailsComponent},
  {path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
