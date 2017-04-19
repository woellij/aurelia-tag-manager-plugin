define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var DataLayerItem = exports.DataLayerItem = function () {
    function DataLayerItem() {
      _classCallCheck(this, DataLayerItem);

      this.name = 'Date Layer Item';
      this._attributes = {};
    }

    DataLayerItem.prototype.create = function create(attr) {
      this._attributes = attr;
    };

    _createClass(DataLayerItem, [{
      key: 'attributes',
      get: function get() {
        return this._attributes;
      },
      set: function set(value) {
        this._attributes = value;
      }
    }]);

    return DataLayerItem;
  }();
});