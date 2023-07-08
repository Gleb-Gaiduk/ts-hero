import { Developer } from "./Developer";
import { Manager } from "./Manager";

const userMap = {
  manager: Manager,
  dev: Developer,
};

export type UserTypes = keyof typeof userMap;
export type UserEntities = (typeof userMap)[UserTypes];
export type ExtractInstanceType<T> = T extends new () => infer R ? R : never;

export class UserFactory {
  static getStaffInstance(
    userType: UserTypes
  ): ExtractInstanceType<UserEntities> {
    return new userMap[userType]();
  }
}
