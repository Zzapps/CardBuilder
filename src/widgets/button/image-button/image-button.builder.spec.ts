import { Action } from '../../../actions/action';
import { CardService } from '../../../card-service';
import { IconBuilder } from '../../../shared/icon.builder';
import { ImageButtonBuilder } from './image-button.builder';

describe('ImageButtonBuilder', () => {
  let sut: ImageButtonBuilder;
  let iconBuilder: IconBuilder;
  const icon = CardService.KnownIcon.AIRPLANE;

  beforeEach(() => {
    sut = new ImageButtonBuilder();
    iconBuilder = new IconBuilder();
  });

  describe('build()', () => {
    it('should build contained actions if they are set', () => {
      const actionBuilder = CardService.newAction().setFunction('foo');
      vi.spyOn(actionBuilder, 'build');

      sut.setOnClickAction(actionBuilder);
      const output = sut.build();

      expect(actionBuilder.build).toHaveBeenCalled();

      const action = actionBuilder.build();

      expect(output.onClick?.action).toBeInstanceOf(Action);
      expect(output.onClick?.action).toEqual(action);
    });
  });

  describe('setIcon()', () => {
    it('should set the icon using an IconBuilder', () => {
      const expectedIcon = iconBuilder.setKnownIcon(icon).build();
      const output = sut.setIcon(icon).build();
      expect(output.icon).toEqual(expectedIcon);
    });
  });

  describe('setAltText()', () => {
    it('should set the alt text using an IconBuilder', () => {
      const altText = 'foo';
      const expectedIcon = iconBuilder.setAltText(altText).build();
      const output = sut.setAltText(altText).build();
      expect(output.icon).toEqual(expectedIcon);
    });
  });

  describe('setDisabled()', () => {
    it('should set the disabled value', () => {
      const output = sut.setDisabled(true).build();
      expect(output.disabled).toBeTruthy();
    });
  });
});
