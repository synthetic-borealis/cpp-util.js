## Classes

<dl>
<dt><a href="#CompilationFailedError">CompilationFailedError</a></dt>
<dd></dd>
<dt><a href="#CompilerNotFoundError">CompilerNotFoundError</a></dt>
<dd></dd>
<dt><a href="#NoCompilerFoundError">NoCompilerFoundError</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#compileWith">compileWith(compilerName, inputFile, outputFile, link)</a> ⇒ <code>Promise.&lt;inputFile&gt;</code></dt>
<dd><p>Compiles C/C++ source.</p>
</dd>
<dt><a href="#compileWithGcc">compileWithGcc(inputFile, outputFile, link)</a> ⇒ <code>Promise.&lt;inputFile&gt;</code></dt>
<dd><p>Compiles C/C++ source using gcc.</p>
</dd>
<dt><a href="#compileWithGPlus">compileWithGPlus(inputFile, outputFile, link)</a> ⇒ <code>Promise.&lt;inputFile&gt;</code></dt>
<dd><p>Compiles C/C++ source using g++.</p>
</dd>
<dt><a href="#compileWithClang">compileWithClang(inputFile, outputFile, link)</a> ⇒ <code>Promise.&lt;inputFile&gt;</code></dt>
<dd><p>Compiles C/C++ source using clang.</p>
</dd>
<dt><a href="#compileWithClangPlus">compileWithClangPlus(inputFile, outputFile, link)</a> ⇒ <code>Promise.&lt;inputFile&gt;</code></dt>
<dd><p>Compiles C/C++ source using clang++.</p>
</dd>
<dt><a href="#checkForCompiler">checkForCompiler(compilerName)</a> ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code></dt>
<dd><p>Checks whether a compiler is in the system path (i.e. PATH).</p>
</dd>
<dt><a href="#checkForGcc">checkForGcc()</a> ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code></dt>
<dd><p>Checks whether gcc is in the system path (i.e. PATH).</p>
</dd>
<dt><a href="#checkForGPlus">checkForGPlus()</a> ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code></dt>
<dd><p>Checks whether g++ is in the system path (i.e. PATH).</p>
</dd>
<dt><a href="#checkForClang">checkForClang()</a> ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code></dt>
<dd><p>Checks whether clang is in the system path (i.e. PATH).</p>
</dd>
<dt><a href="#checkForClangPlus">checkForClangPlus()</a> ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code></dt>
<dd><p>Checks whether clang++ is in the system path (i.e. PATH).</p>
</dd>
<dt><a href="#detectAllCompilers">detectAllCompilers()</a> ⇒ <code>Promise.&lt;Array.&lt;{compiler: string, version: string}&gt;&gt;</code></dt>
<dd></dd>
</dl>

<a name="CompilationFailedError"></a>

## CompilationFailedError
**Kind**: global class  
<a name="new_CompilationFailedError_new"></a>

### new CompilationFailedError(compiler, file)
CompilationFailed Error constructor


| Param | Type | Description |
| --- | --- | --- |
| compiler | <code>string</code> | The name of the compiler used. |
| file | <code>string</code> | The source file in which the error occurred. |

<a name="CompilerNotFoundError"></a>

## CompilerNotFoundError
**Kind**: global class  
<a name="new_CompilerNotFoundError_new"></a>

### new CompilerNotFoundError(compilerName)
CompilerNotFound Error constructor


| Param | Type | Description |
| --- | --- | --- |
| compilerName | <code>string</code> | The name of the compiler that wasn't found. |

<a name="NoCompilerFoundError"></a>

## NoCompilerFoundError
**Kind**: global class  
<a name="new_NoCompilerFoundError_new"></a>

### new NoCompilerFoundError()
NoCompilerFound Error constructor

<a name="compileWith"></a>

## compileWith(compilerName, inputFile, outputFile, link) ⇒ <code>Promise.&lt;inputFile&gt;</code>
Compiles C/C++ source.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| compilerName | <code>string</code> |  | Compiler to use. |
| inputFile | <code>string</code> |  | Source file to compile. |
| outputFile | <code>string</code> |  | Output file name. |
| link | <code>boolean</code> | <code>true</code> | Should result be linked. |

<a name="compileWithGcc"></a>

## compileWithGcc(inputFile, outputFile, link) ⇒ <code>Promise.&lt;inputFile&gt;</code>
Compiles C/C++ source using gcc.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| inputFile | <code>string</code> |  | Source file to compile. |
| outputFile | <code>string</code> |  | Output file name. |
| link | <code>boolean</code> | <code>true</code> | Should result be linked. |

<a name="compileWithGPlus"></a>

## compileWithGPlus(inputFile, outputFile, link) ⇒ <code>Promise.&lt;inputFile&gt;</code>
Compiles C/C++ source using g++.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| inputFile | <code>string</code> |  | Source file to compile. |
| outputFile | <code>string</code> |  | Output file name. |
| link | <code>boolean</code> | <code>true</code> | Should result be linked. |

<a name="compileWithClang"></a>

## compileWithClang(inputFile, outputFile, link) ⇒ <code>Promise.&lt;inputFile&gt;</code>
Compiles C/C++ source using clang.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| inputFile | <code>string</code> |  | Source file to compile. |
| outputFile | <code>string</code> |  | Output file name. |
| link | <code>boolean</code> | <code>true</code> | Should result be linked. |

<a name="compileWithClangPlus"></a>

## compileWithClangPlus(inputFile, outputFile, link) ⇒ <code>Promise.&lt;inputFile&gt;</code>
Compiles C/C++ source using clang++.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| inputFile | <code>string</code> |  | Source file to compile. |
| outputFile | <code>string</code> |  | Output file name. |
| link | <code>boolean</code> | <code>true</code> | Should result be linked. |

<a name="checkForCompiler"></a>

## checkForCompiler(compilerName) ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code>
Checks whether a compiler is in the system path (i.e. PATH).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| compilerName | <code>string</code> | The compiler to look for. |

<a name="checkForGcc"></a>

## checkForGcc() ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code>
Checks whether gcc is in the system path (i.e. PATH).

**Kind**: global function  
<a name="checkForGPlus"></a>

## checkForGPlus() ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code>
Checks whether g++ is in the system path (i.e. PATH).

**Kind**: global function  
<a name="checkForClang"></a>

## checkForClang() ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code>
Checks whether clang is in the system path (i.e. PATH).

**Kind**: global function  
<a name="checkForClangPlus"></a>

## checkForClangPlus() ⇒ <code>Promise.&lt;{compiler: string, version: string}&gt;</code>
Checks whether clang++ is in the system path (i.e. PATH).

**Kind**: global function  
<a name="detectAllCompilers"></a>

## detectAllCompilers() ⇒ <code>Promise.&lt;Array.&lt;{compiler: string, version: string}&gt;&gt;</code>
**Kind**: global function  
