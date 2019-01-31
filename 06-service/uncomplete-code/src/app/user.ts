export class User {
  constructor(
    public firstName: string,
    public lastName: string
  ) {

  }

  get name(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
