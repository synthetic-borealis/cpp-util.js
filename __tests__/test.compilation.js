const fs = require('fs/promises');
const {
  CompilationFailedError,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
} = require('../lib');

const badSyntaxFile = 'assets/syntax-error.c';
const errorObjectFile = 'syntax-error.o';
const helloFile = 'assets/hello.c';
const objectFile = 'hello.o';
const exeExtension = process.platform === 'win32' ? '.exe' : '';
const exeFile = `hello${exeExtension}`;

describe('Compilation', () => {
  it(
    'Throws CompilationFailedError when compilation fails',
    () => expect(compileWithGcc(badSyntaxFile, errorObjectFile))
      .rejects.toBeInstanceOf(CompilationFailedError),
  );
  describe('With linking', () => {
    beforeAll(() => jest.setTimeout(10000));
    afterEach(() => fs.unlink(exeFile));
    test('With gcc', () => expect(compileWithGcc(helloFile, exeFile))
      .resolves.toBeDefined());
    test('With g++', () => expect(compileWithGPlus(helloFile, exeFile))
      .resolves.toBeDefined());
    test('With clang', () => expect(compileWithClang(helloFile, exeFile))
      .resolves.toBeDefined());
    test('With clang++', () => expect(compileWithClangPlus(helloFile, exeFile))
      .resolves.toBeDefined());
  });
  describe('Without linking', () => {
    afterEach(() => fs.unlink(objectFile));
    test('With gcc', () => expect(compileWithGcc(helloFile, objectFile, false))
      .resolves.toBeDefined());
    test('With g++', () => expect(compileWithGPlus(helloFile, objectFile, false))
      .resolves.toBeDefined());
    test('With clang', () => expect(compileWithClang(helloFile, objectFile, false))
      .resolves.toBeDefined());
    test('With clang++', () => expect(compileWithClangPlus(helloFile, objectFile, false))
      .resolves.toBeDefined());
  });
});
