"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineeringDepartment = void 0;
const Department_1 = require("./Department");
const Developer_1 = require("./Developer");
class EngineeringDepartment extends Department_1.Department {
    constructor() {
        super();
        this.name = "Engineering";
    }
    addPerson() {
        return new Developer_1.Developer();
    }
}
exports.EngineeringDepartment = EngineeringDepartment;
