import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolve implements Resolve<any> {

  constructor(
    private userService: UserService,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return of(true).pipe(
      delay(1000),
      map(() => this.userService.userById(parseInt(id, 10)))
    );
  }
}
