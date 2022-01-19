const cppUtil = require('../index');
const fs = require('fs/promises');
const process = require('process');

describe('Compiler detection tests', () => {
  describe('detectAllCompilers', () => {
    it('Detects compilers', () => {
      return expect(cppUtil.detectAllCompilers()).resolves.toBeDefined();
    });
  });

  describe('checkForCompiler', () => {
    it('Returns rejected promise when failing', () => {
      return expect(cppUtil.checkForCompiler('lmfao')).rejects.toBeDefined();
    });
    it('Detects gcc', () => {
      return expect(cppUtil.checkForGcc()).resolves.toBeDefined();
    });
    it('Detects clang', () => {
      return expect(cppUtil.checkForClang()).resolves.toBeDefined();
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
    return expect(cppUtil.compileWithGcc('test.c', `testC${exeExtension}`, true)).resolves.toBeDefined();
  });

  test('C++ code compiles', () => {
    return expect(cppUtil.compileWithGPlus('test.cpp', `testCPP${exeExtension}`, true)).resolves.toBeDefined();
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
