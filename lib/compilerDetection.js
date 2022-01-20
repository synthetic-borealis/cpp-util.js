const CompilerNotFoundError = require('./errors/compilerNotFound');
const NoCompilerFoundError = require('./errors/noCompilerFound');

const { isVersionString } = require('./utils/validationHelpers');
const { exec } = require('./utils/executionHelpers');

/**
 * Checks whether a compiler is in the system path (i.e. PATH).
 * @param {string} compilerName The compiler to look for.
 * @returns {Promise<{compiler: string, version: string}>}
 */
function checkForCompiler(compilerName) {
  return exec(`${compilerName} --version`)
    .then((res) => {
      const stdout = res.stdout.replaceAll('\r', '').trim().split('\n');
      const version = stdout[0].split(' ').pop().split('-')[0];

      if (isVersionString(version)) {
        return Promise.resolve({ compiler: compilerName, version });
      }
      return Promise.reject(new CompilerNotFoundError(compilerName));
    })
    .catch(() => Promise.reject(new CompilerNotFoundError(compilerName)));
}

/**
 * Checks whether gcc is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
function checkForGcc() {
  return checkForCompiler('gcc');
}

/**
 * Checks whether g++ is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
function checkForGPlus() {
  return checkForCompiler('g++');
}

/**
 * Checks whether clang is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
function checkForClang() {
  return checkForCompiler('clang');
}

/**
 * Checks whether clang++ is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
function checkForClangPlus() {
  return checkForCompiler('clang++');
}

/**
 *
 * @returns {Promise<Array<{compiler: string, version: string}>>}
 */
function detectAllCompilers() {
  const promises = [checkForGcc(), checkForGPlus(), checkForClang(), checkForClangPlus()];

  return Promise.allSettled(promises)
    .then((results) => results.filter((promise) => promise.status === 'fulfilled')
      .map((result) => result.value))
    .then((compilers) => (compilers.length > 0
      ? Promise.resolve(compilers) : Promise.reject(new NoCompilerFoundError())));
}

module.exports = {
  checkForCompiler,
  checkForGcc,
  checkForGPlus,
  checkForClang,
  checkForClangPlus,
  detectAllCompilers,
};
