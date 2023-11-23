# @twinscom/stylelint-config

[![npm (scoped)](https://img.shields.io/npm/v/@twinscom/stylelint-config.svg?style=flat-square)](https://www.npmjs.com/package/@twinscom/stylelint-config)

Based on
[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).

## Installation

```sh
npm install --save-dev @twinscom/stylelint-config
```

Then set your `.stylelintrc.json` config to:

```json
{
  "extends": ["@twinscom/stylelint-config"]
}
```

## SCSS

Based on
[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss).

```json
{
  "extends": ["@twinscom/stylelint-config/scss"]
}
```

## CSS-in-JS (styled-components/Emotion)

Same as SCSS, but for `*.{j,t}sx` files.

```json
{
  "extends": ["@twinscom/stylelint-config/css-in-js"]
}
```

## [Changelog](https://github.com/twinscom/stylelint-config/releases)

## License

[CC0-1.0](LICENSE)
