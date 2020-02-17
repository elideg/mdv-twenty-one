import { DogsFacade } from './../../../../../../libs/core-state/src/lib/dogs/dogs.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '@mdv-twenty-one/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-one-dogs-item',
  templateUrl: './dogs-item.component.html',
  styleUrls: ['./dogs-item.component.scss']
})
export class DogsItemComponent implements OnInit {
  dogs$: Observable<Dog>;

  constructor(
    private route: ActivatedRoute,
    private dogsFacade: DogsFacade
  ) { }

  ngOnInit() {
    this.dogsFacade.loadDogs();
    this.route.params.subscribe((param) => this.dogsFacade.selectDog(param['id']));
    this.dogs$ = this.dogsFacade.selectedDog$
  }

}
