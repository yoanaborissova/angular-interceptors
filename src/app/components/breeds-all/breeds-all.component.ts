import { Component, OnInit } from '@angular/core';
import {CatModel} from '../../service/CatModel';
import {CatService} from '../../service/CatService';
import {BreedDTO} from '../../service/BreedDTO';

@Component({
  selector: 'app-breeds-all',
  templateUrl: './breeds-all.component.html',
  styleUrls: ['./breeds-all.component.css']
})
export class BreedsAllComponent implements OnInit {
  public breeds: BreedDTO[] = [];

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    this.catService.getBreeds()
      .subscribe(res => {
        this.breeds = res;
      });
  }
}
