const { exec } = require('./utils/executionHelpers');
const CompilationFailedError = require('./errors/compilationFailed');

function compileWith(compilerName, inputFile, outputFile) {
  return exec(`${compilerName} -c ${inputFile} -o ${outputFile}`)
    .then(() => Promise.resolve(inputFile))
    .catch(() => Promise.reject(new CompilationFailedError(compilerName, inputFile)));
}

function compileWithGcc(inputFile, outputFile) {
  return compileWith('gcc', inputFile, outputFile);
}

function compileWithGPlus(inputFile, outputFile) {
  return compileWith('g++', inputFile, outputFile);
}

function compileWithClang(inputFile, outputFile) {
  return compileWith('clang', inputFile, outputFile);
}

function compileWithClangPlus(inputFile, outputFile) {
  return compileWith('clang++', inputFile, outputFile);
}

module.exports = {
  compileWith,
  compileWithGcc,
  compileWithGPlus,
  compileWithClang,
  compileWithClangPlus,
};
