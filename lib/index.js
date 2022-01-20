const CompilerNotFoundError = require('./errors/compilerNotFound');
const NoCompilerFoundError = require('./errors/noCompilerFound');
const CompilationFailedError = require('./errors/compilationFailed');
const compilerDetection = require('./compilerDetection');
const compilation = require('./compilation');

module.exports = {
  CompilerNotFoundError,
  NoCompilerFoundError,
  CompilationFailedError,
  ...compilerDetection,
  ...compilation,
};
