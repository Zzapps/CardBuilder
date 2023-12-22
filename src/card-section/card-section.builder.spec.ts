import { CardSectionBuilder } from '../card-section/card-section.builder';
import { CardBuilder } from '../card.builder';
import { SelectionInputBuilder } from '../widgets/selection-input/selection-input.builder';

describe('CardSectionBuilder', () => {
  let sut: CardSectionBuilder;

  beforeEach(() => {
    sut = new CardSectionBuilder();
  });

  describe('build()', () => {
    it('should build all contained widgets', () => {
      const widgetBuilder1 = CardBuilder.newTextParagraph('foo');
      const widgetBuilder2 = CardBuilder.newSelectionInput().setName('bar');

      sut.addWidget(widgetBuilder1, widgetBuilder2);

      vi.spyOn(widgetBuilder1, 'build');
      vi.spyOn(widgetBuilder2, 'build');

      sut.build();

      expect(widgetBuilder1.build).toHaveBeenCalled();
      expect(widgetBuilder2.build).toHaveBeenCalled();
    });
  });

  it('should not have properties if not set', () => {
    const output = sut.build();
    expect(output).toEqual({ widgets: [] });
  });

  it('should set the header', () => {
    sut.setHeader('some header');
    const output = sut.build();
    expect(output.header).toBe('some header');
  });

  it('should add a widget', () => {
    const widget = new SelectionInputBuilder().setName('foo').setTitle('foo');

    sut.addWidget(widget);
    const output = sut.build();

    expect(output.widgets).toEqual([
      {
        selectionInput: widget.build(),
      },
    ]);
  });

  it('should set collapsible', () => {
    sut.setCollapsible(true);
    const output = sut.build();
    expect(output.collapsible).toBeTruthy();
  });

  it('should set number of uncollapsible widgets', () => {
    sut.setNumUncollapsibleWidgets(1);
    const output = sut.build();
    expect(output.numUncollapsibleWidgets).toBe(1);
  });
});
