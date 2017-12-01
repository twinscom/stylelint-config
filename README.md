# stylelint-config

[![npm (scoped)](https://img.shields.io/npm/v/@twinscom/stylelint-config.svg?style=flat-square)](https://www.npmjs.com/package/@twinscom/stylelint-config)

> A shareable config for stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).

Turns on additional rules and overrides the `indentation` rule to use 4 spaces.

It favours strictness over flexibility for things like multi-line lists and single-line rulesets, and doesn't try to avoid potentially divisive rules.

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](./index.json).

## Installation

```sh
npm install --save-dev @twinscom/stylelint-config
```

## Usage

If you've installed `@twinscom/stylelint-config` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@twinscom/stylelint-config"
}
```

If you've globally installed `@twinscom/stylelint-config` using the `-g` flag, then you'll need to use the absolute path to `@twinscom/stylelint-config` in your config e.g.

```json
{
  "extends": "/absolute/path/to/@twinscom/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "@twinscom/stylelint-config",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## [Changelog](https://github.com/twinscom/stylelint-config/releases)

## License

[MIT](LICENSE)
