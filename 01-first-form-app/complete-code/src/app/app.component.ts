import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cards: Card[] = [];

  public cardSorts() {
    return this.cards.sort((a, b) => b.votes - a.votes);
  }

  public addName(firstName: HTMLInputElement, lastName: HTMLInputElement): boolean {
    this.cards.push(new Card(firstName.value, lastName.value, 0));
    firstName.value = '';
    lastName.value = '';
    return false;
  }
}
