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
var StyledText = (0, _native["default"])(_reactNative.Text)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text;
});
var Text = function Text(_ref2) {
  var children = _ref2.children,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'medium' : _ref2$size,
    style = _ref2.style;
  var _useTheme = (0, _themeProvider.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(StyledText, {
    style: [style, {
      fontSize: theme.typography.fontSizes[size] || theme.typography.fontSizes.medium,
      color: theme.colors.text
    }]
  }, children);
};
var _default = exports["default"] = Text;