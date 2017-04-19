'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dataLayerItem = require('./data-layer-item');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagManager = exports.TagManager = function () {
  function TagManager() {
    _classCallCheck(this, TagManager);

    this.dataLayer = null;
  }

  TagManager.prototype.refresh = function refresh() {
    this._dataLayer = window.dataLayer || null;
  };

  TagManager.prototype.create = function create(attr) {
    var eventItem = new _dataLayerItem.DataLayerItem();
    eventItem.create(attr);
    return eventItem;
  };

  TagManager.prototype.add = function add(dataLayerItem) {
    if (this.dataLayer == null) {
      console.error('tag-manager data-layer not found');
      return false;
    }

    if (!(dataLayerItem instanceof _dataLayerItem.DataLayerItem)) {
      console.error('tag-manager data-layer-item invalid');
      return false;
    }

    return this.dataLayer.push(dataLayerItem.attributes);
  };

  TagManager.prototype.save = function save() {
    if (this.dataLayer == null) {
      console.error('tag-manager data-layer not found');
      return false;
    }

    this.dataLayer.push();
  };

  _createClass(TagManager, [{
    key: 'dataLayer',
    set: function set(value) {
      this._dataLayer = value;
    },
    get: function get() {
      if (this._dataLayer == null) this._dataLayer = window.dataLayer || null;
      return this._dataLayer;
    }
  }]);

  return TagManager;
}();