import {DataLayerItem} from './data-layer-item';

export class TagManager {

  _dataLayer;

  constructor() {
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

  create(attr) {
    let eventItem = new DataLayerItem();
    eventItem.create(attr);
    return eventItem;
  }

  add(dataLayerItem) {
    if (this.dataLayer == null) {
      console.error('tag-manager data-layer not found');
      return false;
    }

    if (! (dataLayerItem instanceof DataLayerItem)) {
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

}
