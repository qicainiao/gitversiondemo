"use strict";

exports.__esModule = true;
exports.createNamespace = createNamespace;

var _bem = require("./bem");

var _component = require("./component");

var _i18n = require("./i18n");

function createNamespace(name) {
  var comname = 'jy-' + name;
  var stylename = 'van-' + name;
  return [(0, _component.createComponent)(comname), (0, _bem.createBEM)(stylename), (0, _i18n.createI18N)(name)];
}