import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';
import { UserSearchService } from 'src/app/state/user/user-search.service';
import { User } from 'src/app/state/user/user.model';

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
