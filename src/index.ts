import CompilerNotFoundError from './errors/compilerNotFound';
import CompilationFailedError from './errors/compilationFailed';
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
