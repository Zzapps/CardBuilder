import { ButtonListBuilder } from './button-list.builder';
import { TextButtonBuilder } from './text-button/text-button.builder';

describe('ButtonListBuilder', () => {
  let sut: ButtonListBuilder;

  beforeEach(() => {
    sut = new ButtonListBuilder();
  });

  test('should add a button', () => {
    const button = new TextButtonBuilder().setText('foo').build();
    sut.addButton(button);
    const output = sut.build();
    expect(output.buttons).toEqual([button]);
  });

  test('should allow multiple buttons', () => {
    const button1 = new TextButtonBuilder().setText('foo').build();
    const button2 = new TextButtonBuilder().setText('bar').build();
    sut.addButton(button1);
    sut.addButton(button2);
    const output = sut.build();
    expect(output.buttons).toEqual([button1, button2]);
  });
});
