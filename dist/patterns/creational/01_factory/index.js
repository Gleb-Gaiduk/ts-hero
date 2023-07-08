"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./UserService");
console.log(
  "management",
  new UserService_1.UserService().getSalaryByUser("manager")
);
console.log(
  "management",
  new UserService_1.UserService().getSalaryByUser("dev")
);
