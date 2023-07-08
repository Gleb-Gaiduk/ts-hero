import { IStaff } from "./IStaff";

export class Manager implements IStaff {
  id: string;

  constructor() {
    this.id = Date.now().toString();
  }

  getSalary(): string {
    return "I'm paid too much!";
  }
}
