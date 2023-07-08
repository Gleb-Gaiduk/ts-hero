import { IStaff } from "./IStaff";

export class Developer implements IStaff {
  id: string;

  constructor() {
    this.id = Date.now().toString();
  }

  getSalary(): string {
    return "I'm under paid!";
  }
}
