const CompilerNotFoundError = require('./errors/compilerNotFound');
const NoCompilerFoundError = require('./errors/noCompilerFound');
const compilerDetection = require('./compilerDetection');

module.exports = { CompilerNotFoundError, NoCompilerFoundError, ...compilerDetection };
