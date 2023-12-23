import { TextButtonBuilder } from './text-button.builder';
import { CardService } from '../../../card-service';

describe('TextButtonBuilder', () => {
  let sut: TextButtonBuilder;

  beforeEach(() => {
    sut = new TextButtonBuilder();
  });

  describe('build()', () => {
    it('should build the onClickAction if it is set', () => {
      const actionBuilder = CardService.newAction().setFunction('foo');
      sut.setOnClickAction(actionBuilder);

      vi.spyOn(actionBuilder, 'build');
      sut.build();

      expect(actionBuilder.build).toHaveBeenCalled();
    });
  });

  describe('constructor', () => {
    it.todo('should allow setting the text directly');
  });

  it('should set the text', () => {
    const text = 'foo';
    sut.setText(text);
    const output = sut.build();
    expect(output.text).toBe(text);
  });

  it('should set the altText', () => {
    const altText = 'bar';
    sut.setAltText(altText);
    const output = sut.build();
    expect(output.altText).toBe(altText);
  });

  it('should set whether the button is disabled', () => {
    const disabled = true;
    sut.setDisabled(disabled);
    const output = sut.build();
    expect(output.disabled).toBe(disabled);
  });

  it('should set the button color', () => {
    sut.setBackgroundColor('#ffffff');
    const output = sut.build();
    expect(output.color).toEqual({
      red: 1,
      green: 1,
      blue: 1,
      alpha: 1,
    });
  });
});
