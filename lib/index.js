const CompilerNotFoundError = require('./errors/compilerNotFound');
const NoCompilerFoundError = require('./errors/noCompilerFound');
const CompilationFailedError = require('./errors/compilationFailed');
const {
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
  detectAllCompilers,
} = require('./compilerDetection');
const {
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
} = require('./compilation');

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
