import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user/user.service';
import { Observable } from 'rxjs';
import { UserSearchService } from '@app/state/user/user-search.service';
import { User } from '@app/state/user/user.model';

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
