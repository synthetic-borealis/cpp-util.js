import * as childProcess from 'child_process';
import CompilerNotFoundError from './errors/compilerNotFound';
import isVersionString from './utils/isVersionString';

/**
 * Checks whether a compiler is in the system path (i.e. PATH).
 * @param {string} compilerName The compiler to look for.
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForCompiler(
  compilerName: string,
): Promise<{ compiler: string, version: string }> {
  return new Promise((resolve, reject) => {
    childProcess.exec(`${compilerName} --version`, (error, stdout) => {
      if (error) {
        reject(new CompilerNotFoundError(compilerName));
      }
      const outputLines = stdout.replaceAll('\r', '').trim().split('\n');
      const version = outputLines[0].split(' ').pop().split('-')[0];
      if (isVersionString(version)) {
        resolve({ compiler: compilerName, version });
      }
      reject(new CompilerNotFoundError(compilerName));
    });
  });
}

/**
 * Checks whether gcc is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForGcc() {
  return checkForCompiler('gcc');
}

/**
 * Checks whether g++ is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForGPlus() {
  return checkForCompiler('g++');
}

/**
 * Checks whether clang is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForClang() {
  return checkForCompiler('clang');
}

/**
 * Checks whether clang++ is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForClangPlus() {
  return checkForCompiler('clang++');
}
