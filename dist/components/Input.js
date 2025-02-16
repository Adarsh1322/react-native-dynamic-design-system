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
var StyledInput = (0, _native["default"])(_reactNative.TextInput)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  padding: ", "px;\n  border-radius: 8px;\n  font-size: ", "px;\n  color: ", ";\n  background-color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontSizes.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.inputBackground;
});
var Input = function Input(_ref6) {
  var placeholder = _ref6.placeholder,
    value = _ref6.value,
    onChangeText = _ref6.onChangeText,
    style = _ref6.style,
    placeholderTextColor = _ref6.placeholderTextColor;
  var _useTheme = (0, _themeProvider.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(StyledInput, {
    placeholder: placeholder,
    value: value,
    onChangeText: onChangeText,
    style: style,
    placeholderTextColor: placeholderTextColor || theme.colors.placeholder
  });
};
var _default = exports["default"] = Input;