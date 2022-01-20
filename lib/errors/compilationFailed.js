class CompilationFailedError extends Error {
  /**
   * CompilationFailed Error constructor
   * @param {string} compiler The name of the compiler used.
   * @param {string} file The source file in which the error occured.
   */
  constructor(compiler, file) {
    super(`Failed to compile '${file}' with ${compiler}`);
  }
}

module.exports = CompilationFailedError;
