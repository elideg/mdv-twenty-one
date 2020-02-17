import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  DOGS_FEATURE_KEY,
  dogsAdapter,
  DogsPartialState,
  DogsState
} from './dogs.reducer';

// Lookup the 'Dogs' feature state managed by NgRx
export const selectDogsState = createFeatureSelector<
  DogsPartialState,
  DogsState
>(DOGS_FEATURE_KEY);

const { selectAll, selectEntities } = dogsAdapter.getSelectors();

export const selectDogsLoading = createSelector(
  selectDogsState,
  (state: DogsState) => state.isLoading
);

export const selectAllDogs = createSelector(
  selectDogsState,
  (state: DogsState) => selectAll(state)
);

export const selectDogsEntities = createSelector(
  selectDogsState,
  (state: DogsState) => selectEntities(state)
);

export const selectDogId = createSelector(
  selectDogsState,
  (state: DogsState) => state.selectedDogId
);

export const selectDog = createSelector(
  selectDogsEntities,
  selectDogId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
