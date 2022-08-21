const CompilerNotFoundError = require('./lib/errors/compilerNotFound');
const NoCompilerFoundError = require('./lib/errors/noCompilerFound');
const CompilationFailedError = require('./lib/errors/compilationFailed');
const {
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
  detectAllCompilers,
} = require('./lib/compilerDetection');
const {
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
} = require('./lib/compilation');

module.exports = {
  CompilerNotFoundError,
  NoCompilerFoundError,
  CompilationFailedError,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
  detectAllCompilers,
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
};
