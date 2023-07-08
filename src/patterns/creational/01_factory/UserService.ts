import { UserFactory, UserTypes } from "./UserFactory";

export class UserService {
  getSalaryByUser(user: UserTypes) {
    return UserFactory.getStaffInstance(user).getSalary();
  }
}
