'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, DataLayerItem;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
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

      _export('DataLayerItem', DataLayerItem = function () {
        function DataLayerItem() {
          _classCallCheck(this, DataLayerItem);

          this.name = 'Date Layer Item';
          this._attributes = {};
        }

        DataLayerItem.prototype.create = function create(attr) {
          this.logger.info('create-data-layer-item');
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
      }());

      _export('DataLayerItem', DataLayerItem);
    }
  };
});