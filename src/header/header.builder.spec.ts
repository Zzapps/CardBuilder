import { CardService } from '..';
import { Header } from './header';
import { HeaderBuilder } from './header.builder';

describe('HeaderBuilder', () => {
  let sut: HeaderBuilder;

  beforeEach(() => {
    sut = new HeaderBuilder();
  });

  describe('build()', () => {
    it('should build a Header', () => {
      const title = 'title';
      const subtitle = 'subtitle';
      const imageUrl = 'https://zzapps.nl';
      const imageType = CardService.ImageType.CIRCLE;

      const output = sut
        .setTitle(title)
        .setSubtitle(subtitle)
        .setImageUrl(imageUrl)
        .setImageType(imageType)
        .build();

      const expected = {
        title,
        subtitle,
        imageUrl,
        imageType,
      };

      expect(output).toBeInstanceOf(Header);
      expect(output).toEqual(expected);
    });
  });

  it('should set the title', () => {
    const title = 'This is a title';
    const output = sut.setTitle(title).build();

    expect(output.title).toBe(title);
  });

  it('should set the imageUrl', () => {
    const imgUrl = 'https://img.icons8.com/test';
    const output = sut.setImageUrl(imgUrl).build();

    expect(output.imageUrl).toBe(imgUrl);
  });

  it('should set the imageType', () => {
    const imgType = CardService.ImageType.CIRCLE;
    const output = sut.setImageType(imgType).build();

    expect(output.imageType).toBe(imgType);
  });
});
