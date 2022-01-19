class CompilationFailedError extends Error {
  constructor(compiler, file) {
    super(`Failed to compile '${file}' with ${compiler}`);
  }
}

module.exports = CompilationFailedError;
