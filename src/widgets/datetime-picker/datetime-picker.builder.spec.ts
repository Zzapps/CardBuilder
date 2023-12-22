import { CardBuilder } from '../../card.builder';
import { DateTimePickerBuilder } from './datetime-picker.builder';
import { DateTimePickerWidget } from './datetime-picker.widget';

describe('DateTimePickerBuilder', () => {
  let sut: DateTimePickerBuilder;

  beforeEach(() => {
    sut = new DateTimePickerBuilder();
  });

  test('should set the name', () => {
    const name = 'foo';
    const output = sut.setName(name).build();
    expect(output).toBeInstanceOf(DateTimePickerWidget);
    expect(output.name).toBe(name);
  });

  test('should set type to DATE_AND_TIME by default', () => {
    const output = sut.build();
    expect(output.type).toBe(CardBuilder.DateTimePickerType.DATE_AND_TIME);
  });
});
