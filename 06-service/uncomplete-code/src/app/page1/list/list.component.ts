import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
