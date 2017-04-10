export class DataLayerItem {

  _attributes;

  constructor() {
    this.name = 'Date Layer Item';
    this._attributes = {};
  }

  create(attr) {
    this._attributes = attr;
  }

  get attributes() {
    return this._attributes;
  }

  set attributes(value) {
    this._attributes = value;
  }

}
