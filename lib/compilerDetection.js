const CompilerNotFoundError = require('./errors/compilerNotFound');
const NoCompilerFoundError = require('./errors/noCompilerFound');

const { isVersionString } = require('./utils/validationHelpers');
const { exec } = require('./utils/executionHelpers');

function checkForCompiler(command) {
  return exec(`${command} --version`)
    .then((res) => {
      console.log(res.stdout);
      const stdout = res.stdout.replaceAll('\r', '').trim().split('\n');
      const version = stdout[0].split(' ').pop().split('-')[0];

      if (isVersionString(version)) {
        return Promise.resolve({ compiler: command, version });
      }
      return Promise.reject(new CompilerNotFoundError(command));
    })
    .catch(() => Promise.reject(new CompilerNotFoundError(command)));
}

function checkForGcc() {
  return checkForCompiler('gcc');
}

function checkForGPlus() {
  return checkForCompiler('g++');
}

function checkForClang() {
  return checkForCompiler('clang');
}

function checkForClangPlus() {
  return checkForCompiler('clang++');
}

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
