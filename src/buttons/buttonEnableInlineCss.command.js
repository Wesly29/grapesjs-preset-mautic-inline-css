
export default class InlineStyleCommand {
  /**
   * The command to run on button click
   */
  static name = 'preset-mautic:enable-inline-css';

  static enableInlineCss(sender, opts) {
    console.log('Enable inline css');
    console.log(sender, opts);
  }
}
