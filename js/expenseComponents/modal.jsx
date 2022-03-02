"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./styles/modal.css");
function Modal(props) {
    return (<div className="modal" style={props.show ? { display: 'block' } : { display: 'none' }}>

            <div className="modal-content">
                <span className="close" onClick={props.onCloseClick}>&times;</span>
                <h2>{props.title}</h2>
                {props.component}
            </div>

        </div>);
}
exports.default = Modal;
