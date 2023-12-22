import { ActionBuilder } from './actions/action.builder';
import { OpenLinkActionBuilder } from './actions/open-link-action.builder';
import { CardSectionBuilder } from './card-section/card-section.builder';
import { CardBuilder } from './card.builder';
import { FooterBuilder } from './footer/footer.builder';
import { ButtonListBuilder } from './widgets/button/button-list.builder';
import { ImageButtonBuilder } from './widgets/button/image-button/image-button.builder';
import { TextButtonBuilder } from './widgets/button/text-button/text-button.builder';
import { DateTimePickerBuilder } from './widgets/datetime-picker/datetime-picker.builder';
import { SelectionInputBuilder } from './widgets/selection-input/selection-input.builder';
import { TextParagraphBuilder } from './widgets/text-paragraph/text-paragraph.builder';

describe('CardBuilder', () => {
  let sut: CardBuilder;

  beforeEach(() => {
    sut = new CardBuilder();
  });

  test('should build its content', () => {
    const widget = CardBuilder.newSelectionInput()
      .addItem('foo', 'bar', true)
      .setName('foo')
      .setType(CardBuilder.SelectionInputType.DROPDOWN)
      .build();

    const section = CardBuilder.newCardSection().addWidget(widget).build();
    const button = CardBuilder.newTextButton().setText('foo').build();
    const footer = CardBuilder.newFixedFooter()
      .setPrimaryButton(button)
      .build();

    sut.addSection(section);
    sut.setFixedFooter(footer);

    const output = sut.build();
    expect(output).toEqual({
      sections: [
        {
          widgets: [
            {
              selectionInput: widget,
            },
          ],
        },
      ],
      fixedFooter: footer,
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
      const output = CardBuilder.newCardSection();
      expect(output).toBeInstanceOf(CardSectionBuilder);
    });

    it('should return a SelectionInputBuilder', () => {
      const output = CardBuilder.newSelectionInput();
      expect(output).toBeInstanceOf(SelectionInputBuilder);
    });

    it('should return an ActionBuilder', () => {
      const output = CardBuilder.newAction();
      expect(output).toBeInstanceOf(ActionBuilder);
    });

    it('should return a TextButtonBuilder', () => {
      const output = CardBuilder.newTextButton();
      expect(output).toBeInstanceOf(TextButtonBuilder);
    });

    it('should return an ImageButtonBuilder', () => {
      const output = CardBuilder.newImageButton();
      expect(output).toBeInstanceOf(ImageButtonBuilder);
    });

    it('should return a ButtonListBuilder', () => {
      const output = CardBuilder.newButtonSet();
      expect(output).toBeInstanceOf(ButtonListBuilder);
    });

    it('should return a TextParagraphBuilder', () => {
      const output = CardBuilder.newTextParagraph();
      expect(output).toBeInstanceOf(TextParagraphBuilder);
    });

    it('should return an OpenLinkActionBuilder', () => {
      const output = CardBuilder.newOpenLink();
      expect(output).toBeInstanceOf(OpenLinkActionBuilder);
    });

    it('should return a FooterBuilder', () => {
      const output = CardBuilder.newFixedFooter();
      expect(output).toBeInstanceOf(FooterBuilder);
    });

    it('should return a DateTimePickerBuilder', () => {
      const output = CardBuilder.newDateTimePicker();
      expect(output).toBeInstanceOf(DateTimePickerBuilder);
    });
  });
});
