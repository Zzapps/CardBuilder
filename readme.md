# CardBuilder
**A helper library to create Google Workspace Add-on UIs**
---
*Note: this is not an official Google project*

# Introduction
Google uses a [card-based UI](https://developers.google.com/apps-script/add-ons/concepts/card-interfaces) for Workspace Add-ons. These UIs can be created by a JSON object with elements that you want in your UI. A handy tool to try all the available elements can be found [here](https://addons.gsuite.google.com/uikit/builder).
Setting up these JSON objects by hand quickly becomes cumbersome though. For this reason, Google has offered a CardBuilder in Apps Script to create UIs using a [builder pattern](https://refactoring.guru/design-patterns/builder).

However, if you're developing in plain Javascript or Typescript, you're out of luck. Until now. This package aims to provide full feature parity with the Apps Script builder, while adding some more useful features on top of it.

# Roadmap
This project is in its early stages. Usage in production projects is therefore not recommended.
Here are the features we are working on:

- [ ] Full CardBuilder
- [ ] A helper for navigating through the card stack
- [ ] More icons
