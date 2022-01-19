/**
 * Checks whether a compiler is in the system path (i.e. PATH).
 * @param {string} compilerName The compiler to look for.
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForCompiler(compilerName: string): Promise<{
    compiler: string;
    version: string;
}>;
/**
 * Checks whether gcc is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForGcc(): Promise<{
    compiler: string;
    version: string;
}>;
/**
 * Checks whether g++ is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForGPlus(): Promise<{
    compiler: string;
    version: string;
}>;
/**
 * Checks whether clang is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForClang(): Promise<{
    compiler: string;
    version: string;
}>;
/**
 * Checks whether clang++ is in the system path (i.e. PATH).
 * @returns {Promise<{compiler: string, version: string}>}
 */
export function checkForClangPlus(): Promise<{
    compiler: string;
    version: string;
}>;
/**
 *
 * @returns {Promise<Array<{compiler: string, version: string}>>}
 */
export function detectAllCompilers(): Promise<Array<{
    compiler: string;
    version: string;
}>>;
