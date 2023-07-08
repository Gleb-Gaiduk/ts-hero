import { IStaff } from "./IStaff";

export class NullStaff implements IStaff {
  id: string;

  constructor() {
    this.id = Date.now().toString();
  }

  getSalary(): string {
    return "Invalid user type";
  }
}
