export = CompilationFailedError;
declare class CompilationFailedError extends Error {
    /**
     * CompilationFailed Error constructor
     * @param {string} compiler The name of the compiler used.
     * @param {string} file The source file in which the error occured.
     */
    constructor(compiler: string, file: string);
}
