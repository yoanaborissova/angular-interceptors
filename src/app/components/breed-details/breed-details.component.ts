import { Component, OnInit } from '@angular/core';
import {CatModel} from '../../service/CatModel';
import {CatService} from '../../service/CatService';
import {BreedModel} from '../../service/BreedModel';
import {ActivatedRoute} from '@angular/router';
import {FavouriteRequest} from '../../service/FavouriteRequest';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css']
})
export class BreedDetailsComponent implements OnInit {
  public cat: CatModel = new CatModel();
  public breed: BreedModel;
  public favoriteRequest: FavouriteRequest = new FavouriteRequest();
  public favourited = false;

  constructor(
    private catService: CatService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBreedById();
    this.getCatByBreed();
  }

  getBreedById() {
    this.catService.getBreedById(this.route.snapshot.params.id)
      .subscribe(res => this.breed = res[0]);
  }

  getCatByBreed() {
    this.catService.getCat(this.route.snapshot.params.id)
      .subscribe(res => this.cat = res[0]);
  }

  addToFavourites() {
    this.favoriteRequest.image_id = this.cat.id;
    this.catService.addToFavourites(this.favoriteRequest)
      .subscribe(res => {
        this.favourited = true;
      });
  }

}
