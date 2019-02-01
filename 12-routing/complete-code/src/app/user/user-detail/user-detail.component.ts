import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot);
    this.route.queryParamMap.subscribe({
      next: (a) => {
        console.log(a);
      }
    });
    this.route.paramMap.subscribe({
      next: (a) => {
        console.log(a);
      }
    });
    this.route.data.subscribe({
      next: (a) => {
        console.log(a);
      }
    });
    this.route.data.subscribe({
      next: ({user}: {user: User}) => {
        this.user = user;
      }
    });
    // this.route.paramMap.subscribe({
    //   next: (param: ParamMap) => {
    //     const id = parseInt(param.get('id'), 10);
    //     const user = this.userService.userById(id);
    //     console.log(user);
    //   }
    // });
  }

}
