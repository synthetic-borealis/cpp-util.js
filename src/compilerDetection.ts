import childProcess from 'child_process';
import CompilerNotFoundError from './errors/compilerNotFound';
import InvalidCompilerNameError from './errors/invalidCompilerName';
import isVersionString from './utils/isVersionString';

/**
 * Checks whether a compiler is in the system path (i.e. PATH).
 * @category Compiler Detection
 * @param {string} compilerExecutableName The compiler to look for.
 * @returns {Promise<{compiler: string, version: string}>}
 * @throws {@link CompilerNotFoundError} if specified compiler can't be found.
 */
export function checkForCompiler(
  compilerExecutableName: string,
): Promise<{ compiler: string; version: string }> {
  const validExecutableNameRegex: RegExp = /^[\w\-._+]+$/;

  return new Promise((resolve, reject) => {
    if (!validExecutableNameRegex.test(compilerExecutableName)) {
      reject(new InvalidCompilerNameError());
    }
    childProcess.exec(`${compilerExecutableName} --version`, (error, stdout) => {
      if (error) {
        reject(new CompilerNotFoundError(compilerExecutableName));
      }
      const outputLines = stdout.replace(/\r/g, '')
        .trim()
        .split('\n');
      const splitFirstLine = outputLines[0].split(' ');
      const version = splitFirstLine[splitFirstLine.length - 1].split('-')[0];
      if (isVersionString(version)) {
        resolve({
          compiler: compilerExecutableName,
          version
        });
      }
      reject(new CompilerNotFoundError(compilerExecutableName));
    });
  });
}

/**
 * Checks whether gcc is in the system path (i.e. PATH).
 * @category Compiler Detection
 * @returns {Promise<{compiler: string, version: string}>}
 * @throws {@link CompilerNotFoundError} if gcc can't be found in the system path.
 */
export function checkForGcc() {
  return checkForCompiler('gcc');
}

/**
 * Checks whether g++ is in the system path (i.e. PATH).
 * @category Compiler Detection
 * @returns {Promise<{compiler: string, version: string}>}
 * @throws {@link CompilerNotFoundError} if g++ can't be found in the system path.
 */
export function checkForGPlus() {
  return checkForCompiler('g++');
}

/**
 * Checks whether clang is in the system path (i.e. PATH).
 * @category Compiler Detection
 * @returns {Promise<{compiler: string, version: string}>}
 * @throws {@link CompilerNotFoundError} if clang can't be found in the system path.
 */
export function checkForClang() {
  return checkForCompiler('clang');
}

/**
 * Checks whether clang++ is in the system path (i.e. PATH).
 * @category Compiler Detection
 * @returns {Promise<{compiler: string, version: string}>}
 * @throws {@link CompilerNotFoundError} if clang++ can't be found in the system path.
 */
export function checkForClangPlus() {
  return checkForCompiler('clang++');
}
