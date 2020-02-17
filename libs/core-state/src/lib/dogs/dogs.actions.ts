import { createAction, props } from '@ngrx/store';

import { Dog } from '@mdv-twenty-one/core-data';

export const dogSelected = createAction(
  '[DOG] Dog Selected',
  props<{ selectedDogId: string }>()
);

// Load Actions
export const loadDogs = createAction('[DOG] Load Dogs');

export const dogsLoaded = createAction(
  '[DOG] Dogs Loaded',
  props<{ dogs: Dog[] }>()
);

// Create Actions
export const createDog = createAction(
  '[DOG] Create Dog',
  props<{ dog: Dog }>()
);

export const dogCreated = createAction(
  '[DOG] Dog Created',
  props<{ dog: Dog }>()
);

// Update Actions
export const updateDog = createAction(
  '[DOG] Update Dog',
  props<{ dog: Dog }>()
);

export const dogUpdated = createAction(
  '[DOG] Dog Updated',
  props<{ dog: Dog }>()
);

// Delete Actions
export const deleteDog = createAction(
  '[DOG] Delete Dog',
  props<{ dog: Dog }>()
);

export const dogDeleted = createAction(
  '[DOG] Dog Deleted',
  props<{ dog: Dog }>()
);
