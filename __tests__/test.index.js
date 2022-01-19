const cppUtil = require('../index');

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
