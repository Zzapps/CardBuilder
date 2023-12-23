import { Icon } from './icon';
import { CardBuilder } from '../card.builder';
import { IconBuilder } from './icon.builder';
import { CardService } from '../card-service';

describe('IconBuilder', () => {
  let sut: IconBuilder;
  const icon: CardService.KnownIcon = CardService.KnownIcon.AIRPLANE;
  const altText = 'test alt text';

  beforeEach(() => {
    sut = new IconBuilder();
  });

  describe('build()', () => {
    it('should return an Icon instance', () => {
      const output = sut.setKnownIcon(icon).setAltText(altText).build();
      expect(output).toBeInstanceOf(Icon);
    });

    it('should default to a square image type', () => {
      const output = sut.setKnownIcon(icon).build();
      expect(output).toEqual(
        expect.objectContaining({
          imageType: CardService.ImageType.SQUARE,
        }),
      );
    });

    it('should not contain undefined values', () => {
      const output = sut.setKnownIcon(icon).setIconUrl('some-url').build();
      expect(output).not.toHaveProperty('knownIcon');
    });
  });

  describe('setKnownIcon())', () => {
    it('should set the knownIcon', () => {
      sut.setKnownIcon(icon);
      const output = sut.build();

      expect(output).toEqual(
        expect.objectContaining({
          knownIcon: icon,
        }),
      );
    });

    it('should unset the icon url', () => {
      const url = 'https://zzapps.nl';
      const intermediateOutput = sut.setIconUrl(url).build();
      expect(intermediateOutput.iconUrl).toEqual(url);

      const finalOutput = sut.setKnownIcon(icon).build();
      expect(finalOutput.iconUrl).toBeUndefined();
      expect(finalOutput.knownIcon).toBe(icon);
    });
  });

  describe('setIconUrl())', () => {
    it('should set the icon url', () => {
      const url = 'https://zzapps.nl';

      const output = sut.setIconUrl(url).build();
      expect(output.iconUrl).toEqual(url);
    });

    it('should unset the known icon', () => {
      const url = 'https://zzapps.nl';
      const intermediateOutput = sut.setKnownIcon(icon).build();
      expect(intermediateOutput.knownIcon).toEqual(icon);

      const finalOutput = sut.setIconUrl(url).build();
      expect(finalOutput.knownIcon).toBeUndefined();
      expect(finalOutput.iconUrl).toBe(url);
    });
  });

  describe('setImageType()', () => {
    it('should set the image type', () => {
      const output = sut
        .setKnownIcon(icon)
        .setImageType(CardService.ImageType.CIRCLE)
        .build();

      expect(output).toEqual(
        expect.objectContaining({
          knownIcon: icon,
          imageType: CardService.ImageType.CIRCLE,
        }),
      );
    });
  });

  describe('setAltText', () => {
    it('should set the alt text', () => {
      const output = sut.setKnownIcon(icon).setAltText(altText).build();
      expect(output).toEqual(
        expect.objectContaining({
          altText,
        }),
      );
    });
  });
});
