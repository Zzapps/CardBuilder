<p align="center">
    <img src="/assets/cardbuilder-dark-text.svg?sanitize=true#gh-light-mode-only"/>
    <img src="/assets/cardbuilder-light-text.svg?sanitize=true#gh-dark-mode-only"/>
    <h1 align="center">A helper library for creating Google Workspace Add-on UIs</h1>
    <p align="center">A <a href="https://zzapps.nl" target="_blank">Zzapps</a> project.</p>
    <p align="center">
        <img src="/assets/coverage-badge.svg?sanitize=true" />
        <img src="https://img.shields.io/badge/dependencies-0-green.svg?style=flat" />
        <img src="https://img.shields.io/badge/license-MIT-informational" />
    </p>
</p>


# Introduction
Google Workspace Add-ons feature a [card-based user interface](https://developers.google.com/apps-script/add-ons/concepts/card-interfaces). To create these UIs, you define the desired elements within a JSON object. This JSON structure outlines the various components needed for the add-on's interface. A handy tool to try all the available elements can be found [here](https://addons.gsuite.google.com/uikit/builder).

Setting up these JSON objects by hand quickly becomes cumbersome though. For this reason, Google has offered a CardService in Apps Script to create UIs using a [builder pattern](https://refactoring.guru/design-patterns/builder).

However, if you're developing in plain Javascript or Typescript, you're out of luck. Until now. This package aims to provide full feature parity with the Apps Script builder, while adding some more useful features on top of it.

# Roadmap
This project is still under development. Usage in production projects is therefore at your own discretion.
Here are the features we are working on:

- [ ] Full CardBuilder
- [x] Full Typescript type coverage
- [ ] A helper for navigating through the card stack
- [ ] More icons

# Using this package
Install the package with `npm install cardbuilder` and import it.
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
const card = CardService.newCardBuilder().addSection(section).build();
```

# Included components and widgets
- Card
- Section
- Header
- Footer
- ImageButton
- TextButton
- ButtonList
- DateTimePicker
- SelectionInput
- DecoratedText
- TextParagraph
- Divider

More coming soon
