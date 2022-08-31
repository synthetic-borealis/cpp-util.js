const CompilerNotFoundError = require('./errors/compilerNotFound');
const CompilationFailedError = require('./errors/compilationFailed');
const {
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
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
  CompilationFailedError,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
};
