cpp-utils

# cpp-utils

## Table of contents

### Classes

- [CompilationFailedError](classes/CompilationFailedError.md)
- [CompilerNotFoundError](classes/CompilerNotFoundError.md)

### Compilation Functions

- [compileWith](API.md#compilewith)
- [compileWithClang](API.md#compilewithclang)
- [compileWithClangPlus](API.md#compilewithclangplus)
- [compileWithGPlus](API.md#compilewithgplus)
- [compileWithGcc](API.md#compilewithgcc)

### Compiler Detection Functions

- [checkForClang](API.md#checkforclang)
- [checkForClangPlus](API.md#checkforclangplus)
- [checkForCompiler](API.md#checkforcompiler)
- [checkForGPlus](API.md#checkforgplus)
- [checkForGcc](API.md#checkforgcc)

## Compilation Functions

### compileWith

▸ **compileWith**(`compilerName`, `inputFile`, `outputFile`, `link`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source.

**`Throws`**

[CompilationFailedError](classes/CompilationFailedError.md) if compilation fails.

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

[src/compilation.ts:14](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilation.ts#L14)

___

### compileWithClang

▸ **compileWithClang**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using clang.

**`Throws`**

[CompilationFailedError](classes/CompilationFailedError.md) if compilation fails.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:67](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilation.ts#L67)

___

### compileWithClangPlus

▸ **compileWithClangPlus**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using clang++.

**`Throws`**

[CompilationFailedError](classes/CompilationFailedError.md) if compilation fails.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:80](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilation.ts#L80)

___

### compileWithGPlus

▸ **compileWithGPlus**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using g++.

**`Throws`**

[CompilationFailedError](classes/CompilationFailedError.md) if compilation fails.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:54](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilation.ts#L54)

___

### compileWithGcc

▸ **compileWithGcc**(`inputFile`, `outputFile`, `link?`): `Promise`<{ `inputFile`: `string`  }\>

Compiles C/C++ source using gcc.

**`Throws`**

[CompilationFailedError](classes/CompilationFailedError.md) if compilation fails.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inputFile` | `string` | `undefined` | Source file to compile. |
| `outputFile` | `string` | `undefined` | Output file name. |
| `link` | `boolean` | `true` | Should result be linked. |

#### Returns

`Promise`<{ `inputFile`: `string`  }\>

#### Defined in

[src/compilation.ts:41](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilation.ts#L41)

___

## Compiler Detection Functions

### checkForClang

▸ **checkForClang**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether clang is in the system path (i.e. PATH).

**`Throws`**

[CompilerNotFoundError](classes/CompilerNotFoundError.md) if clang can't be found in the system path.

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:57](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilerDetection.ts#L57)

___

### checkForClangPlus

▸ **checkForClangPlus**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether clang++ is in the system path (i.e. PATH).

**`Throws`**

[CompilerNotFoundError](classes/CompilerNotFoundError.md) if clang++ can't be found in the system path.

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:67](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilerDetection.ts#L67)

___

### checkForCompiler

▸ **checkForCompiler**(`compilerName`): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether a compiler is in the system path (i.e. PATH).

**`Throws`**

[CompilerNotFoundError](classes/CompilerNotFoundError.md) if specified compiler can't be found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compilerName` | `string` | The compiler to look for. |

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:12](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilerDetection.ts#L12)

___

### checkForGPlus

▸ **checkForGPlus**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether g++ is in the system path (i.e. PATH).

**`Throws`**

[CompilerNotFoundError](classes/CompilerNotFoundError.md) if g++ can't be found in the system path.

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:47](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilerDetection.ts#L47)

___

### checkForGcc

▸ **checkForGcc**(): `Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

Checks whether gcc is in the system path (i.e. PATH).

**`Throws`**

[CompilerNotFoundError](classes/CompilerNotFoundError.md) if gcc can't be found in the system path.

#### Returns

`Promise`<{ `compiler`: `string` ; `version`: `string`  }\>

#### Defined in

[src/compilerDetection.ts:37](https://github.com/synthetic-borealis/cpp-utils.js/blob/3d07fd4/src/compilerDetection.ts#L37)
