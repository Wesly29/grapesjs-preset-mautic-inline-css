function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import EnableInlineCssCommand from './buttonEnableInlineCss.command';
export default class ButtonEnableInlineCss {
  /**
   * Add close button with save for Mautic
   */
  constructor(editor) {
    _defineProperty(this, "editor", void 0);

    if (!editor) {
      throw new Error('no editor');
    }

    this.editor = editor;
  }

  addButton() {
    this.editor.Panels.addButton('options', [{
      id: 'enable-inline-css',
      active: true,
      className: 'fa fa-css3',
      attributes: {
        title: Mautic.translate('grapesjsbuilder.enableInlineCss')
      },
      command: EnableInlineCssCommand.name
    }]);
  }

  addCommand() {
    this.editor.Commands.add(EnableInlineCssCommand.name, {
      run: EnableInlineCssCommand.enableInlineCss
    });
  }

}