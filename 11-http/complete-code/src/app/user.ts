export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public avatarUrl: string
  ) { }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}
