
export default class InlineStyleCommand {
  /**
   * The command to run on button click
   */
  static name = 'preset-mautic:enable-inline-css';

  static enableInlineCss(editor, sender, opts = {}) {
    sender.get('context').enable = true;
    editor.getConfig().enalbeInlineCss = true;
  }

  static disableInlineCss(editor, sender, opts = {}) {
    sender.get('context').enable = false;
    editor.getConfig().enalbeInlineCss = false;
  }
}
