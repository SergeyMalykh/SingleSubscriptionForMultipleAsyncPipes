import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, share, tap, switchMap } from 'rxjs/operators';

import { User } from './../../state/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers$(): Observable<User[]> {
    // return this.httpClient
    //   .get<IUser[]>('https://api.github.com/users')
    //   .pipe(share());

    return this.httpClient.get<User[]>('https://api.github.com/users').pipe(
      switchMap((result: User[]) => {
        console.log('UserService.getUsers$');
        return of(result);
      }),
      distinctUntilChanged(),
      share()
    );
  }
}
