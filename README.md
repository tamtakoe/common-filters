# common-filters
Library with common filters

[![NPM version](https://img.shields.io/npm/v/common-filters.svg)](https://npmjs.org/package/common-filters)
[![Build status](https://img.shields.io/travis/tamtakoe/common-filters.svg)](https://travis-ci.org/tamtakoe/common-filters)

**Note:** This module works in browsers and Node.js >= 4.0

## Installation

```sh
npm install common-filters
```

## Usage

```js
const filters = require('common-filters');

filters.toString(['a', 'b', 'c']); //'abc'

filters.round('0.105', -2); //0.11
```

## API

### Filters.add

Use this methods for adding custom filters in simple format.
```js
Filters.add('trim', trim);
//or
Filters.add({
  toLowerCase: toLowerCase,
  toUpperCase: toUpperCase
});

```
Also you can use `Object.assign(commonFilters, customFilters)` in other situations


### Filters.filterName(value, [arg], [options])

- **value** (`Any`) - Filtered value

- **arg** (`Any`) - Value for comparison. Can not be an object or undefined. User can set it as `options.arg`.
                    If you use 'arg' in your filter you must be sure that user will specify this value

- **options** (`Object`) - Options
  * arg (`Any`) - Will be set if arg is specified
  * (`Any`) - Any custom options

- (`Any`) - Any custom arguments

- **return** (`Any`) - Filtered value


### Filters:

#### *Types*

- **toObject** - convert value to object

- **toArray** - convert value to array

- **toNumber** - convert value to number

- **toFinite** - convert value to finite number

- **toInteger** - convert value to integer

- **toString** - convert value to string

- **toDate** - convert value to date

- **toBoolean** - convert value to boolean

- **toUndefined** - convert value to undefined


#### *Numbers* (other types are not filtered)

- **round** - round number
  * arg (`Number` or `String`) - precision

- **range** - return default value if no number or  number is not in range
  * from (`Number`) - left boarder of range
  * to (`Number`) - right boarder of range
  * default (`Any`) - default value


#### *Strings* (other types are not filtered)

- **trim** - trim value

- **prefix** - add prefix to value
  * arg (`String`) - prefix

- **postfix** - add postfix to value
  * arg (`String`) - postfix

- **shorten** - shorten string by specific length and change end to '...'
  * arg (`String`) - length

- **toLowerCase** - convert value to lower case

- **toUpperCase** - convert value to upper case

- **toCamelCase** - convert common strings, dashes-strings or shakes_strings to camelCaseStrings

- **replace** - replace by pattern
  * pattern (`RegExp` or `String`) - RegExp
  * replacement (`String`) - replacement

- **split** - split string by separator to array
  * arg (`String`) - separator

- **reverse** - reverse string or array

- **slice** - get substring or sub array
  * begin (`Number`) - start index
  * end (`Number`) - end index
  

#### *Array* (other types are not filtered)

- **join** - join string by separator to string
  * arg (`String`) - separator


## Tests

```sh
npm install
npm test
```

## License

[MIT](LICENSE)