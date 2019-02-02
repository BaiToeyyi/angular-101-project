import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, last , tap, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // public users: User[] = [];

  public form: FormGroup;
  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public query: string;

  constructor(
    public userService: UserService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      first_name: [''],
      last_name: ['']
    });
  }

  public onSubmit(form: FormGroup) {
    // const { first_name, last_name } = form.value;
    of(form.value)
    .pipe(
      filter((value: any) => value.first_name && value.last_name),
      switchMap((value) => this.userService.create(value.first_name, value.last_name)),
      tap(() => this.form.reset())
    ).subscribe({
      next: (user: User) => {
        const users = this.users$.getValue();
        this.users$.next([...users, user]);
      }
    });
    // this.userService.create(first_name, last_name)
    // .pipe(
    //   tap(() => this.form.reset())
    // )
    // .subscribe({
    //   next: (user: User) => {
    //     const users = this.users$.getValue();
    //     this.users$.next([...users, user]);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // });
  }
}
