# @lexical/code-shiki

## Interfaces

### Tokenizer

**Defined in:** `packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:75`

#### Properties

- **`defaultLanguage`**: `string`
- **`defaultTheme`**: `string`
- **`$tokenize`**: `(this, codeNode, language?) => LexicalNode[]`

#### Parameters

- **this**: `Tokenizer`
- **codeNode**: `CodeNode`
- **language?**: `string`

#### Returns

`LexicalNode[]`

## Variables

### CodeHighlighterShikiExtension

```typescript
const CodeHighlighterShikiExtension: LexicalExtension<Tokenizer, "@lexical/code-shiki", unknown, unknown>
```

**Defined in:** `packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:930`

Add code highlighting support for code blocks with Shiki

### ShikiTokenizer

```typescript
const ShikiTokenizer: Tokenizer
```

**Defined in:** `packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:87`

## Functions

### getCodeLanguageOptions()

```typescript
getCodeLanguageOptions(): [string, string][]
```

**Defined in:** `packages/lexical-code-shiki/src/FacadeShiki.ts:119`

#### Returns

`[string, string][]`

---

### getCodeThemeOptions()

```typescript
getCodeThemeOptions(): [string, string][]
```

**Defined in:** `packages/lexical-code-shiki/src/FacadeShiki.ts:122`

#### Returns

`[string, string][]`

---

### isCodeLanguageLoaded()

```typescript
isCodeLanguageLoaded(language): boolean
```

**Defined in:** `packages/lexical-code-shiki/src/FacadeShiki.ts:38`

#### Parameters

- **language**: `string`

#### Returns

`boolean`

---

### loadCodeLanguage()

```typescript
loadCodeLanguage(language, editor?, codeNodeKey?): undefined | Promise<void>
```

**Defined in:** `packages/lexical-code-shiki/src/FacadeShiki.ts:51`

#### Parameters

- **language**: `string`
- **editor?**: `LexicalEditor`
- **codeNodeKey?**: `string`

#### Returns

`undefined | Promise<void>`

---

### loadCodeTheme()

```typescript
loadCodeTheme(theme, editor?, codeNodeKey?): undefined | Promise<void>
```

**Defined in:** `packages/lexical-code-shiki/src/FacadeShiki.ts:97`

#### Parameters

- **theme**: `string`
- **editor?**: `LexicalEditor`
- **codeNodeKey?**: `string`

#### Returns

`undefined | Promise<void>`

---

### normalizeCodeLanguage()

```typescript
normalizeCodeLanguage(language): string
```

**Defined in:** `packages/lexical-code-shiki/src/FacadeShiki.ts:126`

#### Parameters

- **language**: `string`

#### Returns

`string`

---

### registerCodeHighlighting()

```typescript
registerCodeHighlighting(editor, tokenizer?): () => void
```

**Defined in:** `packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:774`

#### Parameters

- **editor**: `LexicalEditor`
- **tokenizer?**: `Tokenizer`

#### Returns

`(): void`
