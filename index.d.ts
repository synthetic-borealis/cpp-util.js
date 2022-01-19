declare const _exports: {
    compileWith: typeof import("./lib/compilation").compileWith;
    compileWithGcc: typeof import("./lib/compilation").compileWithGcc;
    compileWithGPlus: typeof import("./lib/compilation").compileWithGPlus;
    compileWithClang: typeof import("./lib/compilation").compileWithClang;
    compileWithClangPlus: typeof import("./lib/compilation").compileWithClangPlus;
    checkForCompiler: typeof import("./lib/compilerDetection").checkForCompiler;
    checkForGcc: typeof import("./lib/compilerDetection").checkForGcc;
    checkForGPlus: typeof import("./lib/compilerDetection").checkForGPlus;
    checkForClang: typeof import("./lib/compilerDetection").checkForClang;
    checkForClangPlus: typeof import("./lib/compilerDetection").checkForClangPlus;
    detectAllCompilers: typeof import("./lib/compilerDetection").detectAllCompilers;
    CompilerNotFoundError: typeof import("./lib/errors/compilerNotFound");
    NoCompilerFoundError: typeof import("./lib/errors/noCompilerFound");
    CompilationFailedError: typeof import("./lib/errors/compilationFailed");
};
export = _exports;
