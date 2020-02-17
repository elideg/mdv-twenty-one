import { ActionReducerMap } from '@ngrx/store';

import * as fromDogs from './dogs/dogs.reducer';

export interface AppState {
  dogs: fromDogs.DogsState;
}

export const reducers: ActionReducerMap<AppState> = {
  dogs: fromDogs.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
