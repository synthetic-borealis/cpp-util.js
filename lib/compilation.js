const { exec } = require('./utils/executionHelpers');
const CompilationFailedError = require('./errors/compilationFailed');

function compileWith(compilerName, inputFile, outputFile, link = true) {
  const command = `${compilerName} -o ${outputFile}${link ? '' : '-c'}`;

  return exec(command)
    .then(() => Promise.resolve(inputFile))
    .catch(() => Promise.reject(new CompilationFailedError(compilerName, inputFile)));
}

function compileWithGcc(inputFile, outputFile, link = true) {
  return compileWith('gcc', inputFile, outputFile, link);
}

function compileWithGPlus(inputFile, outputFile, link = true) {
  return compileWith('g++', inputFile, outputFile, link);
}

function compileWithClang(inputFile, outputFile, link = true) {
  return compileWith('clang', inputFile, outputFile, link);
}

function compileWithClangPlus(inputFile, outputFile, link = true) {
  return compileWith('clang++', inputFile, outputFile, link);
}

module.exports = {
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
};
