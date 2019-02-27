import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserSearchService } from './../../state/user/user-search.service';
import { UserService } from './../../services/user/user.service';
import { User } from './../../state/user/user.model';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.scss']
})
export class User3Component implements OnInit {
  public users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private userSearchService: UserSearchService
  ) {}

  ngOnInit() {
    // this.users$ = this.userService.getUsers$();
    this.users$ = this.userSearchService.getUsers$();
  }
}
