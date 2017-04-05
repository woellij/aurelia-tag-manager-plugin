var _dec, _class;

import { DataLayerItem } from 'data-layer-item';

export let TagManager = (_dec = inject(LogManager), _dec(_class = class TagManager {

  constructor(logger) {
    this.dataLayer = null;
  }

  set dataLayer(value) {
    this._dataLayer = value;
  }

  get dataLayer() {
    if (this._dataLayer == null) this._dataLayer = window.dataLayer || null;
    return this._dataLayer;
  }

  refresh() {
    this._dataLayer = window.dataLayer || null;
  }

  add(dataLayerItem) {
    if (this.dataLayer == null) {
      console.error('tag-manager data-layer not found');
      return false;
    }

    if (!(dataLayerItem instanceof DataLayerItem)) {
      console.error('tag-manager data-layer-item invalid');
      return false;
    }

    return this.dataLayer.push(dataLayerItem.attributes);
  }

  save() {
    if (this.dataLayer == null) {
      console.error('tag-manager data-layer not found');
      return false;
    }

    this.dataLayer.push();
  }

  create(attr) {
    let eventItem = new DataLayerItem();
    eventItem.create(attr);
    return eventItem;
  }

}) || _class);