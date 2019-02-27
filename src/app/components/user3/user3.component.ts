import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/services/user/user.interface';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.scss']
})
export class User3Component implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers$();
  }
}