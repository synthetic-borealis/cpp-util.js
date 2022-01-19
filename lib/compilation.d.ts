/**
 * Compiles C/C++ source.
 * @param {string} compilerName Compiler to use.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile></inputFile>}
 */
export function compileWith(compilerName: string, inputFile: string, outputFile: string, link?: boolean): Promise<string>;
/**
 * Compiles C/C++ source using gcc.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
export function compileWithGcc(inputFile: string, outputFile: string, link?: boolean): Promise<string>;
/**
 * Compiles C/C++ source using g++.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
export function compileWithGPlus(inputFile: string, outputFile: string, link?: boolean): Promise<string>;
/**
 * Compiles C/C++ source using clang.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
export function compileWithClang(inputFile: string, outputFile: string, link?: boolean): Promise<string>;
/**
 * Compiles C/C++ source using clang++.
 * @param {string} inputFile Source file to compile.
 * @param {string} outputFile Output file name.
 * @param {boolean} link Should result be linked.
 * @returns {Promise<inputFile>}
 */
export function compileWithClangPlus(inputFile: string, outputFile: string, link?: boolean): Promise<string>;
