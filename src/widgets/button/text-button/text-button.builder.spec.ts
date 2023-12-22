import { TextButtonBuilder } from './text-button.builder';
import { ActionBuilder } from '../../../actions/action.builder';
import { OpenLinkActionBuilder } from '../../../actions/open-link-action.builder';

describe('TextButtonBuilder', () => {
  let sut: TextButtonBuilder;

  beforeEach(() => {
    sut = new TextButtonBuilder();
  });

  it('should set the text', () => {
    const text = 'foo';
    sut.setText(text);
    const output = sut.build();
    expect(output.text).toBe(text);
  });

  it('should set the altText', () => {
    const altText = 'bar';
    sut.setAltText(altText);
    const output = sut.build();
    expect(output.altText).toBe(altText);
  });

  it('should set whether the button is disabled', () => {
    const disabled = true;
    sut.setDisabled(disabled);
    const output = sut.build();
    expect(output.disabled).toBe(disabled);
  });

  it.skip('should set the button color', () => {
    sut.setBackgroundColor(0.9, 0.8, 0.7, 1);
    const output = sut.build();
    expect(output.color).toEqual({
      red: 0.9,
      green: 0.8,
      blue: 0.7,
      alpha: 1,
    });
  });

  it('should set an onClick action', () => {
    const action = new ActionBuilder().setFunctionName('my-function').build();
    sut.setOnClickAction(action);
    const output = sut.build();
    expect(output.onClick).toEqual({
      action,
    });
  });

  it('should set an onClick open link action', () => {
    const url = 'https://zzapps.nl';
    const action = new OpenLinkActionBuilder().setUrl(url).build();
    sut.setOpenLink(action);
    const output = sut.build();
    expect(output.onClick).toEqual({
      openLink: action,
    });
  });
});
