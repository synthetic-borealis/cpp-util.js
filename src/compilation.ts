import childProcess from 'child_process';
import CompilationFailedError from './errors/compilationFailed';

/**
 * Compiles C/C++ source.
 * @category Compilation
 * @param {string} compilerName Compiler to use.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 * @throws {@link CompilationFailedError} if compilation fails.
 */
export function compileWith(
  compilerName: string,
  inputFile: string,
  outputFile: string,
  link: boolean,
): Promise<{ inputFile: string }> {
  const command = `${compilerName} ${inputFile} -o ${outputFile}${link ? '' : ' -c'}`;

  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error) => {
      if (error) {
        reject(new CompilationFailedError(compilerName, inputFile));
      }
      resolve({ inputFile });
    });
  });
}

/**
 * Compiles C/C++ source using gcc.
 * @category Compilation
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 * @throws {@link CompilationFailedError} if compilation fails.
 */
export function compileWithGcc(inputFile: string, outputFile: string, link = true) {
  return compileWith('gcc', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using g++.
 * @category Compilation
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 * @throws {@link CompilationFailedError} if compilation fails.
 */
export function compileWithGPlus(inputFile: string, outputFile: string, link = true) {
  return compileWith('g++', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using clang.
 * @category Compilation
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 * @throws {@link CompilationFailedError} if compilation fails.
 */
export function compileWithClang(inputFile: string, outputFile: string, link = true) {
  return compileWith('clang', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using clang++.
 * @category Compilation
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 * @throws {@link CompilationFailedError} if compilation fails.
 */
export function compileWithClangPlus(inputFile: string, outputFile: string, link = true) {
  return compileWith('clang++', inputFile, outputFile, link);
}
