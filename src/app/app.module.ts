import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CatService} from './service/CatService';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BreedsAllComponent } from './components/breeds-all/breeds-all.component';
import { BreedDetailsComponent } from './components/breed-details/breed-details.component';
import {HeadersInterceptor} from './interceptors/HeadersInterceptor';
import { NavComponent } from './components/nav/nav.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsAllComponent,
    BreedDetailsComponent,
    NavComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
