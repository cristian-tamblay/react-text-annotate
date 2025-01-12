"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var Mark = function (props) { return ((props.tooltip !== "") ?
    react_1["default"].createElement(Tooltip_1["default"], { title: props.tooltip, arrow: true },
        react_1["default"].createElement("mark", { style: { backgroundColor: props.color || '#84d2ff', padding: '0 4px' }, "data-start": props.start, "data-end": props.end },
            props.content,
            props.tag && (react_1["default"].createElement("span", { style: { fontSize: '0.7em', fontWeight: 500, marginLeft: 6 } }, props.tag))))
    :
        react_1["default"].createElement("mark", { style: { backgroundColor: props.color || '#84d2ff', padding: '0 4px' }, "data-start": props.start, "data-end": props.end },
            props.content,
            props.tag && (react_1["default"].createElement("span", { style: { fontSize: '0.7em', fontWeight: 500, marginLeft: 6 } }, props.tag)))); };
exports["default"] = Mark;
//# sourceMappingURL=Mark.js.map