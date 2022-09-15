# cpp-utils

[![GitHub license](https://img.shields.io/github/license/synthetic-borealis/cpp-utils.js)](https://github.com/synthetic-borealis/cpp-utils.js/blob/main/LICENSE)
[![npm version](https://badge.fury.io/js/cpp-utils.svg)](https://badge.fury.io/js/cpp-utils)
![Unit Tests](https://github.com/synthetic-borealis/cpp-utils.js/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/synthetic-borealis/cpp-utils.js/branch/main/graph/badge.svg?token=S03AAT7L2V)](https://codecov.io/gh/synthetic-borealis/cpp-utils.js)

A collection of utility functions for C/C++ compilation from Node.js.

## Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
   1. [Compiler Detection](#compiler-detection)
   2. [Compilation](#compilation)
4. [Examples](#examples)

## Requirements

- Either gcc (preferably with g++) or clang must be in your system path.
- Node.js 16.x or above.

## Installation

Run `yarn add cpp-utils` or `npm i cpp-utils`.

## Usage

The documentation can be found [here](./docs/API.md).

### Compiler Detection

Compilers can be detected by calling ```checkFor[COMPILER]()``` where ```[COMPILER]``` is either Gcc, GPlus (g++),
Clang, or ClangPlus (clang++), for example: ```checkForGcc()```. You can also use ```checkForCompiler(compilerName)```
to detect supported compilers where the compiler executable name differs from the default, for
example: ```checkForCompiler('x86_64-w64-mingw32-gcc')```.

### Compilation

Use ```compileWith[COMPILER](inputFile, outputFile, link)``` to compile a C/C++ source file. Use the ```link```
parameter to indicate whether you want the output to be linked or not (by default it is set to ```true```).

## Examples

### Example 1

```typescript
import {
  CompilerNotFoundError,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
} from 'cpp-utils';

describe('Compiler detection', () => {
  it('Throws CompilerNotFoundError when a specified compiler cannot be found', () => {
    const falseCompiler = 'lol';
    return expect(checkForCompiler(falseCompiler)).rejects.toBeInstanceOf(CompilerNotFoundError);
  });
  it('Detects gcc', () => expect(checkForGcc()).resolves.toBeDefined());
  it('Detects g++', () => expect(checkForGPlus()).resolves.toBeDefined());
  it('Detects clang', () => expect(checkForClang()).resolves.toBeDefined());
  it('Detects clang++', () => expect(checkForClangPlus()).resolves.toBeDefined());
});
```

### Example 2

```javascript
const fs = require('fs/promises');
const {
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
} = require('cpp-utils');

const sourceFile = 'hello.c';
const exeExtension = process.platform === 'win32' ? '.exe' : '';
const exeFile = `hello${exeExtension}`;

describe('Compilation', () => {
  afterEach(() => fs.unlink(exeFile));
  test('With gcc', () => expect(compileWithGcc(sourceFile, exeFile))
    .resolves.toBeDefined());
  test('With g++', () => expect(compileWithGPlus(sourceFile, exeFile))
    .resolves.toBeDefined());
  test('With clang', () => expect(compileWithClang(sourceFile, exeFile))
    .resolves.toBeDefined());
  test('With clang++', () => expect(compileWithClangPlus(sourceFile, exeFile))
    .resolves.toBeDefined());
});
```
