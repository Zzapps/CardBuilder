import { CardService } from '../card-service';
import { ActionBuilder } from './action.builder';

describe('ActionBuilder', () => {
  let sut: ActionBuilder;

  beforeEach(() => {
    sut = new ActionBuilder();
  });

  test('sets the function name to invoke', () => {
    sut.setFunction('foo');
    const output = sut.build();
    expect(output.function).toBe('foo');
  });

  test('sets the parameters', () => {
    const params = {
      param1: 'foo',
      param2: 'bar',
    };

    const expectOutput = [
      {
        key: 'param1',
        value: 'foo',
      },
      {
        key: 'param2',
        value: 'bar',
      },
    ];

    sut.setParameters(params);

    const output = sut.build();
    expect(output.parameters).toEqual(expectOutput);
  });

  test('sets the load indicator', () => {
    const indicator = CardService.LoadIndicator.SPINNER;
    sut.setLoadIndicator(indicator);
    const output = sut.build();
    expect(output.loadIndicator).toEqual(indicator);
  });
});
