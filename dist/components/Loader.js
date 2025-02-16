"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _native = _interopRequireDefault(require("styled-components/native"));
var _themeProvider = require("../theme/themeProvider");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var LoaderWrapper = _native["default"].View(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  justify-content: center;\n  align-items: center;\n  padding: ", "px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.medium;
});
var Loader = function Loader(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'large' : _ref2$size,
    color = _ref2.color,
    style = _ref2.style;
  var _useTheme = (0, _themeProvider.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(LoaderWrapper, {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.ActivityIndicator, {
    size: size,
    color: color || theme.colors.primary
  }));
};
var _default = exports["default"] = Loader;