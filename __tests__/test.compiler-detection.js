const {
  CompilerNotFoundError,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
} = require('../lib');

describe('Compiler detection', () => {
  it('Throws CompilerNotFoundError when a specified compiler cannot be found', async () => {
    await expect(checkForCompiler('lol')).rejects.toBeInstanceOf(CompilerNotFoundError);
  });
  it('Detects gcc', async () => {
    await expect(checkForGcc()).resolves.toBeDefined();
  });
  it('Detects g++', async () => {
    await expect(checkForGPlus()).resolves.toBeDefined();
  });
  it('Detects clang', async () => {
    await expect(checkForClang()).resolves.toBeDefined();
  });
  it('Detects clang++', async () => {
    await expect(checkForClangPlus()).resolves.toBeDefined();
  });
});
