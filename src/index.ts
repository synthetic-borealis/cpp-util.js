import CompilerNotFoundError from './errors/compilerNotFound';
import CompilationFailedError from './errors/compilationFailed';
import InvalidCompilerNameError from './errors/invalidCompilerName';

import {
  checkForClang,
  checkForClangPlus,
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
} from './compilerDetection';
import {
  compileWith,
  compileWithClang,
  compileWithClangPlus,
  compileWithGcc,
  compileWithGPlus,
} from './compilation';

export {
  CompilerNotFoundError,
  CompilationFailedError,
  InvalidCompilerNameError,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
};
