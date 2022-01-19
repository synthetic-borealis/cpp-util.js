class NoCompilerFoundError extends Error {
  /**
   * NoCompilerFound Error constructor
   */
  constructor() {
    super('No compiler was detected');
  }
}

module.exports = NoCompilerFoundError;
