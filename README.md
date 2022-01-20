# cpp-utils
![Tests](https://github.com/synthetic-borealis/cpp-utils.js/actions/workflows/test.yml/badge.svg)
[![GitHub license](https://img.shields.io/github/license/synthetic-borealis/cpp-utils.js)](https://github.com/synthetic-borealis/cpp-utils.js/blob/main/LICENSE)

A collection of utility functions for C/C++ compilation from Node.js.

## Requirements

- Either gcc (preferably with g++) or clang must bein your system path.
- Node.js 15.x or above (testing fails with older versions).

## Installation

Run `npm i cpp-utils`.

## Overview

### Compiler Detection

Compilers can be detected by calling ```checkFor[COMPILER]()``` where ```[COMPILER]``` is either Gcc, GPlus (g++), Clang, or ClangPlus (clang++), for example: ```checkForGcc()```. You can also use ```checkForCompiler(compilerName)``` to detect supported compilers where the compiler executable name differs from the default, for example: ```checkForCompiler('x86_64-w64-mingw32-gcc')```.

Additionally, ```detectAllCompilers()``` will look form supported compilers and return an array of objects, each with a name of a compiler that was found and the version that was detected.

### Compilation

Use ```compileWith[COMPILER](inputFile, outputFile, link)``` to compile a C/C++ source file. Use the ```link``` parameter to indicate whether you want the output to be linked or not (by default it is set to ```true```).

## Examples

### Example 1

```javascript
const cppUtils = require('cpp-utils');
const fs = require('fs/promises');
const process = require('process');

describe('Compiler detection tests', () => {
  describe('detectAllCompilers', () => {
    it('Detects compilers', () => {
      return expect(cppUtils.detectAllCompilers()).resolves.toBeDefined();
    });
  });

  describe('checkForCompiler', () => {
    it('Returns rejected promise when failing', () => {
      return expect(cppUtils.checkForCompiler('lmfao')).rejects.toBeDefined();
    });
    it('Detects gcc', () => {
      return expect(cppUtils.checkForGcc()).resolves.toBeDefined();
    });
    it('Detects clang', () => {
      return expect(cppUtils.checkForClang()).resolves.toBeDefined();
    });
  });
});

describe('Compilation tests', () => {
  const exeExtension = process.platform === 'win32' ? '.exe' : '';
  const testCodeC = '#include <stdio.h>\n' +
    '\n' +
    'int main()\n' +
    '{\n' +
    '    printf("Hello World!\\n");\n' +
    '    return 0;\n' +
    '}\n';
  const testCodeCPP = '#include <iostream>\n' +
    '\n' +
    'int main()\n' +
    '{\n' +
    '    std::cout << "Hello World!\\n";\n' +
    '    return 0;\n' +
    '}\n';

  beforeAll(() => {
    return Promise.all([fs.writeFile('test.c', testCodeC), fs.writeFile('test.cpp', testCodeCPP)]);
  });

  test('C code compiles', () => {
    return expect(cppUtils.compileWithGcc('test.c', `testC${exeExtension}`, true)).resolves.toBeDefined();
  });

  test('C++ code compiles', () => {
    return expect(cppUtils.compileWithGPlus('test.cpp', `testCPP${exeExtension}`, true)).resolves.toBeDefined();
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('test.c'),
      fs.unlink('test.cpp'),
      fs.unlink(`testC${exeExtension}`),
      fs.unlink(`testCPP${exeExtension}`),
    ]);
  });
});
```
