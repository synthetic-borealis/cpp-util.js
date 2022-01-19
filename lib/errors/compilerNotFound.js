class CompilerNotFound extends Error {
  constructor(compilerName) {
    super(`Compiler ${compilerName} was not found`);
  }
}

module.exports = CompilerNotFound;
