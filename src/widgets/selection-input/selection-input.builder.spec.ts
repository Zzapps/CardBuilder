import { ActionBuilder } from '../../actions/action.builder';
import { CardBuilder } from '../../card.builder';
import { SelectionInputItem } from './selection-input-item';
import { SelectionInputBuilder } from './selection-input.builder';

describe('SelectionInputBuilder', () => {
  let sut: SelectionInputBuilder;

  beforeEach(() => {
    sut = new SelectionInputBuilder();
  });

  test('should set the name', () => {
    const name = 'my name';
    sut.setName(name);
    const output = sut.build();
    expect(output.name).toBe(name);
  });

  test('should set the type', () => {
    const type = CardBuilder.SelectionInputType.RADIO_BUTTON;
    sut.setType(type);
    const output = sut.build();
    expect(output.type).toBe(type);
  });

  test('should set the label', () => {
    const label = 'some label';
    sut.setLabel(label);
    const output = sut.build();
    expect(output.label).toBe(label);
  });

  test('should set the label via the title method', () => {
    const label = 'some other label';
    sut.setTitle(label);
    const output = sut.build();
    expect(output.label).toBe(label);
  });

  test('should set the onChange action', () => {
    const action = new ActionBuilder().setFunction('foo').build();
    sut.setOnChangeAction(action);
    const output = sut.build();
    expect(output.onChangeAction).toEqual({
      function: 'foo',
      parameters: [],
    });
  });

  describe('should create', () => {
    test('an item with text and value', () => {
      const itemKey = 'foo';
      const itemValue = 'bar';

      sut.addItem(itemKey, itemValue);

      const output = sut.build();

      const outputItem = output.items.at(0);
      expect(outputItem).toBeInstanceOf(SelectionInputItem);
      expect(outputItem).toEqual({
        text: itemKey,
        value: itemValue,
        selected: false,
      });
    });

    test('an item with selected boolean', () => {
      const itemKey = 'foo';
      const itemValue = 'bar';
      const itemIsSelected = true;

      sut.addItem(itemKey, itemValue, itemIsSelected);

      const output = sut.build();

      const outputItem = output.items.at(0);
      expect(outputItem).toBeInstanceOf(SelectionInputItem);
      expect(outputItem).toEqual({
        text: itemKey,
        value: itemValue,
        selected: itemIsSelected,
      });
    });

    test('multiple items', () => {
      const item1Key = 'foo';
      const item2Key = 'foo2';
      const item1Value = 'bar';
      const item2Value = 'bar2';

      sut.addItem(item1Key, item1Value);
      sut.addItem(item2Key, item2Value, true);

      const output = sut.build();

      expect(output.items).toEqual([
        { text: item1Key, value: item1Value, selected: false },
        { text: item2Key, value: item2Value, selected: true },
      ]);
    });
  });
});
