import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { switchMap, distinctUntilChanged, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
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
