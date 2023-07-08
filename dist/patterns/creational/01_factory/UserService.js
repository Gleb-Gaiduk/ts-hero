"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserFactory_1 = require("./UserFactory");
class UserService {
    getSalaryByUser(user) {
        return UserFactory_1.UserFactory.getStaffInstance(user).getSalary();
    }
}
exports.UserService = UserService;
