import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { EntityState } from '@ngrx/entity';
import { HttpClient } from '@angular/common/http';
import {
  switchMap,
  distinctUntilChanged,
  share,
  map,
  filter,
  tap,
  startWith
} from 'rxjs/operators';
import {
  Store,
  State,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as entityReducer from './user.reducer';
import { User } from './user.model';
import { UpsertUsers } from './user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  entitySelectState = createFeatureSelector<EntityState<User>>('user');
  constructor(
    private httpClient: HttpClient,
    private entityStore: Store<State<User>>
  ) {}

  private httpClientGetUsers$(): Observable<User[]> {
    const usersFromApi$ = this.httpClient.get<User[]>(
      'https://api.github.com/users'
    );

    // return usersFromApi$.pipe(share());

    return usersFromApi$.pipe(
      switchMap((result: User[]) => {
        console.log('UserSearchService.httpClientGetUsers$');
        return of(result);
      })
      // distinctUntilChanged(),
      // share()
    );

    // return usersFromApi$;
  }

  public getUsers$(): Observable<User[]> {
    const selectAll$ = this.entityStore.select(
      createSelector(
        this.entitySelectState,
        entityReducer.selectAll
      )
    );

    const getFromApi$: Observable<User[]> = selectAll$.pipe(
      map((t: User[]) => {
        const result = t.length === 0;
        return result;
      }),
      filter((needDataFromApi: boolean) => needDataFromApi),
      switchMap(() => this.httpClientGetUsers$()),
      tap((tResponse: User[]) => {
        this.entityStore.dispatch(new UpsertUsers({ users: tResponse }));
      }),
      distinctUntilChanged(),
      startWith(null),
      share()
    );

    const tResult$ = this.observableReturnSecond$(getFromApi$, selectAll$);

    return tResult$;
  }

  private observableReturnSecond$ = <First, Second>(
    first$: Observable<First>,
    second$: Observable<Second>
  ): Observable<Second> =>
    combineLatest(first$, second$, (first, second) => second);
}
