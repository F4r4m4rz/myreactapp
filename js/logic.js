"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class logic {
    constructor(title) {
        this.title = title;
    }
    greet() {
        return `Hello ${this.title}`;
    }
}
exports.default = logic;
