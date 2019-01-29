import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];

  public addName(firstName: HTMLInputElement, lastName: HTMLInputElement): boolean {
    // alert(`Name : ${firstName.value} ${lastName.value}`);
    const card = new Card(firstName.value, lastName.value);
    this.cards.push(card);
    firstName.value = '';
    lastName.value = '';
    return false;
  }

  sort() {
    return this.cards.sort((a, b) => b.votes - a.votes);
  }
}
