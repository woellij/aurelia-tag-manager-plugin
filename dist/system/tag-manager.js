'use strict';

System.register(['data-layer-item'], function (_export, _context) {
  "use strict";

  var DataLayerItem, _createClass, _dec, _class, TagManager;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_dataLayerItem) {
      DataLayerItem = _dataLayerItem.DataLayerItem;
    }],
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

      _export('TagManager', TagManager = (_dec = inject(LogManager), _dec(_class = function () {
        function TagManager(logger) {
          _classCallCheck(this, TagManager);

          this.dataLayer = null;
        }

        TagManager.prototype.refresh = function refresh() {
          this._dataLayer = window.dataLayer || null;
        };

        TagManager.prototype.add = function add(dataLayerItem) {
          if (this.dataLayer == null) {
            console.error('tag-manager data-layer not found');
            return false;
          }

          if (!(dataLayerItem instanceof DataLayerItem)) {
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

        TagManager.prototype.create = function create(attr) {
          var eventItem = new DataLayerItem();
          eventItem.create(attr);
          return eventItem;
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
      }()) || _class));

      _export('TagManager', TagManager);
    }
  };
});