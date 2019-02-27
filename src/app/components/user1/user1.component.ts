import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserSearchService } from './../../state/user/user-search.service';
import { UserService } from './../../services/user/user.service';
import { User } from './../../state/user/user.model';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss']
})
export class User1Component implements OnInit {
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
