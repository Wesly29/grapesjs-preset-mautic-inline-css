import EnableInlineCssCommand from './buttonEnableInlineCss.command';

export default class ButtonEnableInlineCss {
  editor;

  /**
   * Add close button with save for Mautic
   */
  constructor(editor) {
    if (!editor) {
      throw new Error('no editor');
    }
    this.editor = editor;
  }

  addButton() {
    this.editor.Panels.addButton('options', [
      {
        id: 'enable-inline-css',
        active: true,
        className: 'fa fa-css3',
        attributes: {
          title: Mautic.translate('grapesjsbuilder.enableInlineCss'),
        },
        command: EnableInlineCssCommand.name,
      },
    ]);
  }

  addCommand() {
    this.editor.Commands.add(EnableInlineCssCommand.name, {
      run: EnableInlineCssCommand.enableInlineCss,
    });
  }
}
