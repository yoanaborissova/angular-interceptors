import { Component, OnInit } from '@angular/core';
import {CatService} from '../../service/CatService';
import {CatModel} from '../../service/CatModel';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  public cats: CatModel[] = [];

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    this.catService.getFavourites()
      .subscribe(res => {
        console.log(res);
        this.cats = res.map(r => r.image);
      });
  }

}
