const cppUtils = require('../index');
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
