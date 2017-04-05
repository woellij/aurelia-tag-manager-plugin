export let DataLayerItem = class DataLayerItem {

  constructor() {
    this.name = 'Date Layer Item';
    this._attributes = {};
  }

  create(attr) {
    this.logger.info('create-data-layer-item');
    this._attributes = attr;
  }

  get attributes() {
    return this._attributes;
  }

  set attributes(value) {
    this._attributes = value;
  }

};