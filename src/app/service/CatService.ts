import {HttpClient, HttpParams} from '@angular/common/http';
import {CatModel} from './CatModel';
import {Observable} from 'rxjs';
import {Constants} from './Constants';
import {BreedDTO} from './BreedDTO';
import {BreedModel} from './BreedModel';
import {FavouriteRequest} from './FavouriteRequest';

export class CatService {
  constructor(
    private http: HttpClient
  ) {

  }

  getCat(breedId: string = ''): Observable<CatModel> {
    return this.http.get<CatModel>(Constants.API + 'images/search', {
      headers: {
        'x-api-key': '3fb9f7fd-1059-4eeb-bb27-e8078f970c0b'
      },
      params: new HttpParams()
        .append('breed_id', breedId)
    });
  }

  getBreeds(): Observable<BreedDTO[]> {
    return this.http.get<BreedDTO[]>(Constants.API + 'breeds', {
      headers: {
        'x-api-key': '3fb9f7fd-1059-4eeb-bb27-e8078f970c0b'
      }
    });
  }

  getBreedById(breedId: string): Observable<BreedModel[]> {
    return this.http.get<BreedModel[]>(Constants.API + 'breeds/search', {
      headers: {
        'x-api-key': '3fb9f7fd-1059-4eeb-bb27-e8078f970c0b'
      },
      params: new HttpParams()
        .append('q', breedId)
    });
  }

  addToFavourites(request: FavouriteRequest) {
    return this.http.post(Constants.API + 'favourites',
      request,
      {
      headers: {
        'x-api-key': '3fb9f7fd-1059-4eeb-bb27-e8078f970c0b'
      }
    });
  }

  getFavourites(): Observable<any> {
    return this.http.get<any[]>(Constants.API + 'favourites',
      {
        headers: {
          'x-api-key': '3fb9f7fd-1059-4eeb-bb27-e8078f970c0b'
        }
      });
  }
}
