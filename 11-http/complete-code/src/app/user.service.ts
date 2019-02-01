import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Observable } from 'rxjs';

export const USER_URL = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject(USER_URL) private apiUrl: string
  ) { }

  /**
   *
   *
   * @returns {Observable<User[]>}
   * @memberof UserService
   */
  public getUser(): Observable<User[]> {
    return this.http.get(`${this.apiUrl}/users`)
    .pipe(
      map(({data}: {data: any[]}) => data.map((d) => new User(d.id, d.first_name, d.last_name, d.avatar)))
    );
  }
}
