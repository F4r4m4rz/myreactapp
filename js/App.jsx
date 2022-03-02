"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const myComponent_1 = __importDefault(require("./expenseComponents/myComponent"));
function App() {
    return (<div className="App">
      <myComponent_1.default />
    </div>);
}
exports.default = App;
