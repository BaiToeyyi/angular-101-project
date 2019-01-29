export class Card {
  public firstName: string;
  public lastName: string;
  public votes: number;
  constructor(firstName: string, lastName: string, votes?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.votes = votes || 0;
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  upvote() {
    this.votes++;
  }
  downvote() {
    this.votes--;
  }
}
