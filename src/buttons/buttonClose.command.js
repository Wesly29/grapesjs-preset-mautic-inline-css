import ContentService from '../content.service';

export default class ButtonCloseCommands {
  static closeEditorPageHtml(editor) {

    if (!editor) {
      throw new Error('no page-html editor');
    }

    editor.runCommand('preset-mautic:dynamic-content-slots-to-tokens');

    const htmlDocument = this.ContentService.getHtmlDocument(editor);

    ButtonCloseCommands.returnContentToTextarea(editor, htmlDocument.documentElement.outerHTML);

    // Reset HTML
    ButtonCloseCommands.resetHtml(editor);
  }

  static closeEditorEmailMjml(editor) {
    if (!editor) {
      throw new Error('no email-mjml editor');
    }
    editor.runCommand('preset-mautic:dynamic-content-slots-to-tokens');

    let code = '';

    // Try catch for mjml parser error
    try {
      code = editor.runCommand('mjml-get-code');
    } catch (error) {
      console.log(error.message);
      alert('Errors inside your template. Template will not be saved.');
    }

    // Update textarea for save
    if (!code || !code.html) {
      throw new Error('Could not generate html from MJML');
    }
    ButtonCloseCommands.returnContentToTextarea(editor, editor.getHtml(), code.html);

    // Reset HTML
    ButtonCloseCommands.resetHtml(editor);
  }

  static closeEditorEmailHtml(editor) {
    if (!editor) {
      throw new Error('no email-html editor');
    }

    editor.runCommand('preset-mautic:dynamic-content-slots-to-tokens');

    // Getting HTML with CSS inline (only available for "grapesjs-preset-newsletter"):
    const innerHTML = editor.runCommand('gjs-get-inlined-html');

    ButtonCloseCommands.returnContentToTextarea(editor, innerHTML);

    // Reset HTML
    ButtonCloseCommands.resetHtml(editor);
  }

  /**
   * Save the html and mjml
   * @param {string} html
   * @param {string} mjml
   */
  static returnContentToTextarea(editor, html, mjml) {
    if (ContentService.isMjmlMode(editor)) {
      mQuery('textarea.builder-html').val(html);
      mQuery('textarea.builder-mjml').val(mjml);
    } else {
      mQuery('textarea.builder-html').val(html);
    }
  }

  static resetHtml() {
    mQuery('.builder').removeClass('builder-active').addClass('hide');
    mQuery('html').css('font-size', '');
    mQuery('body').css('overflow-y', '');
    mQuery('.builder-panel').css('display', 'none');

    // Destroy GrapesJS
    // Dont destroy grapesjs. Just hide it. Will be auto destroyed if user
    // loads a new page.
    // workaround: throws typeError: Cannot read property 'trigger'
    // since editior is destroyed, command can not be stopped anymore
    // setTimeout(() => editor.destroy(), 1000);
    // editor.destroy();
  }
}
