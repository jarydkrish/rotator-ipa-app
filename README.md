<div style="text-align: center">
  <img src="https://rotatoripa.co/rotator-ipa-sharing-icon.png?v=1" alt="Rotator IPA"></img>
</div>

![Github Actions](https://github.com/jarydkrish/rotator-ipa-app/workflows/Javascript/badge.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/db112b83f9cc7af62522/maintainability)](https://codeclimate.com/github/jarydkrish/rotator-ipa-app/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/db112b83f9cc7af62522/test_coverage)](https://codeclimate.com/github/jarydkrish/rotator-ipa-app/test_coverage)

## Getting Started

### Prerequisites
Please install the following:
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - Feel free to use [RVM](https://rvm.io/) or [Rbenv (recommended)](https://github.com/rbenv/rbenv) for version management
- [NodeJS](https://nodejs.org/en/)
  - Feel free to use [NVM](https://github.com/creationix/nvm) or [Nodenv (recommended)](https://github.com/nodenv/nodenv) for version management
- [Xcode](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio)

In order to run the project in development, you'll need to install the
required NPM modules, and pods:

```bash
yarn install
cd ios
pod install
```

### Linting

I use a linter for [static code analysis](https://en.wikipedia.org/wiki/Static_program_analysis). I would highly encourage you to consider using them for all coding projects, not just this one.

You can use the following command to install our linters for [Atom, my preferred code editor](https://atom.io/):
```bash
apm install linter linter-eslint
```

#### Eslint
We use [Eslint](http://rubocop.readthedocs.io/en/latest/) as our javascript linter.


### Running in Development

#### iOS

A yarn command is included to get you started on iOS:

```bash
yarn ios
```

#### Android

A yarn command is included to get you started on Android:

```bash
yarn android
```

### License

This project is [MIT Licensed](./LICENSE.md)
