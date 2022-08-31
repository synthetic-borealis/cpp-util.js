const {
  CompilerNotFoundError,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
} = require('../lib');

describe('Compiler detection', () => {
  it(
    'Throws CompilerNotFoundError when a specified compiler cannot be found',
    () => expect(checkForCompiler('lol')).rejects.toBeInstanceOf(CompilerNotFoundError),
  );
  it('Detects gcc', () => expect(checkForGcc()).resolves.toBeDefined());
  it('Detects g++', () => expect(checkForGPlus()).resolves.toBeDefined());
  it('Detects clang', () => expect(checkForClang()).resolves.toBeDefined());
  it('Detects clang++', () => expect(checkForClangPlus()).resolves.toBeDefined());
});
