import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from './user.interface';
import { distinctUntilChanged, share, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers$(): Observable<IUser[]> {
    // return this.httpClient
    //   .get<IUser[]>('https://api.github.com/users')
    //   .pipe(share());

    return this.httpClient.get<IUser[]>('https://api.github.com/users').pipe(
      switchMap((result: IUser[]) => {
        console.log('UserService.getUsers$');
        return of(result);
      }),
      distinctUntilChanged(),
      share()
    );
  }
}
