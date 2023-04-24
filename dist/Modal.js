"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal-Styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Renvoie les éléments HTML d'un composant Modale
 * @param {boolean} isOpen Un state correspondant à un booléen permettant d'ouvrir ou non la modale
 * @param {function} closeModal Une fonction qui sera déclenchée lors du click
 * @param {JSX.Element} children Tous les éléments JSX ou HTML enfants qui seront inclus dans le contenu de la modale
 * @returns {JSX.Element|null}
 * @constructor
 */
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    closeModal = _ref.closeModal,
    children = _ref.children;
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "times",
    class: "svg-inline--fa fa-times fa-w-11",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 352 512",
    className: "svg-modal-btn"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "currentColor",
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, children)));
};
var _default = Modal;
exports.default = _default;