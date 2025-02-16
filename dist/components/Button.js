"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _native = _interopRequireDefault(require("styled-components/native"));
var _themeProvider = require("../theme/themeProvider");
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StyledButton = (0, _native["default"])(_reactNative.TouchableOpacity)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: 8px;\n  align-items: center;\n  justify-content: center;\n"])), function (_ref) {
  var theme = _ref.theme,
    bgColor = _ref.bgColor;
  return bgColor || theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
});
var ButtonText = (0, _native["default"])(_reactNative.Text)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  font-weight: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontSizes.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontWeights.bold;
});
var Button = function Button(_ref5) {
  var title = _ref5.title,
    onPress = _ref5.onPress,
    bgColor = _ref5.bgColor,
    textColor = _ref5.textColor,
    style = _ref5.style,
    textStyle = _ref5.textStyle;
  var _useTheme = (0, _themeProvider.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(StyledButton, {
    onPress: onPress,
    bgColor: bgColor,
    style: style
  }, /*#__PURE__*/_react["default"].createElement(ButtonText, {
    style: [textStyle, {
      color: textColor || theme.colors.text
    }]
  }, title));
};
var _default = exports["default"] = Button;