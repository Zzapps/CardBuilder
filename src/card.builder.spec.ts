import { Card } from './Card';
import { CardService } from './card-service';
import { ActionBuilder } from './actions/action.builder';
import { OpenLinkActionBuilder } from './actions/open-link-action.builder';
import { CardSection } from './card-section/card-section';
import { CardSectionBuilder } from './card-section/card-section.builder';
import { CardBuilder } from './card.builder';
import { FooterBuilder } from './footer/footer.builder';
import { ButtonListBuilder } from './widgets/button/button-list.builder';
import { ImageButtonBuilder } from './widgets/button/image-button/image-button.builder';
import { TextButtonBuilder } from './widgets/button/text-button/text-button.builder';
import { DateTimePickerBuilder } from './widgets/datetime-picker/datetime-picker.builder';
import { SelectionInputBuilder } from './widgets/selection-input/selection-input.builder';
import { TextParagraphBuilder } from './widgets/text-paragraph/text-paragraph.builder';
import { Footer } from './footer/footer';
import { Header } from './header/header';

describe('CardBuilder', () => {
  let sut: CardBuilder;

  beforeEach(() => {
    sut = new CardBuilder();
  });

  describe('build()', () => {
    it('should build all sections', () => {
      const sectionBuilder1 = CardService.newCardSection().setHeader('foo');
      const sectionBuilder2 = CardService.newCardSection().setHeader('bar');

      vi.spyOn(sectionBuilder1, 'build');
      vi.spyOn(sectionBuilder2, 'build');

      sut.addSection(sectionBuilder1, sectionBuilder2);
      const card = sut.build();

      expect(sectionBuilder1.build).toHaveBeenCalled();
      expect(sectionBuilder2.build).toHaveBeenCalled();

      const section1 = sectionBuilder1.build();
      const section2 = sectionBuilder2.build();

      expect(card).toBeInstanceOf(Card);
      expect(card.sections).toEqual([section1, section2]);

      card.sections.forEach((section) => {
        expect(section).toBeInstanceOf(CardSection);
      });
    });

    it('should build the footer if it exists', () => {
      const button = CardService.newTextButton();
      const footerBuilder =
        CardService.newFixedFooter().setPrimaryButton(button);

      vi.spyOn(footerBuilder, 'build');

      sut.setFixedFooter(footerBuilder);
      const output = sut.build();
      const footer = footerBuilder.build();

      expect(footerBuilder.build).toHaveBeenCalled();
      expect(output.fixedFooter).toBeInstanceOf(Footer);
      expect(output.fixedFooter).toEqual(footer);
    });

    it('should build the header if it exists', () => {
      const headerBuilder = CardService.newCardHeader().setTitle('foo');
      vi.spyOn(headerBuilder, 'build');

      sut.setHeader(headerBuilder);
      const output = sut.build();
      const header = headerBuilder.build();

      expect(headerBuilder.build).toHaveBeenCalled();
      expect(output.header).toBeInstanceOf(Header);
      expect(output.header).toEqual(header);
    });
  });

  describe('setName()', () => {
    it("should set the card's name property", () => {
      const builder = new CardBuilder();
      const output = builder.setName('test card').build();
      expect(output.name).toBe('test card');
    });

    it('should not have a name when it is not set', () => {
      const output = new CardBuilder().build();
      expect(output.name).toBeUndefined();
    });
  });

  describe('builders', () => {
    it('should return a SectionBuilder', () => {
      const output = CardService.newCardSection();
      expect(output).toBeInstanceOf(CardSectionBuilder);
    });

    it('should return a SelectionInputBuilder', () => {
      const output = CardService.newSelectionInput();
      expect(output).toBeInstanceOf(SelectionInputBuilder);
    });

    it('should return an ActionBuilder', () => {
      const output = CardService.newAction();
      expect(output).toBeInstanceOf(ActionBuilder);
    });

    it('should return a TextButtonBuilder', () => {
      const output = CardService.newTextButton();
      expect(output).toBeInstanceOf(TextButtonBuilder);
    });

    it('should return an ImageButtonBuilder', () => {
      const output = CardService.newImageButton();
      expect(output).toBeInstanceOf(ImageButtonBuilder);
    });

    it('should return a ButtonListBuilder', () => {
      const output = CardService.newButtonSet();
      expect(output).toBeInstanceOf(ButtonListBuilder);
    });

    it('should return a TextParagraphBuilder', () => {
      const output = CardService.newTextParagraph();
      expect(output).toBeInstanceOf(TextParagraphBuilder);
    });

    it('should return an OpenLinkActionBuilder', () => {
      const output = CardService.newOpenLink();
      expect(output).toBeInstanceOf(OpenLinkActionBuilder);
    });

    it('should return a FooterBuilder', () => {
      const output = CardService.newFixedFooter();
      expect(output).toBeInstanceOf(FooterBuilder);
    });

    it('should return a DateTimePickerBuilder', () => {
      const output = CardService.newDateTimePicker();
      expect(output).toBeInstanceOf(DateTimePickerBuilder);
    });
  });
});
