import { CardService } from '../card-service';
import { TextButtonWidget } from '../widgets/button/text-button/text-button.widget';
import { Footer } from './footer';
import { FooterBuilder } from './footer.builder';

describe('FooterBuilder', () => {
  let sut: FooterBuilder;
  const buttonBuilder = CardService.newTextButton().setText('foo');

  beforeEach(() => {
    sut = new FooterBuilder();
  });

  describe('build()', () => {
    it('should build the primary button', () => {
      vi.spyOn(buttonBuilder, 'build');

      sut.setPrimaryButton(buttonBuilder);
      const footer = sut.build();

      expect(buttonBuilder.build).toHaveBeenCalled();

      const button = buttonBuilder.build();

      expect(footer).toBeInstanceOf(Footer);
      expect(footer.primaryButton).toBeInstanceOf(TextButtonWidget);
      expect(footer.primaryButton).toEqual(button);
    });

    it('should build the secondary button if it exists', () => {
      sut.setPrimaryButton(buttonBuilder);
      const secondaryButtonBuilder = CardService.newTextButton().setText('bar');

      sut.setSecondaryButton(secondaryButtonBuilder);
      vi.spyOn(secondaryButtonBuilder, 'build');

      sut.build();

      expect(secondaryButtonBuilder.build).toHaveBeenCalled();
    });

    it('should throw if no primary button was set', () => {
      const act = () => sut.build();
      expect(act).toThrow();
    });
  });
});
