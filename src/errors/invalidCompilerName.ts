export default class InvalidCompilerNameError extends Error {
  constructor() {
    super('Invalid compiler executable name');
  }
}
