export class Card {
  firstName: string;
  lastName: string;
  votes: number;
  constructor(firstName: string, lastName: string, votes?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.votes = votes || 0;
  }

  get name(): string {
    return this.firstName + ' ' + this.lastName;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }
}
