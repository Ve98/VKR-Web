import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
  mergeMap,
  filter,
  tap,
} from 'rxjs/operators';

import * as routerActions from 'src/app/shared/router/state/actions'
import * as actions from '../actions';

@Injectable()
export class MainListEffects {
  constructor(private actions$: Actions, private store$: Store) {}
}
