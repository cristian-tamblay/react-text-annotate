"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Mark_1 = __importDefault(require("./Mark"));
var utils_1 = require("./utils");
var Split = function (props) {
    if (props.mark)
        return react_1["default"].createElement(Mark_1["default"], __assign({}, props));
    return (react_1["default"].createElement("span", { "data-start": props.start, "data-end": props.end }, props.content));
};
var TextAnnotator = function (props) {
    var getSpan = function (span) {
        // TODO: Better typings here.
        if (props.getSpan)
            return props.getSpan(span);
        return { start: span.start, end: span.end };
    };
    var content = props.content, value = props.value, style = props.style;
    var splits = utils_1.splitWithOffsets(content, value);
    return (react_1["default"].createElement("div", { style: style }, splits.map(function (split) { return (react_1["default"].createElement(Split, __assign({ key: split.start + "-" + split.end }, split))); })));
};
exports["default"] = TextAnnotator;
//# sourceMappingURL=TextAnnotator.js.map