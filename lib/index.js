const CompilerNotFound = require('./errors/compilerNotFound');

const { isVersionString } = require('./utils/validationHelpers');
const { exec } = require('./utils/executionHelpers');

function checkForCompiler(command) {
  return exec(`${command} --version`)
    .then((res) => {
      const stdout = res.stdout.replaceAll('\r', '').trim().split('\n');
      const version = stdout[0].split(' ').pop().split('-')[0];

      if (isVersionString(version)) {
        return Promise.resolve(version);
      }
      return Promise.reject(new CompilerNotFound(command));
    })
    .catch(() => Promise.reject(new CompilerNotFound(command)));
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

module.exports = {
  checkForCompiler, checkForGcc, checkForGPlus, checkForClang, checkForClangPlus,
};
