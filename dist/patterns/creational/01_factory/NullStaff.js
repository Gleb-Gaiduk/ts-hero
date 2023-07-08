"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullStaff = void 0;
class NullStaff {
    constructor() {
        this.id = Date.now().toString();
    }
    getSalary() {
        return "Invalid user type";
    }
}
exports.NullStaff = NullStaff;
