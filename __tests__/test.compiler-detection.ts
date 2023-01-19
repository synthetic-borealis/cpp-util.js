import {
  checkForClang,
  checkForClangPlus,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  CompilerNotFoundError,
} from '../src';

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
