import {
  checkForClang,
  checkForClangPlus,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  CompilerNotFoundError,
  InvalidCompilerNameError,
} from '../src';

describe('Compiler detection', () => {
  it('Throws CompilerNotFoundError when a specified compiler cannot be found', async () => {
    const falseCompiler = 'lol';
    await expect(checkForCompiler(falseCompiler))
      .rejects
      .toBeInstanceOf(CompilerNotFoundError);
  });
  it('Throws InvalidCompilerNameError when invalid compiler executable name is provided', async () => {
    const invalidCompilerExecutable = '/path/to/gcc';
    await expect(checkForCompiler(invalidCompilerExecutable))
      .rejects.toBeInstanceOf(InvalidCompilerNameError);
  });
  it('Detects gcc', () => expect(checkForGcc())
    .resolves
    .toBeDefined());
  it('Detects g++', () => expect(checkForGPlus())
    .resolves
    .toBeDefined());
  it('Detects clang', () => expect(checkForClang())
    .resolves
    .toBeDefined());
  it('Detects clang++', () => expect(checkForClangPlus())
    .resolves
    .toBeDefined());
});
