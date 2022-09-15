import * as childProcess from 'child_process';
import CompilationFailedError from './errors/compilationFailed';

/**
 * Compiles C/C++ source.
 * @param {string} compilerName Compiler to use.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
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
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 */
export function compileWithGcc(inputFile: string, outputFile: string, link = true) {
  return compileWith('gcc', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using g++.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 */
export function compileWithGPlus(inputFile: string, outputFile: string, link = true) {
  return compileWith('g++', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using clang.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 */
export function compileWithClang(inputFile: string, outputFile: string, link = true) {
  return compileWith('clang', inputFile, outputFile, link);
}

/**
 * Compiles C/C++ source using clang++.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<{ inputFile: string }>}
 */
export function compileWithClangPlus(inputFile: string, outputFile: string, link = true) {
  return compileWith('clang++', inputFile, outputFile, link);
}
