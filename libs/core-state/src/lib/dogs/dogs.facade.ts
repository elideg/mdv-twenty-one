import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromDogs from './dogs.reducer';
import * as dogsActions from './dogs.actions';
import * as dogsSelectors from './dogs.selectors';
import { Dog } from '@mdv-twenty-one/core-data';

@Injectable({
  providedIn: 'root'
})
export class DogsFacade {
  allDogs$ = this.store.pipe(select(dogsSelectors.selectAllDogs));
  selectedDog$ = this.store.pipe(select(dogsSelectors.selectDog));
  dogLoading$ = this.store.pipe(select(dogsSelectors.selectDogsLoading));

  constructor(private store: Store<fromDogs.DogsPartialState>) {}

  selectDog(selectedDogId: string) {
    this.dispatch(dogsActions.dogSelected({ selectedDogId }));
  }

  loadDogs() {
    this.dispatch(dogsActions.loadDogs());
  }

  createDog(dog: Dog) {
    this.dispatch(dogsActions.createDog({ dog }));
  }

  updateDog(dog: Dog) {
    this.dispatch(dogsActions.updateDog({ dog }));
  }

  deleteDog(dog: Dog) {
    this.dispatch(dogsActions.deleteDog({ dog }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
