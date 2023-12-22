import { ActionBuilder } from "../../../actions/action.builder";
import { OpenLinkActionBuilder } from "../../../actions/open-link-action.builder";
import { CardBuilder } from "../../../card.builder";
import { IconBuilder } from "../../../shared/icon.builder";
import { ImageButtonBuilder } from "./image-button.builder";

describe("ImageButtonBuilder", () => {
  let sut: ImageButtonBuilder;
  let iconBuilder: IconBuilder;
  const icon = CardBuilder.KnownIcon.AIRPLANE;

  beforeEach(() => {
    sut = new ImageButtonBuilder();
    iconBuilder = new IconBuilder();
  });

  describe("setIcon()", () => {
    it("should set the icon using an IconBuilder", () => {
      const expectedIcon = iconBuilder.setKnownIcon(icon).build();
      const output = sut.setIcon(icon).build();
      expect(output.icon).toEqual(expectedIcon);
    });
  });

  describe("setAltText()", () => {
    it("should set the alt text using an IconBuilder", () => {
      const altText = "foo";
      const expectedIcon = iconBuilder.setAltText(altText).build();
      const output = sut.setAltText(altText).build();
      expect(output.icon).toEqual(expectedIcon);
    });
  });

  describe("setDisabled()", () => {
    it("should set the disabled value", () => {
      const output = sut.setDisabled(true).build();
      expect(output.disabled).toBeTruthy();
    });
  });

  describe("setOpenLink())", () => {
    it("should set an open link action", () => {
      const url = "https://zzapps.nl";
      const action = new OpenLinkActionBuilder().setUrl(url).build();
      const output = sut.setOpenLink(action).build();
      expect(output.onClick).toEqual({
        openLink: action,
      });
    });
  });

  describe("setOnClickAction()", () => {
    it("should set an onclick action", () => {
      const action = new ActionBuilder().setFunctionName("my-function").build();
      const output = sut.setOnClickAction(action).build();
      expect(output.onClick).toEqual({
        action,
      });
    });
  });
});
