export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('not a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('not a string');
    }

    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
