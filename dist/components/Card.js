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
var StyledCard = (0, _native["default"])(_reactNative.View)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: 8px;\n  shadow-color: #000;\n  shadow-opacity: 0.1;\n  shadow-radius: 5px;\n  elevation: 3;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.cardBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
});
var Card = function Card(_ref3) {
  var children = _ref3.children,
    style = _ref3.style;
  var _useTheme = (0, _themeProvider.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(StyledCard, {
    style: [{
      backgroundColor: theme.colors.cardBackground
    }, style]
  }, children);
};
var _default = exports["default"] = Card;