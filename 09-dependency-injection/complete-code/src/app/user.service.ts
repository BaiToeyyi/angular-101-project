import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user() {
    console.log('AccountService =>>>>');
  }
}

export class UserService3 {
  user() {
    console.log('UserService 3 =>>>>');
  }
}

export const UserFactory = () => {
  return new UserService3();
};

export const UserFactoryDeps = (http: HttpClient) => {
  console.log(!!http);
  return new UserService3();
};

export class UserService2 {
  user() {
    console.log('UserService 2 =>>>>');
  }
}
// UserService2
// @Injectable({
//   providedIn: 'root',
//   useClass: UserService2
// })
// UserService3
// @Injectable({
//   providedIn: 'root',
//   useFactory: UserFactory
// })
// UserService3 with deps
// @Injectable({
//   providedIn: 'root',
//   useFactory: UserFactory,
//   deps: [HttpClient]
// })
// UseValue
// @Injectable({
//   providedIn: 'root',
//   useValue: {
//     user: function() {
//       console.log('UserService useValue');
//     }
//   }
// })
// useExisting
@Injectable({
  providedIn: 'root',
  useExisting: AccountService
})
export class UserService {
  user() {
    console.log('UserService =>>>');
  }
}
