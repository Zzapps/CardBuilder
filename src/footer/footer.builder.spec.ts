import { TextButtonBuilder } from '../widgets/button/text-button/text-button.builder';
import { Footer } from './footer';
import { FooterBuilder } from './footer.builder';

describe('FooterBuilder', () => {
  let sut: FooterBuilder;

  beforeEach(() => {
    sut = new FooterBuilder();
  });

  test('should set the primary button', () => {
    const button = new TextButtonBuilder().setText('foo').build();
    const output = sut.setPrimaryButton(button).build();

    expect(output).toBeInstanceOf(Footer);
    expect(output.primaryButton).toBe(button);
  });

  test('should set the secondary button', () => {
    const button = new TextButtonBuilder().setText('bar').build();
    const output = sut
      .setPrimaryButton(button)
      .setSecondaryButton(button)
      .build();

    expect(output).toBeInstanceOf(Footer);
    expect(output.secondaryButton).toBe(button);
  });

  test('should throw if no primary button was set', () => {
    const button = new TextButtonBuilder().setText('bar').build();
    const act = () => sut.setSecondaryButton(button).build();

    expect(act).toThrow();
  });
});
