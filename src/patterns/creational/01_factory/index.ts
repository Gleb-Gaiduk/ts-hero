import { UserService } from "./UserService";

console.log("management", new UserService().getSalaryByUser("manager"));
console.log("management", new UserService().getSalaryByUser("dev"));
