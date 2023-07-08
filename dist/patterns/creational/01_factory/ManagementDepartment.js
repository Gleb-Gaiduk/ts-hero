"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartment = void 0;
const Department_1 = require("./Department");
const Manager_1 = require("./Manager");
class ManagementDepartment extends Department_1.Department {
    constructor() {
        super();
        this.name = "Management";
    }
    addPerson() {
        return new Manager_1.Manager();
    }
}
exports.ManagementDepartment = ManagementDepartment;
