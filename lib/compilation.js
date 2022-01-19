const { exec } = require('./utils/executionHelpers');
const CompilationFailedError = require('./errors/compilationFailed');

function compileWith(compilerName, inputFile, outputFile) {
  return exec(`${compilerName} -c ${inputFile} -o ${outputFile}`)
    .then(() => Promise.resolve(inputFile))
    .catch(() => Promise.reject(new CompilationFailedError(compilerName, inputFile)));
}

module.exports = { compileWith };
