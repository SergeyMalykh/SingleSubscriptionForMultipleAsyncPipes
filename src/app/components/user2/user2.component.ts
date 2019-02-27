import { UserSearchService } from './../../state/user/user-search.service';
import { UserService } from './../../services/user/user.service';
import { User } from './../../state/user/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss']
})
export class User2Component implements OnInit {
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
