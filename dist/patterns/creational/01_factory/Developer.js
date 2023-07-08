"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
class Developer {
    constructor() {
        this.id = Date.now().toString();
    }
    getSalary() {
        return "I'm under paid!";
    }
}
exports.Developer = Developer;
