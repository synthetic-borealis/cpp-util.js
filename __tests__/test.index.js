const fs = require('fs/promises');
const process = require('process');
const cppUtils = require('../index');

describe('Compiler detection tests', () => {
  describe('detectAllCompilers', () => {
    it('Detects compilers', () => cppUtils.detectAllCompilers()
      .then(() => {
        expect(true).toBeTruthy();
      }));
  });

  describe('checkForCompiler', () => {
    it('Returns rejected promise when failing', () => expect(cppUtils.checkForCompiler('lmfao'))
      .rejects.toBeDefined());
    it('Detects gcc', () => expect(cppUtils.checkForGcc()).resolves.toBeDefined());
    it('Detects clang', () => expect(cppUtils.checkForClang()).resolves.toBeDefined());
  });
});

describe('Compilation tests', () => {
  const exeExtension = process.platform === 'win32' ? '.exe' : '';
  const testCodeC = '#include <stdio.h>\n'
    + '\n'
    + 'int main()\n'
    + '{\n'
    + '    printf("Hello World!\\n");\n'
    + '    return 0;\n'
    + '}\n';
  const testCodeCPP = '#include <iostream>\n'
    + '\n'
    + 'int main()\n'
    + '{\n'
    + '    std::cout << "Hello World!\\n";\n'
    + '    return 0;\n'
    + '}\n';

  beforeAll(() => Promise.all([fs.writeFile('test.c', testCodeC), fs.writeFile('test.cpp', testCodeCPP)]));

  test('C code compiles', () => expect(cppUtils.compileWithGcc('test.c', `testC${exeExtension}`, true))
    .resolves.toBeDefined());

  test('C++ code compiles', () => expect(cppUtils.compileWithGPlus('test.cpp', `testCPP${exeExtension}`, true))
    .resolves.toBeDefined());

  afterAll(() => Promise.all([
    fs.unlink('test.c'),
    fs.unlink('test.cpp'),
    fs.unlink(`testC${exeExtension}`),
    fs.unlink(`testCPP${exeExtension}`),
  ]));
});
