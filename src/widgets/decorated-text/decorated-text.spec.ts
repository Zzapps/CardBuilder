import { CardService } from '../../card-service';
import { TextButtonWidget } from '../button/text-button/text-button.widget';
import { DecoratedTextBuilder } from './decorated-text.builder';

describe('DecoratedTextBuilder', () => {
  let sut: DecoratedTextBuilder;

  beforeEach(() => {
    sut = CardService.newDecoratedText();
  });
  describe('build()', () => {
    it('should build the contained button if it is set', () => {
      const buttonBuilder = CardService.newTextButton('foo');
      vi.spyOn(buttonBuilder, 'build');

      sut.setButton(buttonBuilder);
      const output = sut.build();

      expect(buttonBuilder.build).toHaveBeenCalled();

      const button = buttonBuilder.build();

      expect(button).toBeInstanceOf(TextButtonWidget);
      expect(output.button).toEqual(button);
    });
  });

  it.todo('should set the text');
  it.todo('should set the topLabel');
  it.todo('should set the bottomLabel');
  it.todo('should build');
});
