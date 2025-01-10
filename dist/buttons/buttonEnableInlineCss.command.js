function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class InlineStyleCommand {
  /**
   * The command to run on button click
   */
  static enableInlineCss(sender, opts) {
    console.log('Enable inline css');
    console.log(sender, opts);
  }

}

_defineProperty(InlineStyleCommand, "name", 'preset-mautic:enable-inline-css');