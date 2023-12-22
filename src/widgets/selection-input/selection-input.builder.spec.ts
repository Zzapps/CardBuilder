import { CardBuilder } from '../../card.builder';
import { SelectionInputItem } from './selection-input-item';
import { SelectionInputBuilder } from './selection-input.builder';
import { SelectionInputWidget } from './selection-input.widget';

describe('SelectionInputBuilder', () => {
  let sut: SelectionInputBuilder;

  beforeEach(() => {
    sut = new SelectionInputBuilder();
  });

  describe('build', () => {
    it('should return a SelectionInputWidget', () => {
      sut.setName('foo');
      const widget = sut.build();
      expect(widget).toBeInstanceOf(SelectionInputWidget);
    });

    it('should build the onChangeAction if it is set', () => {
      const actionBuilder = CardBuilder.newAction().setFunctionName('foo');
      vi.spyOn(actionBuilder, 'build');

      sut.setOnChangeAction(actionBuilder);
      const widget = sut.build();

      expect(actionBuilder.build).toHaveBeenCalled();

      const action = actionBuilder.build();
      expect(widget.onChangeAction).toEqual(action);
    });

    it('should default to SWITCH input type', () => {
      sut.setName('foo');
      const widget = sut.build();
      expect(widget.type).toEqual(CardBuilder.SelectionInputType.SWITCH);
    });
  });

  describe('addItem())', () => {
    it('should add an item with text and value', () => {
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

    it('should add an item with selected boolean', () => {
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

    it('should add multiple items', () => {
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
