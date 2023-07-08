"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const Developer_1 = require("./Developer");
const Manager_1 = require("./Manager");
const userMap = {
    manager: Manager_1.Manager,
    dev: Developer_1.Developer,
};
class UserFactory {
    static getStaffInstance(userType) {
        return new userMap[userType]();
    }
}
exports.UserFactory = UserFactory;
