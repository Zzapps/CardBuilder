import { Card, CardService } from '../../src';
import { TestFixture } from '../fixture';

export default class Fixture1 extends TestFixture {
  buildCard(): Card {
    let cardSection1ButtonList1Button1Action1 = CardService.newAction()
      .setFunctionName('TODO')
      .setParameters({});

    let cardSection1ButtonList1Button1 = CardService.newTextButton()
      .setText('Button 1')
      .setBackgroundColor('#d6006d88')
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
      .setOnClickAction(cardSection1ButtonList1Button1Action1);

    let cardSection1ButtonList1Button2Action1 = CardService.newAction()
      .setFunctionName('TODO')
      .setParameters({});

    let cardSection1ButtonList1Button2 = CardService.newTextButton()
      .setText('Button 2')
      .setTextButtonStyle(CardService.TextButtonStyle.TEXT)
      .setOnClickAction(cardSection1ButtonList1Button2Action1);

    let cardSection1ButtonList1Button3Action1 = CardService.newAction()
      .setFunctionName('TODO')
      .setParameters({});

    let cardSection1ButtonList1Button3 = CardService.newTextButton()
      .setText('Button 2')
      .setTextButtonStyle(CardService.TextButtonStyle.TEXT)
      .setOnClickAction(cardSection1ButtonList1Button3Action1);

    let cardSection1ButtonList1 = CardService.newButtonSet()
      .addButton(cardSection1ButtonList1Button1)
      .addButton(cardSection1ButtonList1Button2)
      .addButton(cardSection1ButtonList1Button3);

    let cardSection1 = CardService.newCardSection().addWidget(
      cardSection1ButtonList1,
    );

    let card = CardService.newCardBuilder().addSection(cardSection1).build();
    return card;
  }

  expectedOutput: Object = {
    sections: [
      {
        widgets: [
          {
            buttonList: {
              buttons: [
                {
                  text: 'Button 1',
                  onClick: {
                    action: {
                      function: 'TODO',
                      parameters: [],
                    },
                  },
                  color: {
                    red: 0.839,
                    green: 0,
                    blue: 0.427,
                    alpha: 0.533,
                  },
                },
                {
                  text: 'Button 2',
                  onClick: {
                    action: {
                      function: 'TODO',
                      parameters: [],
                    },
                  },
                },
                {
                  text: 'Button 2',
                  onClick: {
                    action: {
                      function: 'TODO',
                      parameters: [],
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    ],
  };
}
