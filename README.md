# [Clashapi](https://www.npmjs.com/package/clashapi/)

A npm package for [Clash Royale](http://supercell.com/en/games/clashroyale/) that consumes [clashapi](http://clashapi.xyz/) using [trae](https://github.com/Huemul/trae) to provide information about the game.

## Content

1. [How to use](#how-to-use)
    1. [Install](#install)
    2. [Basic Usage](#basic-usage)
    3. [Methods](#methods)
2. [Want to help](#want-to-help)
3. [License](#license)

## How to use?

Consume the API to get all the information you need.

### Install

```
$ npm install --save clashapi
```

```
$ yarn add clashapi
```

### Basic usage

If you are not using [trae](https://github.com/Huemul/trae) (Pro tip: give it a try):

```
import clashapi from 'clashapi'

clashapi.chests()
  .then(...)
```

If you are using [that awesome library](https://github.com/Huemul/trae):

```
import trae from 'trae'
import clashapiFactory from 'clashapi/factory'

const clashapi = clashapiFactory(trae)

clashapi.chests()
  .then(...)
```

### Methods

| Method | Description |
|---|---|
| `clashapi.arenas()` | All Arenas information |
| `clashapi.arenas(:id)` | Single Arena information |
| `clashapi.arenas(:idName)` | Single Arena information |
| `clashapi.cards` | All Cards information |
| `clashapi.cards(:id)` | Single Card information |
| `clashapi.cards(:idName)` | Single Card information |
| `clashapi.chests` | All Chests information |
| `clashapi.chests(:id)` | Single Chest information |
| `clashapi.chests(:idName)` | Single Chest information |
| `clashapi.leagues` | All Leagues information |
| `clashapi.leagues(:id)` | Single League information |
| `clashapi.leagues(:idName)` | Single League information |
| `clashapi.players` | All Players levels information |
| `clashapi.players(:id)` | Player level information |
| `clashapi.players(:idName)` | Player level information |

### Examples

```
clashapi
  .chests() // returns all chests
  
clashapi
  .cards('royale-giant') // returns information about the royale giant

clashapi
  .leagues() // returns all the leagues
  .then(leagues => leagues[0]._id) // returns the first league id
  .then(clashapi.leagues) // returns the information for the first league, sending the id to the API
```

## Want to help?

Create an issue to report bugs or give suggestions on how to improve this project.

If you like the package, please star this repository and/or [the API repository](https://github.com/martincarrera/clash-royale-api).

If you create an app using this package, please mention that you are using [clashapi](http://clashapi.xyz) and add your app to the table on [the API repository](https://github.com/martincarrera/clash-royale-api).

If you want to contribute to the package, feel free to create a pull request.

If you ❤️ the API, [help me pay the API hosting](http://patreon.com/martincarrera)!

## License

[MIT License](https://github.com/martincarrera/clashapi/blob/master/LICENSE).
