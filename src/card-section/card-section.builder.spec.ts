import { CardSectionBuilder } from '../card-section/card-section.builder';
import { SelectionInputBuilder } from '../widgets/selection-input/selection-input.builder';

describe('CardSectionBuilder', () => {
  let sut: CardSectionBuilder;

  beforeEach(() => {
    sut = new CardSectionBuilder();
  });

  test('should not have properties if not set', () => {
    const output = sut.build();
    expect(output).toEqual({ widgets: [] });
  });

  test('should set the header', () => {
    sut.setHeader('some header');
    const output = sut.build();
    expect(output.header).toBe('some header');
  });

  test('should add a widget', () => {
    const widget = new SelectionInputBuilder()
      .setName('foo')
      .setTitle('foo')
      .build();

    sut.addWidget(widget);

    const output = sut.build();

    expect(output.widgets).toEqual([
      {
        selectionInput: widget,
      },
    ]);
  });

  test.todo('should add multiple widgets');

  test('should set collapsible', () => {
    sut.setCollapsible(true);
    const output = sut.build();
    expect(output.collapsible).toBeTruthy();
  });

  test('should set number of uncollapsible widgets', () => {
    sut.setNumUncollapsibleWidgets(1);
    const output = sut.build();
    expect(output.numUncollapsibleWidgets).toBe(1);
  });
});
