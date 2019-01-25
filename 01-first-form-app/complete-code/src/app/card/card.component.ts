import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() {
  }

  ngOnInit() {

  }

  voteUp() {
    this.card.voteUp();
    return false;
  }

  voteDown() {
    this.card.voteDown();
    return false;
  }

}
