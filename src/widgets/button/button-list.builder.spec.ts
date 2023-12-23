import { CardService } from '../../card-service';
import { ButtonListBuilder } from './button-list.builder';
import { ButtonListWidget } from './button-list.widget';

describe('ButtonListBuilder', () => {
  let sut: ButtonListBuilder;

  beforeEach(() => {
    sut = new ButtonListBuilder();
  });

  describe('build', () => {
    it('should return a ButtonListWidget', () => {
      const buttonBuilder = CardService.newTextButton().setText('foo');
      sut.addButton(buttonBuilder);

      const widget = sut.build();

      expect(widget).toBeInstanceOf(ButtonListWidget);
    });

    it('should build all contained buttons', () => {
      const buttonBuilder1 = CardService.newTextButton().setText('foo');
      const buttonBuilder2 = CardService.newImageButton().setAltText('bar');

      vi.spyOn(buttonBuilder1, 'build');
      vi.spyOn(buttonBuilder2, 'build');

      sut.addButton(buttonBuilder1, buttonBuilder2);
      const widget = sut.build();

      expect(buttonBuilder1.build).toHaveBeenCalled();
      expect(buttonBuilder2.build).toHaveBeenCalled();

      const button1 = buttonBuilder1.build();
      const button2 = buttonBuilder2.build();

      expect(widget.buttons).toEqual([button1, button2]);
    });
  });
});
