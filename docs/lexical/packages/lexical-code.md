# @lexical/code

## Classes

### CodeHighlightNode

**Defined in:** `packages/lexical-code/src/CodeHighlightNode.ts:35`

**Extends:** `TextNode`

#### Constructors

```typescript
new CodeHighlightNode(text, highlightType?, key?): CodeHighlightNode
```

**Parameters:**
- `text`: `string = ''`
- `highlightType?`: `null | string`
- `key?`: `string`

#### Methods

- **`canHaveFormat()`**: `boolean` - Returns true if the text node supports font styling.
- **`createDOM(config)`**: `HTMLElement` - Called during the reconciliation process.
- **`createParentElementNode()`**: `ElementNode` - The creation logic for any required parent.
- **`exportJSON()`**: `SerializedCodeHighlightNode` - Controls how the node is serialized to JSON.
- **`getHighlightType()`**: `undefined | null | string`
- **`isParentRequired()`**: `true` - Whether or not this node has a required parent.
- **`setFormat(format)`**: `this` - Sets the node format.
- **`setHighlightType(highlightType?)**: `this`
- **`updateDOM(prevNode, dom, config)`**: `boolean` - Called when a node changes.
- **`updateFromJSON(serializedNode)`**: `this` - Update from serialized JSON.
- **`clone(node)`**: `static` - Clones this node.
- **`getType()`**: `static` - Returns the string type of this node.
- **`importJSON(serializedNode)`**: `static` - Controls deserialization.

---

### CodeNode

**Defined in:** `packages/lexical-code/src/CodeNode.ts:69`

**Extends:** `ElementNode`

#### Constructors

```typescript
new CodeNode(language?, key?): CodeNode
```

**Parameters:**
- `language?`: `null | string`
- `key?`: `string`

#### Methods

- **`afterCloneFrom(prevNode)`**: `void` - Perform state updates on the clone.
- **`canIndent()`**: `false` - Code nodes cannot be indented.
- **`collapseAtStart()`**: `boolean`
- **`createDOM(config)`**: `HTMLElement`
- **`exportDOM(editor)`**: `DOMExportOutput` - Controls HTML serialization.
- **`exportJSON()`**: `SerializedCodeNode` - Controls JSON serialization.
- **`getIsSyntaxHighlightSupported()`**: `boolean`
- **`getLanguage()`**: `undefined | null | string`
- **`getTheme()`**: `undefined | string`
- **`insertNewAfter(selection, restoreSelection)`**: `null | TabNode | ParagraphNode | CodeHighlightNode`
- **`setIsSyntaxHighlightSupported(isSupported)`**: `this`
- **`setLanguage(language)`**: `this`
- **`setTheme(theme)`**: `this`
- **`updateDOM(prevNode, dom, config)`**: `boolean`
- **`updateFromJSON(serializedNode)`**: `this`
- **`clone(node)`**: `static`
- **`getType()`**: `static`
- **`importDOM()`**: `static` - Returns DOM conversion map.
- **`importJSON(serializedNode)`**: `static`

#### Static Properties

- **`DEFAULT_CODE_LANGUAGE`**: `"javascript"`

## Type Aliases

### SerializedCodeNode

```typescript
SerializedCodeNode = Spread<{
  language: string | null | undefined;
  theme?: string;
}, SerializedElementNode>
```

## Variables

### CODE_LANGUAGE_FRIENDLY_NAME_MAP

```typescript
const CODE_LANGUAGE_FRIENDLY_NAME_MAP: Record<string, string>
```

### CODE_LANGUAGE_MAP

```typescript
const CODE_LANGUAGE_MAP: Record<string, string>
```

### CodeExtension

```typescript
const CodeExtension: LexicalExtension<ExtensionConfigBase, "@lexical/code", unknown, unknown>
```

Add code blocks to the editor (syntax highlighting provided separately)

### PrismTokenizer

```typescript
const PrismTokenizer: Tokenizer
```

## Functions

### $createCodeHighlightNode()

```typescript
$createCodeHighlightNode(text, highlightType?): CodeHighlightNode
```

### $createCodeNode()

```typescript
$createCodeNode(language?, theme?): CodeNode
```

### $getCodeLineDirection()

```typescript
$getCodeLineDirection(anchor): null | "ltr" | "rtl"
```

Determines the visual writing direction of a code line.

### $getEndOfCodeInLine()

```typescript
$getEndOfCodeInLine(anchor): TabNode | CodeHighlightNode
```

### $getFirstCodeNodeOfLine()

```typescript
$getFirstCodeNodeOfLine(anchor): LineBreakNode | TabNode | CodeHighlightNode
```

### $getLastCodeNodeOfLine()

```typescript
$getLastCodeNodeOfLine(anchor): LineBreakNode | TabNode | CodeHighlightNode
```

### $getStartOfCodeInLine()

```typescript
$getStartOfCodeInLine(anchor, offset): null | { node: LineBreakNode | TabNode | CodeHighlightNode; offset: number; }
```

### $isCodeHighlightNode()

```typescript
$isCodeHighlightNode(node): node is CodeHighlightNode
```

### $isCodeNode()

```typescript
$isCodeNode(node): node is CodeNode
```

### getCodeLanguageOptions()

```typescript
getCodeLanguageOptions(): [string, string][]
```

### getCodeLanguages()

```typescript
getCodeLanguages(): string[]
```

### getCodeThemeOptions()

```typescript
getCodeThemeOptions(): [string, string][]
```

### getDefaultCodeLanguage()

```typescript
getDefaultCodeLanguage(): string
```

### getLanguageFriendlyName()

```typescript
getLanguageFriendlyName(lang): string
```

### normalizeCodeLang()

```typescript
normalizeCodeLang(lang): string
```

### registerCodeHighlighting()

```typescript
registerCodeHighlighting(editor, tokenizer?): () => void
```
