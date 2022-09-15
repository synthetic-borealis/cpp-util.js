import CompilerNotFoundError from './errors/compilerNotFound';
import CompilationFailedError from './errors/compilationFailed';
import {
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
} from './compilerDetection';
import {
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
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
