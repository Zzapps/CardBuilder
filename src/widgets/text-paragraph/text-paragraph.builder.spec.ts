import { TextParagraphBuilder } from './text-paragraph.builder';

describe('TextParagraphBuilder', () => {
  let sut: TextParagraphBuilder;

  beforeEach(() => {
    sut = new TextParagraphBuilder();
  });

  test('sets the text', () => {
    sut.setText('foo');
    const output = sut.build();
    expect(output.text).toBe('foo');
  });
});
