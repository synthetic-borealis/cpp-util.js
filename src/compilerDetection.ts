import * as childProcess from 'child_process';
import CompilerNotFoundError from './errors/compilerNotFound';
import isVersionString from './utils/isVersionString';

/**
 * Checks whether a compiler is in the system path (i.e. PATH).
 * @category Compiler Detection
 * @param {string} compilerName The compiler to look for.
 * @returns {Promise<{compiler: string, version: string}>}
 * @throws {@link CompilerNotFoundError} if specified compiler can't be found.
 */
export function checkForCompiler(
  compilerName: string,
): Promise<{ compiler: string; version: string }> {
  return new Promise((resolve, reject) => {
    childProcess.exec(`${compilerName} --version`, (error, stdout) => {
      if (error) {
        reject(new CompilerNotFoundError(compilerName));
      }
      const outputLines = stdout.replace(/\r/g, '').trim().split('\n');
      const splitFirstLine = outputLines[0].split(' ');
      const version = splitFirstLine[splitFirstLine.length - 1].split('-')[0];
      if (isVersionString(version)) {
        resolve({ compiler: compilerName, version });
      }
      reject(new CompilerNotFoundError(compilerName));
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
