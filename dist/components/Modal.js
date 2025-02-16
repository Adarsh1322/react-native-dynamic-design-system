"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _native = _interopRequireDefault(require("styled-components/native"));
var _themeProvider = require("../theme/themeProvider");
var _Text = require("./Text");
var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ModalContainer = (0, _native["default"])(_reactNative.View)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n"])));
var ModalContent = (0, _native["default"])(_reactNative.View)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: 8px;\n  width: 80%;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.modalBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
});
var CloseButton = (0, _native["default"])(_reactNative.TouchableOpacity)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 5px;\n"])));
var Modal = function Modal(_ref3) {
  var visible = _ref3.visible,
    children = _ref3.children,
    onClose = _ref3.onClose,
    _ref3$icon = _ref3.icon,
    icon = _ref3$icon === void 0 ? 'close' : _ref3$icon,
    _ref3$iconSize = _ref3.iconSize,
    iconSize = _ref3$iconSize === void 0 ? 24 : _ref3$iconSize,
    iconColor = _ref3.iconColor,
    _ref3$showCloseButton = _ref3.showCloseButton,
    showCloseButton = _ref3$showCloseButton === void 0 ? true : _ref3$showCloseButton,
    _ref3$customStyles = _ref3.customStyles,
    customStyles = _ref3$customStyles === void 0 ? {} : _ref3$customStyles,
    _ref3$customIconCompo = _ref3.customIconComponent,
    customIconComponent = _ref3$customIconCompo === void 0 ? null : _ref3$customIconCompo;
  var _useTheme = (0, _themeProvider.useTheme)(),
    theme = _useTheme.theme;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    transparent: true,
    visible: visible,
    animationType: "fade",
    onRequestClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(ModalContainer, {
    onTouchEnd: onClose
  }, /*#__PURE__*/_react["default"].createElement(ModalContent, {
    style: [{
      backgroundColor: theme.colors.modalBackground
    }, customStyles]
  }, showCloseButton && /*#__PURE__*/_react["default"].createElement(CloseButton, {
    onPress: onClose
  }, customIconComponent ? customIconComponent : /*#__PURE__*/_react["default"].createElement(_MaterialIcons["default"], {
    name: icon,
    size: iconSize,
    color: iconColor || theme.colors.text
  })), children)));
};
var _default = exports["default"] = Modal;