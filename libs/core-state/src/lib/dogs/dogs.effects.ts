import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as dogsActions from './dogs.actions';
import { Dog, DogsService } from '@mdv-twenty-one/core-data';
import { DogsPartialState } from './dogs.reducer';

@Injectable()
export class DogsEffects {
  loadDogs$ = createEffect(() =>
    this.dataPersistence.fetch(dogsActions.loadDogs, {
      run: (
        action: ReturnType<typeof dogsActions.loadDogs>,
        state: DogsPartialState
      ) => {
        return this.dogsService.all().pipe(
          map((dogs: Dog[]) => dogsActions.dogsLoaded({ dogs }))
        );
      },
      onError: (action: ReturnType<typeof dogsActions.loadDogs>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addDog$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(dogsActions.createDog, {
      run: (
        action: ReturnType<typeof dogsActions.createDog>,
        state: DogsPartialState
      ) => {
        return this.dogsService.create(action.dog).pipe(
          map((dog: Dog) => dogsActions.dogCreated({ dog })),
          tap(() => this.notify.notify('Successfully added a dog'))
        );
      },
      onError: (action: ReturnType<typeof dogsActions.createDog>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateDog$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(dogsActions.updateDog, {
      run: (
        action: ReturnType<typeof dogsActions.updateDog>,
        state: DogsPartialState
      ) => {
        return of(action.dog).pipe(
          map((dog: Dog) => dogsActions.dogUpdated({ dog })),
          tap(() => this.notify.notify('Successfully updated a dog'))
        );
      },
      onError: (action: ReturnType<typeof dogsActions.updateDog>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteDog$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(dogsActions.deleteDog, {
      run: (
        action: ReturnType<typeof dogsActions.deleteDog>,
        state: DogsPartialState
      ) => {
        return of(action.dog).pipe(
          map((dog: Dog) => dogsActions.dogDeleted({ dog })),
          tap(() => this.notify.notify('Successfully deleted a dog'))
        );
      },
      onError: (action: ReturnType<typeof dogsActions.deleteDog>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DogsPartialState>,
    private dogsService: DogsService,
    private notify: NotifyService
  ) {}
}
