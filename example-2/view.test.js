/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays more paragraphs after addParagraph()', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph('test');

    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('clears all paragraphs after clearParagraph()', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    view.clearParagraph();

    expect(document.querySelectorAll('p').length).toBe(0);
  });
});