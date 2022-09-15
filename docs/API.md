cpp-utils

# cpp-utils

## Table of contents

### Classes

- [CompilationFailedError](classes/CompilationFailedError.md)
- [CompilerNotFoundError](classes/CompilerNotFoundError.md)

### Functions

- [checkForClang](API.md#checkforclang)
- [checkForClangPlus](API.md#checkforclangplus)
- [checkForCompiler](API.md#checkforcompiler)
- [checkForGPlus](API.md#checkforgplus)
- [checkForGcc](API.md#checkforgcc)
- [compileWith](API.md#compilewith)
- [compileWithClang](API.md#compilewithclang)
- [compileWithClangPlus](API.md#compilewithclangplus)
- [compileWithGPlus](API.md#compilewithgplus)
- [compileWithGcc](API.md#compilewithgcc)

## Functions

### checkForClang

▸ **checkForClang**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether clang is in the system path (i.e. PATH).

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:49](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilerDetection.ts#L49)

___

### checkForClangPlus

▸ **checkForClangPlus**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether clang++ is in the system path (i.e. PATH).

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:57](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilerDetection.ts#L57)

___

### checkForCompiler

▸ **checkForCompiler**(`compilerName`): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether a compiler is in the system path (i.e. PATH).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compilerName` | `string` | The compiler to look for. |

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:10](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilerDetection.ts#L10)

___

### checkForGPlus

▸ **checkForGPlus**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether g++ is in the system path (i.e. PATH).

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:41](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilerDetection.ts#L41)

___

### checkForGcc

▸ **checkForGcc**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether gcc is in the system path (i.e. PATH).

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:33](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilerDetection.ts#L33)

___

### compileWith

▸ **compileWith**(`compilerName`, `inputFile`, `outputFile`, `link`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compilerName` | `string` | Compiler to use. |
| `inputFile` | `string` | Source file to compile. |
| `outputFile` | `string` | Output file name. |
| `link` | `boolean` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:12](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilation.ts#L12)

___

### compileWithClang

▸ **compileWithClang**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using clang.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:59](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilation.ts#L59)

___

### compileWithClangPlus

▸ **compileWithClangPlus**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using clang++.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:70](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilation.ts#L70)

___

### compileWithGPlus

▸ **compileWithGPlus**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using g++.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:48](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilation.ts#L48)

___

### compileWithGcc

▸ **compileWithGcc**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using gcc.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:37](https://github.com/synthetic-borealis/cpp-utils.js/blob/e95f965/src/compilation.ts#L37)
