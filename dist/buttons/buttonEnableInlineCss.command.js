function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class InlineStyleCommand {
  /**
   * The command to run on button click
   */
  static enableInlineCss(editor, sender, opts = {}) {
    sender.get('context').enable = true;
    editor.getConfig().enableInlineCss = true;
  }

  static disableInlineCss(editor, sender, opts = {}) {
    sender.get('context').enable = false;
    editor.getConfig().enableInlineCss = false;
  }

}

_defineProperty(InlineStyleCommand, "name", 'preset-mautic:enable-inline-css');