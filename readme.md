# CardBuilder
**A helper library to create Google Workspace Add-on UIs**
---
*Note: this is not an official Google project*

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-81.56%25-yellow.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-76.85%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-82.25%25-yellow.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-82.28%25-yellow.svg?style=flat) |

# Introduction
Google uses a [card-based UI](https://developers.google.com/apps-script/add-ons/concepts/card-interfaces) for Workspace Add-ons. These UIs can be created by a JSON object with elements that you want in your UI. A handy tool to try all the available elements can be found [here](https://addons.gsuite.google.com/uikit/builder).
Setting up these JSON objects by hand quickly becomes cumbersome though. For this reason, Google has offered a CardService in Apps Script to create UIs using a [builder pattern](https://refactoring.guru/design-patterns/builder).

However, if you're developing in plain Javascript or Typescript, you're out of luck. Until now. This package aims to provide full feature parity with the Apps Script builder, while adding some more useful features on top of it.

# Roadmap
This project is in its early stages. Usage in production projects is therefore not recommended.
Here are the features we are working on:

- [ ] Full CardBuilder
- [ ] A helper for navigating through the card stack
- [ ] More icons

# Using the this package
Almost everything can be accessed from the `CardService` class. This class contains all the static methods to access the builders for card elements. The `CardService` namespace also contains all enums.

An example:

```ts
import { CardService } from 'cardbuilder'

// Create some widgets
const selectionInput = CardService.newSelectionInput()
    .setType(CardService.selectionInputType.DROPDOWN)
    .setLabel('My dropdown')
    .addItem('The default option', 'foo', true)
    .addItem('Another option', 'bar');

// Note that passing a string into this call immediately sets the text on the returned builder instance
const textParagraph = CardService.newTextParagraph('Hello world')

// Create a section and add the widgets
// Note that addWidget() can take any number of widgets as argument, but also supports chaining
const section = CardService.newCardSection().addWidget(selectionInput, textParagraph)

// Create a card and add the section
const card = CardService.newCardBuilder().addSection(section)
```

